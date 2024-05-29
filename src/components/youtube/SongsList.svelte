<script lang="ts">
  import { YoutubeUrlSrc } from '@/const/url';
  import type { Song } from '@/types/Youtube';
  import {
    createColumnHelper,
    createSvelteTable,
    flexRender,
    getCoreRowModel,
    getFilteredRowModel,
    getPaginationRowModel,
    getSortedRowModel,
    renderComponent,
    type OnChangeFn,
    type PaginationState,
    type SortingState,
    type TableOptions,
  } from '@tanstack/svelte-table';
  import { writable } from 'svelte/store';
  import PlayLink from './PlayLink.svelte';
  import StreamLink from './StreamLink.svelte';

  export let songs: Song[];
  const props = {
    songs,
  };

  let sorting: SortingState = [];
  let pagination: PaginationState = {
    pageIndex: 0,
    pageSize: 5,
  };

  const setSorting: OnChangeFn<SortingState> = (updater) => {
    if (updater instanceof Function) {
      sorting = updater(sorting);
    } else {
      sorting = updater;
    }
    options.update((old) => ({
      ...old,
      state: {
        ...old.state,
        sorting,
      },
    }));
  };

  const setPagination: OnChangeFn<PaginationState> = (updater) => {
    if (updater instanceof Function) {
      pagination = updater(pagination);
    } else {
      pagination = updater;
    }
    options.update((old) => ({
      ...old,
      state: {
        ...old.state,
        pagination,
      },
    }));
  };

  const columnHelper = createColumnHelper<Song>();

  const options = writable<TableOptions<Song>>({
    data: songs,
    columns: [
      columnHelper.accessor('id', {
        header: 'No',
        cell: (cell) => cell.getValue(),
        size: 80,
      }),
      columnHelper.accessor('title', {
        header: 'Title',
        cell: (cell) => cell.getValue(),
        size: 400,
      }),
      columnHelper.accessor('artist', {
        header: 'Artist',
        cell: (cell) => cell.getValue(),
        size: 200,
      }),
      columnHelper.display({
        header: 'Stream',
        cell: (cell) => {
          const rowData = cell.row.original;
          return renderComponent(StreamLink, {
            url: YoutubeUrlSrc.Movie.url + rowData.stream?.videoId,
            label: rowData.stream?.title,
          });
        },
        size: 400,
      }),
      columnHelper.accessor('stream.date', {
        header: 'Date',
        cell: (cell) => cell.getValue().toLocaleDateString(),
        size: 100,
      }),
      columnHelper.display({
        header: 'Play',
        cell: (cell) => {
          const rowData = cell.row.original;
          return renderComponent(PlayLink, {
            url:
              YoutubeUrlSrc.Movie.url +
              rowData.stream?.videoId +
              YoutubeUrlSrc.Movie.option.time +
              rowData.time,
          });
        },
        size: 100,
      }),
      columnHelper.display({
        header: 'Share',
        cell: (cell) => {
          const rowData = cell.row.original;
          return renderComponent(PlayLink, {
            url:
              YoutubeUrlSrc.Movie.url +
              rowData.stream?.videoId +
              YoutubeUrlSrc.Movie.option.time +
              rowData.time,
          });
        },
        size: 100,
      }),
    ],
    state: {
      sorting,
      pagination,
    },
    getCoreRowModel: getCoreRowModel(),
    onSortingChange: setSorting,
    getSortedRowModel: getSortedRowModel(),
    getFilteredRowModel: getFilteredRowModel(),
    autoResetPageIndex: true,
    getPaginationRowModel: getPaginationRowModel(),
    onPaginationChange: setPagination,
  });

  const table = createSvelteTable(options);

  let globalFilter = '';
  const handleKeyUp = (e: any) => {
    $table.setGlobalFilter(String(e?.target?.value));
  };

  let pageSize = 5;
  $table.setPageSize(pageSize);

  let playingSong = songs[0];

  const setPlayingSong = (event: { currentTarget: HTMLTableCellElement }) => {
    const index = Number(event.currentTarget.id);
    playingSong = songs[index];
  };
</script>

<div class="flex justify-center p-2">
  <iframe
    width="680"
    height="383"
    src="https://www.youtube.com/embed/{playingSong.stream
      ?.videoId}?start={playingSong.time.slice(
      0,
      -1
    )}&autoplay=1&playsinline=1&controls=1"
    title="YouTube video player"
    allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture; "
    referrerpolicy="strict-origin-when-cross-origin"
    allowfullscreen
  ></iframe>
</div>

<input
  type="text"
  placeholder="No/Song/Artist"
  class="w-full p-1 border"
  bind:value={globalFilter}
  on:keyup={handleKeyUp}
/>
<span class="w-full p-1"
  >このページで再生する場合は各曲のTitleをクリックして曲を選択、別タブで動画を開いて再生する場合はPlayボタンを押してください.</span
>
<div class="w-full table-wrapper">
  <table>
    <thead>
      {#each $table.getHeaderGroups() as headerGroup}
        <tr class="diagonal-gradient">
          {#each headerGroup.headers as header}
            <th
              class="p-1 text-left"
              style="width:{header.column.getSize()}px;"
            >
              {#if !header.isPlaceholder}
                <!-- svelte-ignore a11y-click-events-have-key-events -->
                <!-- svelte-ignore a11y-no-static-element-interactions -->
                <div
                  class:cursor-pointer={header.column.getCanSort()}
                  class:select-none={header.column.getCanSort()}
                  on:click={header.column.getToggleSortingHandler()}
                >
                  <svelte:component
                    this={flexRender(
                      header.column.columnDef.header,
                      header.getContext()
                    )}
                  />
                  {#if header.column.getIsSorted().toString() === 'asc'}
                    🔼
                  {:else if header.column.getIsSorted().toString() === 'desc'}
                    🔽
                  {/if}
                </div>
              {/if}
            </th>
          {/each}
        </tr>
      {/each}
    </thead>
    <tbody>
      {#each $table.getRowModel().rows as row}
        <tr>
          {#each row.getVisibleCells() as cell}
            <td
              class="text-left"
              style="width:{cell.column.getSize()}px;"
              id={cell.row.index.toString()}
              on:click={setPlayingSong}
            >
              <svelte:component
                this={flexRender(cell.column.columnDef.cell, cell.getContext())}
              />
            </td>
          {/each}
        </tr>
      {/each}
    </tbody>
    <tfoot>
      {#each $table.getFooterGroups() as footerGroup}
        <tr>
          {#each footerGroup.headers as header}
            <th class="p-1">
              {#if !header.isPlaceholder}
                <svelte:component
                  this={flexRender(
                    header.column.columnDef.footer,
                    header.getContext()
                  )}
                />
              {/if}
            </th>
          {/each}
        </tr>
      {/each}
    </tfoot>
  </table>
</div>
<div class="flex items-center gap-2">
  <button
    class="p-1 border rounded"
    on:click={() => $table.firstPage()}
    disabled={!$table.getCanPreviousPage()}
  >
    {'<<'}
  </button>
  <button
    class="p-1 border rounded"
    on:click={() => $table.previousPage()}
    disabled={!$table.getCanPreviousPage()}
  >
    {'<'}
  </button>
  <button
    class="p-1 border rounded"
    on:click={() => $table.nextPage()}
    disabled={!$table.getCanNextPage()}
  >
    {'>'}
  </button>
  <button
    class="p-1 border rounded"
    on:click={() => $table.lastPage()}
    disabled={!$table.getCanNextPage()}
  >
    {'>>'}
  </button>
  <span class="flex items-center gap-1">
    <div>Page</div>
    <strong>
      {$table.getState().pagination.pageIndex + 1} of{' '}
      {$table.getPageCount().toLocaleString()}
    </strong>
  </span>
</div>

<style>
  .table-wrapper {
    padding: 0.5em;
    margin: 0.5em;
    display: flex;
    /* justify-content: center;
    align-items: center; */
  }
  .diagonal-gradient {
    /* background: linear-gradient(to bottom right, #2d87f7, #ff82c9); */
    background: white;
    border: 2px solid;
  }
  tbody tr:nth-child(odd) td {
    padding: 0.5em;
    margin: 0.5em;
    background-color: #67b2ff;
  }
  tbody tr:nth-child(even) td {
    padding: 0.5em;
    margin: 0.5em;
    background-color: #f7a6ca;
  }
</style>

<script lang="ts">
  import {
  createColumnHelper,
    createSvelteTable,
    flexRender,
    getCoreRowModel,
    renderComponent,
  } from '@tanstack/svelte-table'
  import type { Song } from '@/types/Youtube';
  import { YoutubeUrlSrc } from '@/const/url';
  import PlayLink from './PlayLink.svelte';

  export let songs: Song[];
	const props = {
    songs
  };
  const columnHelper = createColumnHelper<Song>();
  
  const options = {
    data: songs,
    columns: [
      columnHelper.accessor("id", {
        header:'No',
        cell: (cell) => cell.getValue()
      }),
      columnHelper.accessor("title", {
        header:'Title',
        cell: (cell) => cell.getValue()
      }),
      columnHelper.accessor("artist", {
        header:'Artist',
        cell: (cell) => cell.getValue()
      }),
      columnHelper.display({
        header:'Play',
        cell: (cell) => {
          const rowData = cell.row.original;
          return renderComponent(PlayLink, {
            url: YoutubeUrlSrc.Movie.url + rowData.videoId + YoutubeUrlSrc.Movie.option.time + rowData.time
          })
        }
      }),
      // columnHelper.accessor("id", {
      //   header:'id',
      //   cell: (cell) => {
      //     const id = cell.getValue();
      //     return renderComponent(PlayLink, {
      //       // pass props
      //     })
      //   }
      // }),
    ],
    getCoreRowModel: getCoreRowModel(),
  }
  
  const table = createSvelteTable(options);
</script>

<div class="table-wrapper">
  <table>
    <thead>
      {#each $table.getHeaderGroups() as headerGroup}
        <tr class="diagonal-gradient">
          {#each headerGroup.headers as header}
            <th class="p-1" >
              {#if !header.isPlaceholder}
                <svelte:component
                  this={flexRender(
                    header.column.columnDef.header,
                    header.getContext()
                  )}
                />
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
            <td class="p-1" >
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
            <th class="p-1" >
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

<style>
  .table-wrapper {
    padding: 0.5em;
    margin: 0.5em;
		display: flex;
		justify-content: center;
		align-items: center;
  }
  .diagonal-gradient {
    background: linear-gradient(to bottom right, #2d87f7, #ff82c9);
  }
  tbody tr:nth-child(odd) td {
    /* width: 30%; */
    padding: 1.5em;
    margin: 1.5em;
    background-color: #67b2ff;
  }
  tbody tr:nth-child(even) td {
    /* width: 30%; */
    padding: 1.5em;
    margin: 1.5em;
    background-color: #f7a6ca;
  }
</style>

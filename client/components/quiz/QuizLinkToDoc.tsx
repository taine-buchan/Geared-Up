export default function QuizLinkToDoc() {
  function handleClick(): void {
    window.open(
      'https://www.doc.govt.nz/parks-and-recreation/things-to-do/walking-and-tramping/',
      '_blank',
    )
  }

  return (
    <div className="relative flex flex-col mx-auto my-6 bg-white shadow-sm border border-slate-200 rounded-lg w-96">
      <div className="p-4">
        <h1 className="mb-2 text-slate-800 text-xl font-semibold">
          Perhaps a shorter hike to get you started?
        </h1>
        <h3 className="text-slate-600 leading-normal font-light">
          New Zealand is filled with great walks, from coastal trails to alpine
          tracks, perfect for hikers of all levels.
        </h3>
        <br></br>
        <h3 className="text-slate-600 leading-normal font-light">
          To ease into it, we recommend visiting the Department of Conservation
          DoC website and choosing a Day Trip hike, a perfect way to get
          started.
        </h3>
        <button
          className="rounded-md bg-slate-800 py-2 px-4 mt-6 border border-transparent text-center text-sm text-white transition-all shadow-md hover:shadow-lg focus:bg-slate-700 focus:shadow-none active:bg-slate-700 hover:bg-slate-700 active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
          type="button"
          onClick={() => handleClick()}
        >
          Great Walks
        </button>
      </div>
    </div>
  )
}

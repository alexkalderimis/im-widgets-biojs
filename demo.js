var widget = new Biojs.InterMine.ListAnalysis({
  target: 'widget',
  tool: 'enrichment:pathway_enrichment',
  list: 'PL FlyTF_putativeTFs',
  url: 'http://www.flymine.org/query/service/'
});

widget.onAllEvents(console.log.bind(console, 'EVENT'));

var allWidgets = new Biojs.InterMine.ListAnalysis({
  target: 'all-ws',
  tool: 'all:Gene',
  list: 'PL FlyTF_putativeTFs',
  url: 'http://www.flymine.org/query/service/'
});


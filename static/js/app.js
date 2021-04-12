// create the function that gets the data and creates the plots for the id 
    // get the data from the json file
    d3.json("data/samples.json").then((data)=> {
        //console.log(data)

        // filter sample values by id 
        var samples = data.samples.filter(s => s.id === '940')[0];

        //console.log(samples);

        // get only top 10 sample values
        var sampleValues = samples.sample_values.slice(0, 10).reverse();

        // get only top 10 OTU id's
        var otu_ids = samples.otu_ids.slice(0, 10).map(id => ("OTU " + id)).reverse();

        // get only top 10 OTU labels
        var otu_labels = samples.otu_labels.slice(0, 10).reverse();
        
        //console.log(otu_ids);

        var trace1 = {
            x: sampleValues,  
            y: otu_ids,
            text: otu_labels,
            type: 'bar',
            orientation: 'h'
        };

        var bar_data = trace1;
    
        var bar_layout = {
            title: "Top 10 OTU's for individual",
       
        };
        Plotly.newPlot("bar", bar_data, bar_layout)
              
    });
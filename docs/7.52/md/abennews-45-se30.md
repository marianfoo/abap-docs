  

* * *

SAP NetWeaver AS ABAP Release 752, ©Copyright 2017 SAP AG. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenabap.htm) →  [ABAP - Release-Specific Changes](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abennews.htm) →  [Changes in Releases 4.xx](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abennews-4.htm) →  [Changes in Releases 4.0 and 4.5](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abennews-40.htm) →  [Further Changes in Release 4.5](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abennews-40-other-45a.htm) → 

Runtime Analysis in Release 4.5

[1\. Data compression](#!ABAP_MODIFICATION_1@1@)
[2\. Set measurement accuracy](#!ABAP_MODIFICATION_2@2@)
[3\. Info about the measurement interval](#!ABAP_MODIFICATION_3@3@)
[4\. Statistics](#!ABAP_MODIFICATION_4@4@)
[5\. Measurement short description](#!ABAP_MODIFICATION_5@5@)
[6\. Changes in the user interface](#!ABAP_MODIFICATION_6@6@)

Modification 1

Data compression
During measurement, the compressed data is written to a file in blocks. It is thus possible to save several comprehensive measurements. During the evaluation the compressed data is read and then decompressed.

Modification 2

Set measurement accuracy
Before the measurement, the [measurement accuracy](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abapset_run_time_clock_resolution.htm) can be set between high and low.

Modification 3

Info about Measurement interval
In the initial screen, choose Utilties → Measurement interval... to see the size of the maximum [measurement interval](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abapget_run_time.htm) of the machine in question depending on the measurement accuracy set.

Modification 4

Statistical values
When you call up the statistics, the following information is provided about the loaded programs:
\- Load size in bytes
\- Size of the global data in bytes
\- Number of [procedures](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenprocedure_glosry.htm "Glossary Entry") defined/used
Click on the title of a column to have the statistics sorted by this column.
Click on the number of procedures defined/used to see an overview of the procedures. In this overview, you can click on a procedure to go to the position of the procedure call or definition.

Modification 5

Measurement short description
To distinguish between measurements of the same object, you can enter a short description for each measurement.

Modification 6

Changes in the user interface

-   Initial screen: Settings → Measurement accuracy...(see [SET RUN TIME CLOCK RESOLUTION HIGH/LOW.](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abapset_run_time_clock_resolution.htm))
    
-   Initial screen: Utilities → Measurement interval ...
    
-   Overview screen: Goto → Statistics
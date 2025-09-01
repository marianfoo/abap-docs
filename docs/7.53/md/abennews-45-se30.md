  

* * *

AS ABAP Release 753, ©Copyright 2019 SAP AG. All rights reserved.

[ABAP Keyword Documentation](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenabap.htm) →  [ABAP - Release-Specific Changes](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abennews.htm) →  [Changes in Releases 4.xx](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abennews-4.htm) →  [Changes in Release 4.5](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abennews-40-other-45a.htm) → 

Runtime Analysis in Release 4.5

[1\. Data compression](#!ABAP_MODIFICATION_1@1@)
[2\. Setting measurement accuracy](#!ABAP_MODIFICATION_2@2@)
[3\. Information about the measurement interval](#!ABAP_MODIFICATION_3@3@)
[4\. Statistical values](#!ABAP_MODIFICATION_4@4@)
[5\. Short measurement description](#!ABAP_MODIFICATION_5@5@)
[6\. Interface changes](#!ABAP_MODIFICATION_6@6@)

Modification 1

Data Compression
During measurement, the compressed data is written to a file in blocks. It is thus possible to save multiple comprehensive measurements. During the evaluation the compressed data is read and then decompressed.

Modification 2

Setting Measurement Accuracy
Before the measurement, the [measurement accuracy](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abapset_run_time_clock_resolution.htm) can be set between high and low.

Modification 3

Information About the Measurement Interval
In the initial screen, choose Utilities → Measurement interval... to see the size of the maximum [measurement interval](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abapget_run_time.htm) of the machine in question depending on the measurement accuracy set.

Modification 4

Statistics
When the statistics are called up, the following information is provided about the loaded programs:
\- Load size in bytes
\- Size of the global data in bytes
\- Number of [procedures](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenprocedure_glosry.htm "Glossary Entry") defined/used
The statistics can be sorted by a column by clicking the title of the column once.
An overview of the procedures can be displayed by clicking the number of defined/used procedures once. In this overview, click a procedure to go to the position of the procedure call or definition.

Modification 5

Short Measurement Description
To distinguish between measurements of the same object, a short description can be specified for each measurement.

Modification 6

Interface Changes

-   Initial screen: Settings → Measurement Accuracy...(see [SET RUN TIME CLOCK RESOLUTION HIGH/LOW.](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abapset_run_time_clock_resolution.htm))
    
-   Initial screen: Utilities → Measurement Interval ...
    
-   Overview screen: Goto → Statistics
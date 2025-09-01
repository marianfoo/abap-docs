# ABAP - Keyword Documentation / ABAP - Release News / News for Release 4.xx / News for Release 4.5

Included pages: 3


### abennews-40-other-45a.htm

  

* * *

AS ABAP Release 756, ©Copyright 2021 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenabap.htm) →  [ABAP - Release News](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abennews.htm) →  [News for Release 4.xx](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abennews-4.htm) → 

News for Release 4.5

[1\. New Addition STABLE for the Statement SORT](#!ABAP_MODIFICATION_1@1@)
[2\. New Error Classes for Catchable Runtime Errors](#!ABAP_MODIFICATION_2@2@)
[3\. New Statement SET RUN TIME CLOCK RESOLUTION *\[*HIGH*|*LOW*\]*](#!ABAP_MODIFICATION_3@3@)
[4\. New Addition for EXPORT](#!ABAP_MODIFICATION_4@4@)
[5\. New Addition for IMPORT](#!ABAP_MODIFICATION_5@5@)
[6\. New Addition QUICKINFO for WRITE](#!ABAP_MODIFICATION_6@6@)

-   [Introducing ABAP Objects in Release 4.5](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abennews-40-objects.htm)
-   [Runtime Analysis in Release 4.5](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abennews-45-se30.htm)

Modification 1   

New Addition STABLE for the Statement SORT
This addition makes stable sorts of internal tables and [extract datasets](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenextract_dataset_glosry.htm "Glossary Entry") possible.

Modification 2   

New Error Classes for Catchable Runtime Errors
The following new [ERROR classes](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abensysexc-errkl.htm) are supported:
FILE\_ACCESS\_ERRORS
IMPORT\_MISMATCH\_ERRORS
LOCALIZATION\_ERRORS

Modification 3   

New Statement SET RUN TIME CLOCK RESOLUTION *\[*HIGH*|*LOW*\]*
This statement can be used to set the clock used to measure runtime in the statement [GET RUN TIME](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abapget_run_time.htm).

Modification 4   

New Addition for EXPORT
In [EXPORT obj1...objn TO DATABASE/SHARED BUFFER dbtab(ar) ID key](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abapexport_data_cluster.htm) the addition FROM wa uses the specified work area wa instead of the table work area.

Modification 5   

New Addition for IMPORT
In [IMPORT obj1...objn FROM DATABASE/SHARED BUFFER dbtab(ar) ID key](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abapimport_data_cluster.htm) the addition TO wa uses the specified work area wa instead of the table work area.

Modification 6   

New Addition QUICKINFO for WRITE
This addition for WRITE f is used to display the field f with the [tooltip](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abentool_tip_glosry.htm "Glossary Entry") g. The content of g appears as an explanatory text for f whenever the mouse pointer is positioned over f.

Continue
[Introducing ABAP Objects in Release 4.5](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abennews-40-objects.htm)
[Runtime Analysis in Release 4.5](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abennews-45-se30.htm)


### abennews-40-objects.htm

  

* * *

AS ABAP Release 756, ©Copyright 2021 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenabap.htm) →  [ABAP - Release News](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abennews.htm) →  [News for Release 4.xx](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abennews-4.htm) →  [News for Release 4.5](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abennews-40-other-45a.htm) → 

Introducing ABAP Objects in Release 4.5

Outlook

The kernel functions of ABAP Objects are available from Release 4.5A. The following enhancements are planned for the coming functional releases: simple inheritance for classes, composition of interfaces, dynamic invocation interfaces, persistent objects, GUI integration, virtual attributes, friends, final classes and methods, embedded objects.

ABAP Objects will first be used productively in pilot projects, which will probably produce minor changes to the language. Activities that prepare for the introduction of ABAP Objects in the applications will be performed in parallel. This should answer any fundamental questions about object-oriented programming in ABAP centrally.


### abennews-45-se30.htm

  

* * *

AS ABAP Release 756, ©Copyright 2021 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenabap.htm) →  [ABAP - Release News](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abennews.htm) →  [News for Release 4.xx](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abennews-4.htm) →  [News for Release 4.5](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abennews-40-other-45a.htm) → 

Runtime Analysis in Release 4.5

[1\. Data Compression](#!ABAP_MODIFICATION_1@1@)
[2\. Setting Measurement Accuracy](#!ABAP_MODIFICATION_2@2@)
[3\. Information About the Measurement Interval](#!ABAP_MODIFICATION_3@3@)
[4\. Statistics](#!ABAP_MODIFICATION_4@4@)
[5\. Short Measurement Description](#!ABAP_MODIFICATION_5@5@)
[6\. Interface Changes](#!ABAP_MODIFICATION_6@6@)

Modification 1   

Data Compression
During measurement, the compressed data is written to a file in blocks. It is thus possible to save multiple comprehensive measurements. During the evaluation the compressed data is read and then decompressed.

Modification 2   

Setting Measurement Accuracy
Before the measurement, the [measurement accuracy](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abapset_run_time_clock_resolution.htm) can be set between high and low.

Modification 3   

Information About the Measurement Interval
In the initial screen, choose Utilities → Measurement interval... to see the size of the maximum [measurement interval](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abapget_run_time.htm) of the machine in question depending on the measurement accuracy set.

Modification 4   

Statistics
When the statistics are called up, the following information is provided about the loaded programs:
\- Load size in bytes
\- Size of the global data in bytes
\- Number of [procedures](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenprocedure_glosry.htm "Glossary Entry") defined or used
The statistics can be sorted by a column by clicking the title of the column once.
An overview of the procedures can be displayed by clicking the number of defined or used procedures once. In this overview, click a procedure to go to the position of the procedure call or definition.

Modification 5   

Short Measurement Description
To distinguish between measurements of the same object, a short description can be specified for each measurement.

Modification 6   

Interface Changes

The following changes were made:

-   Initial screen: Settings → Measurement Accuracy...(see [SET RUN TIME CLOCK RESOLUTION HIGH/LOW](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abapset_run_time_clock_resolution.htm)).
-   Initial screen: Utilities → Measurement Interval ...
-   Overview screen: Goto → Statistics

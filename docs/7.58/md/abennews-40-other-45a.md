  

* * *

AS ABAP Release 758, ©Copyright 2024 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenabap.htm) →  [ABAP - ABAP Release News](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abennews.htm) →  [News for ABAP Release 4.xx](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abennews-4.htm) → 

 [![](Mail.gif?object=Mail.gif "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback%20on%20ABAP%20Documentation&body=Document:%20News%20for%20ABAP%20Release%204.5%2C%20ABENNEWS-40-OTHER-45A%2C%20758%0D%0A%0D%0AError:%0D%0A%0D%0A%0D%0A%0D%0ASuggestion%20for%20improvement:)

News for ABAP Release 4.5

[1\. New Addition STABLE for the Statement SORT](#!ABAP_MODIFICATION_1@1@)
[2\. New Error Classes for Catchable Runtime Errors](#!ABAP_MODIFICATION_2@2@)
[3\. New Statement SET RUN TIME CLOCK RESOLUTION *\[*HIGH*|*LOW*\]*](#!ABAP_MODIFICATION_3@3@)
[4\. New Addition for EXPORT](#!ABAP_MODIFICATION_4@4@)
[5\. New Addition for IMPORT](#!ABAP_MODIFICATION_5@5@)
[6\. New Addition QUICKINFO for WRITE](#!ABAP_MODIFICATION_6@6@)

-   [Introducing ABAP Objects in ABAP Release 4.5](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abennews-40-objects.htm)
-   [Runtime Analysis in ABAP Release 4.5](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abennews-45-se30.htm)

Modification 1   

New Addition STABLE for the Statement SORT

This addition makes stable sorts of internal tables and [extract datasets](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenextract_dataset_glosry.htm "Glossary Entry") possible.

Modification 2   

New Error Classes for Catchable Runtime Errors

The following new [ERROR classes](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abensysexc-errkl.htm) are supported:

FILE\_ACCESS\_ERRORS

IMPORT\_MISMATCH\_ERRORS

LOCALIZATION\_ERRORS

Modification 3   

New Statement SET RUN TIME CLOCK RESOLUTION *\[*HIGH*|*LOW*\]*

This statement can be used to set the clock used to measure runtime in the statement [GET RUN TIME](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abapget_run_time.htm).

Modification 4   

New Addition for EXPORT

In [EXPORT obj1...objn TO DATABASE/SHARED BUFFER dbtab(ar) ID key](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abapexport_data_cluster.htm) the addition FROM wa uses the specified work area wa instead of the table work area.

Modification 5   

New Addition for IMPORT

In [IMPORT obj1...objn FROM DATABASE/SHARED BUFFER dbtab(ar) ID key](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abapimport_data_cluster.htm) the addition TO wa uses the specified work area wa instead of the table work area.

Modification 6   

New Addition QUICKINFO for WRITE

This addition for WRITE f is used to display the field f with the [tooltip](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abentool_tip_glosry.htm "Glossary Entry") g. The content of g appears as an explanatory text for f whenever the mouse pointer is positioned over f.

Continue
[Introducing ABAP Objects in ABAP Release 4.5](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abennews-40-objects.htm)
[Runtime Analysis in ABAP Release 4.5](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abennews-45-se30.htm)
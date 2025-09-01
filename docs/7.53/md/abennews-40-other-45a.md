  

* * *

AS ABAP Release 753, ©Copyright 2019 SAP AG. All rights reserved.

[ABAP Keyword Documentation](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenabap.htm) →  [ABAP - Release-Specific Changes](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abennews.htm) →  [Changes in Releases 4.xx](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abennews-4.htm) → 

Changes in Release 4.5

[1\. New addition STABLE for the statement SORT](#!ABAP_MODIFICATION_1@1@)

[2\. New ERROR classes for catchable runtime errors](#!ABAP_MODIFICATION_2@2@)

[3\. New statement SET RUN TIME CLOCK RESOLUTION *\[*HIGH*|*LOW*\]*.](#!ABAP_MODIFICATION_3@3@)

[4\. New addition for EXPORT ... TO   DATABASE/SHARED BUFFER ...](#!ABAP_MODIFICATION_4@4@)

[5\. New addition for IMPORT ... FROM DATABASE/SHARED BUFFER ...](#!ABAP_MODIFICATION_5@5@)

[6\. New addition Quickinfo g for the statement WRITE f](#!ABAP_MODIFICATION_6@6@)

7\. [Introduction of ABAP Objects](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abennews-40-objects.htm)

8\. [Runtime analysis](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abennews-45-se30.htm)

Modification 1

New Addition STABLE for the Statement [SORT](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abapsort_itab.htm)
This addition makes stable sorts of internal tables and [extract datasets](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenextract_dataset_glosry.htm "Glossary Entry") possible.

Modification 2

[New ERROR Classes](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abensystem-exceptions.htm) for [Catchable Runtime Errors](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abencatchable_runtime_error_glosry.htm "Glossary Entry")
The following new [ERROR classes](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abensysexc-errkl.htm) are supported:
FILE\_ACCESS\_ERRORS
IMPORT\_MISMATCH\_ERRORS
LOCALIZATION\_ERRORS

Modification 3

New Statement [SET RUN TIME CLOCK RESOLUTION *\[*HIGH*|*LOW*\]*](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abapset_run_time_clock_resolution.htm)
This statement can be used to set the clock used to measure runtime in the statement [GET RUN TIME](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abapget_run_time.htm).

Modification 4

New Addition for [EXPORT obj1...objn TO DATABASE/SHARED BUFFER dbtab(ar) ID key](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abapexport_data_cluster.htm):
The addition FROM wa uses the specified work area wa
instead of the table work area.

Modification 5

New Addition for [IMPORT obj1...objn FROM DATABASE/SHARED BUFFER dbtab(ar) ID key](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abapimport_data_cluster.htm):
The addition TO wa uses the specified work area wa instead
of the table work area.

Modification 6

New Addition Quickinfo g WRITE f
This addition is used to display the field f with the [tooltip](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenquick_info_glosry.htm "Glossary Entry") g. The contents of g appear as an explanatory text for f whenever the mouse pointer is positioned over f.

Continue
[Introducing ABAP Objects in Release 4.5](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abennews-40-objects.htm)
[Runtime Analysis in Release 4.5](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abennews-45-se30.htm)
  

* * *

AS ABAP Release 756, ©Copyright 2021 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP - Release News](javascript:call_link\('abennews.htm'\)) →  [News for Release 4.xx](javascript:call_link\('abennews-4.htm'\)) → 

News for Release 4.5

[1\. New Addition STABLE for the Statement SORT](#!ABAP_MODIFICATION_1@1@)
[2\. New Error Classes for Catchable Runtime Errors](#!ABAP_MODIFICATION_2@2@)
[3\. New Statement SET RUN TIME CLOCK RESOLUTION *\[*HIGH*|*LOW*\]*](#!ABAP_MODIFICATION_3@3@)
[4\. New Addition for EXPORT](#!ABAP_MODIFICATION_4@4@)
[5\. New Addition for IMPORT](#!ABAP_MODIFICATION_5@5@)
[6\. New Addition QUICKINFO for WRITE](#!ABAP_MODIFICATION_6@6@)

-   [Introducing ABAP Objects in Release 4.5](javascript:call_link\('abennews-40-objects.htm'\))
-   [Runtime Analysis in Release 4.5](javascript:call_link\('abennews-45-se30.htm'\))

Modification 1   

New Addition STABLE for the Statement SORT
This addition makes stable sorts of internal tables and [extract datasets](javascript:call_link\('abenextract_dataset_glosry.htm'\) "Glossary Entry") possible.

Modification 2   

New Error Classes for Catchable Runtime Errors
The following new [ERROR classes](javascript:call_link\('abensysexc-errkl.htm'\)) are supported:
FILE\_ACCESS\_ERRORS
IMPORT\_MISMATCH\_ERRORS
LOCALIZATION\_ERRORS

Modification 3   

New Statement SET RUN TIME CLOCK RESOLUTION *\[*HIGH*|*LOW*\]*
This statement can be used to set the clock used to measure runtime in the statement [GET RUN TIME](javascript:call_link\('abapget_run_time.htm'\)).

Modification 4   

New Addition for EXPORT
In [EXPORT obj1...objn TO DATABASE/SHARED BUFFER dbtab(ar) ID key](javascript:call_link\('abapexport_data_cluster.htm'\)) the addition FROM wa uses the specified work area wa instead of the table work area.

Modification 5   

New Addition for IMPORT
In [IMPORT obj1...objn FROM DATABASE/SHARED BUFFER dbtab(ar) ID key](javascript:call_link\('abapimport_data_cluster.htm'\)) the addition TO wa uses the specified work area wa instead of the table work area.

Modification 6   

New Addition QUICKINFO for WRITE
This addition for WRITE f is used to display the field f with the [tooltip](javascript:call_link\('abentool_tip_glosry.htm'\) "Glossary Entry") g. The content of g appears as an explanatory text for f whenever the mouse pointer is positioned over f.

Continue
[Introducing ABAP Objects in Release 4.5](javascript:call_link\('abennews-40-objects.htm'\))
[Runtime Analysis in Release 4.5](javascript:call_link\('abennews-45-se30.htm'\))
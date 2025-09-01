  

* * *

SAP NetWeaver AS ABAP Release 752, ©Copyright 2017 SAP AG. All rights reserved.

[ABAP - Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP - Release-Specific Changes](javascript:call_link\('abennews.htm'\)) →  [Changes in Releases 4.xx](javascript:call_link\('abennews-4.htm'\)) →  [Changes in Releases 4.0 and 4.5](javascript:call_link\('abennews-40.htm'\)) → 

Further Changes in Release 4.5

[1\. New addition STABLE for the statement SORT](#!ABAP_MODIFICATION_1@1@)

[2\. New ERROR classes for catchable runtime errors](#!ABAP_MODIFICATION_2@2@)

[3\. Neue Anweisung SET RUN TIME CLOCK RESOLUTION *\[*HIGH*|*LOW*\]*.](#!ABAP_MODIFICATION_3@3@)

[4\. New addition for EXPORT ... TO   DATABASE/SHARED BUFFER ...](#!ABAP_MODIFICATION_4@4@)

[5\. New addition for IMPORT ... FROM DATABASE/SHARED BUFFER ...](#!ABAP_MODIFICATION_5@5@)

[6\. New addition Quickinfo g for the statement WRITE f](#!ABAP_MODIFICATION_6@6@)

7\. [Introducing ABAP objects](javascript:call_link\('abennews-40-objects.htm'\))

8\. [Runtime analysis](javascript:call_link\('abennews-45-se30.htm'\))

Modification 1

New Addition STABLE for the Statement [SORT](javascript:call_link\('abapsort_itab.htm'\))
This addition makes stable sorts of internal tables and [extract datasets](javascript:call_link\('abenextract_dataset_glosry.htm'\) "Glossary Entry") possible.

Modification 2

[New ERROR Classes](javascript:call_link\('abensystem-exceptions.htm'\)) for [Catchable Runtime Errors](javascript:call_link\('abencatchable_runtime_error_glosry.htm'\) "Glossary Entry")
The following new [ERROR classes](javascript:call_link\('abensysexc-errkl.htm'\)) are supported:
FILE\_ACCESS\_ERRORS
IMPORT\_MISMATCH\_ERRORS
LOCALIZATION\_ERRORS

Modification 3

New Statement [SET RUN TIME CLOCK RESOLUTION *\[*HIGH*|*LOW*\]*](javascript:call_link\('abapset_run_time_clock_resolution.htm'\))
This statement can be used to set the clock used to measure runtime in the statement [GET RUN TIME](javascript:call_link\('abapget_run_time.htm'\)).

Modification 4

New Addition for [EXPORT obj1...objn TO DATABASE/SHARED BUFFER dbtab(ar) ID key](javascript:call_link\('abapexport_data_cluster.htm'\)):
The addition FROM wa uses the specified work area wa
instead of the table work area.

Modification 5

New Addition for [IMPORT obj1...objn FROM DATABASE/SHARED BUFFER dbtab(ar) ID key](javascript:call_link\('abapimport_data_cluster.htm'\)):
The addition TO wa uses the specified work area wa instead
of the table work area.

Modification 6

New Addition Quickinfo g WRITE f
This addition is used to display the field f with the [tooltip](javascript:call_link\('abenquick_info_glosry.htm'\) "Glossary Entry") g. The contents of g appear as an explanatory text for f whenever the mouse pointer is positioned over f.

Continue
[Introducing ABAP Objects for Release 4.5](javascript:call_link\('abennews-40-objects.htm'\))
[Runtime Analysis in Release 4.5](javascript:call_link\('abennews-45-se30.htm'\))
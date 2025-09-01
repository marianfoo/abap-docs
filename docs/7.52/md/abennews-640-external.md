  

* * *

SAP NetWeaver AS ABAP Release 752, ©Copyright 2017 SAP AG. All rights reserved.

[ABAP - Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP - Release-Specific Changes](javascript:call_link\('abennews.htm'\)) →  [Changes in Releases 6.xx](javascript:call_link\('abennews-6.htm'\)) →  [Changes in Release 6.40](javascript:call_link\('abennews-640.htm'\)) → 

External Interfaces in Release 6.40

[1\. New callback routine for asynchronous RFC](#!ABAP_MODIFICATION_1@1@)
[
2\. Call for Simple transformations](#!ABAP_MODIFICATION_2@2@)
[
3\. Control options for transformations](#!ABAP_MODIFICATION_3@3@)

Modification 1

\- New callback routine for asynchronous RFC

For the [asynchronous RFC](javascript:call_link\('abapcall_function_starting.htm'\)), the CALLING addition was introduced in order to also specify methods as callback routine.

Note

This change was also retransported after Release 6.20.

Modification 2

\- Call for Simple Transformations

With [CALL TRANSFORMATION](javascript:call_link\('abapcall_transformation.htm'\)), as well as [XSLT](javascript:call_link\('abenxslt_glosry.htm'\) "Glossary Entry") programs, you can now also call [Simple Transformations](javascript:call_link\('abensimple_transformation_glosry.htm'\) "Glossary Entry").

Modification 3

\- Control options for transformations

In [CALL TRANSFORMATION](javascript:call_link\('abapcall_transformation.htm'\)) with the OPTIONS addition, you can call control options for the called transformations.
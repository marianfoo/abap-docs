  

* * *

SAP NetWeaver AS ABAP Release 752, ©Copyright 2017 SAP AG. All rights reserved.

[ABAP - Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP - Reference](javascript:call_link\('abenabap_reference.htm'\)) →  [Processing External Data](javascript:call_link\('abenabap_language_external_data.htm'\)) →  [ABAP File Interface](javascript:call_link\('abenabap_language_files.htm'\)) → 

Locking Files

The file interface does not contain an integrated locking mechanism that ensures that only one ABAP program at a time can access a file. If multiple programs are writing to a file at the same time, the results are unpredictable.

To avoid this situation, use [SAP locks](javascript:call_link\('abensap_lock_glosry.htm'\) "Glossary Entry") or an unambiguous file name, such as [UUID](javascript:call_link\('abenuuid_glosry.htm'\) "Glossary Entry")s.

Note

When multiple application servers from the application layer try to access a file at the same time, conflicts can still occur despite SAP locks. This is the case, for example, when the operating system buffers data before writing it to a file.
  

* * *

AS ABAP Release 756, ©Copyright 2021 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP - Programming Language](javascript:call_link\('abenabap_reference.htm'\)) →  [Processing External Data](javascript:call_link\('abenabap_language_external_data.htm'\)) →  [ABAP File Interface](javascript:call_link\('abenabap_language_files.htm'\)) → 

Locking Files

The file interface does not contain an integrated locking mechanism that ensures that only one ABAP program at a time can access a file. If multiple programs are writing to a file at the same time, the results are unpredictable.

To avoid this situation, [SAP locks](javascript:call_link\('abensap_lock_glosry.htm'\) "Glossary Entry") or an unambiguous file name, such as [UUIDs](javascript:call_link\('abenuuid_glosry.htm'\) "Glossary Entry") should be used.

Hint

When multiple AS instances in [AS ABAP](javascript:call_link\('abenas_abap_glosry.htm'\) "Glossary Entry") try to access a file at the same time, conflicts can still occur despite SAP locks. This is the case, for example, when the operating system buffers data before writing it to a file.
  

* * *

AS ABAP Release 753, ©Copyright 2019 SAP AG. All rights reserved.

[ABAP Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP - Release-Specific Changes](javascript:call_link\('abennews.htm'\)) →  [Changes in Releases 6.xx](javascript:call_link\('abennews-6.htm'\)) →  [Changes in Release 6.10](javascript:call_link\('abennews-610.htm'\)) → 

Exception Handling in Release 6.10

Since Release 6.10 it has been possible to catch class-based exceptions in [TRY](javascript:call_link\('abaptry.htm'\))...[CATCH](javascript:call_link\('abapcatch_try.htm'\))... [ENDTRY](javascript:call_link\('abapendtry.htm'\)) blocks. This replaces exception handling using either [catchable runtime errors](javascript:call_link\('abencatchable_runtime_error_glosry.htm'\) "Glossary Entry") or the EXCEPTIONS parameters of function modules and methods.

The new keyword [CLEANUP](javascript:call_link\('abaptry.htm'\)) has been introduced for a program area that helps to create a consistent state after an exception or runtime error occurs within the protected area. Across the call hierarchy, runtime errors are caught at a higher level, so that if a method terminates, for instance, a consistent object state remains and global resources are released in accordance with regulations.

For a detailed description of this topic, see [Exception Handling](javascript:call_link\('abenabap_exceptions.htm'\)).
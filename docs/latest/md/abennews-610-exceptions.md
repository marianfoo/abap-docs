  

* * *

AS ABAP Release 758, ©Copyright 2024 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP - ABAP Release News](javascript:call_link\('abennews.htm'\)) →  [News for ABAP Release 6.xx](javascript:call_link\('abennews-6.htm'\)) →  [News for ABAP Release 6.10](javascript:call_link\('abennews-610.htm'\)) → 

 [![](Mail.gif?object=Mail.gif "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback%20on%20ABAP%20Documentation&body=Document:%20Exception%20Handling%20in%20ABAP%20Release%206.10%2C%20ABENNEWS-610-EXCEPTIONS%2C%20758%0D%0A%0D%0AError:%0D%0A%0D%0A%0D%0A%0D%0ASuggestion%20for%20improveme
nt:)

Exception Handling in ABAP Release 6.10

Since ABAP release 6.10 it has been possible to catch class-based exceptions in [TRY](javascript:call_link\('abaptry.htm'\))...[CATCH](javascript:call_link\('abapcatch_try.htm'\))... [ENDTRY](javascript:call_link\('abapendtry.htm'\)) blocks. This replaces exception handling using either [catchable runtime errors](javascript:call_link\('abencatchable_runtime_error_glosry.htm'\) "Glossary Entry") or the EXCEPTIONS parameters of function modules and methods.

The new keyword [CLEANUP](javascript:call_link\('abaptry.htm'\)) has been introduced for a program area that helps to create a consistent state after an exception or runtime error occurs within the protected area. Across the call hierarchy, runtime errors are caught at a higher level, so that if a method terminates, for instance, a consistent object state remains and global resources are released in accordance with regulations.

For a detailed description of this topic, see [Exception Handling](javascript:call_link\('abenabap_exceptions.htm'\)).
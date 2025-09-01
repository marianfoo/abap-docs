  

* * *

AS ABAP Release 757, ©Copyright 2023 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP - Programming Language](javascript:call_link\('abenabap_reference.htm'\)) →  [Obsolete Language Elements](javascript:call_link\('abenabap_obsolete.htm'\)) →  [Obsolete Program Flow](javascript:call_link\('abenobsolete_program_flow.htm'\)) → 

 [![](Mail.gif?object=Mail.gif&sap-language=EN "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback on ABAP Documentation&body=Document: Obsolete Catchable Runtime Errors, ABENSYSTEM-EXCEPTIONS, 757%0D%0A%0D%0AError:%0D%0A
%0D%0A%0D%0A%0D%0ASuggestion for improvement:)

Obsolete Catchable Runtime Errors

Before class-based exceptions were introduced, exceptions for exception situations of the runtime framework that could be successfully handled in the program were defined exclusively as catchable runtime errors and could be handled using the statement CATCH SYSTEM-EXCEPTIONS.

All catchable runtime errors were predefined in the system and assigned to the ABAP statements where they could occur. It was possible to group multiple catchable runtime errors together in an exception group and under whose name they could be handled together.

With the introduction of class-based exceptions, an exception class is assigned to each catchable runtime error. The error can still be handled as a catchable runtime error, but should be handled as a class-based exception.

Catchable runtime errors cannot be raised explicitly; they are only raised implicitly by the runtime framework.

-   [Alphabetical Overview of Catchable Runtime Errors](javascript:call_link\('abenueb-abfb-sysexc.htm'\))
-   [Assignment of Catchable Runtime Errors to Exception Groups](javascript:call_link\('abensysexc-errkl.htm'\))
-   [Handling Catchable Runtime Errors](javascript:call_link\('abapcatch_sys.htm'\))

Continue
[Alphabetical Overview of Catchable Runtime Errors](javascript:call_link\('abenueb-abfb-sysexc.htm'\))
[Assignment of Catchable Runtime Errors to Exception Groups](javascript:call_link\('abensysexc-errkl.htm'\))
[CATCH SYSTEM-EXCEPTIONS](javascript:call_link\('abapcatch_sys.htm'\))
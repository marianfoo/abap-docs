  

* * *

SAP NetWeaver AS ABAP Release 752, ©Copyright 2017 SAP AG. All rights reserved.

[ABAP - Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP - Reference](javascript:call_link\('abenabap_reference.htm'\)) →  [Obsolete Language Elements](javascript:call_link\('abenabap_obsolete.htm'\)) →  [Obsolete Program Flow](javascript:call_link\('abenobsolete_program_flow.htm'\)) → 

Obsolete Catchable Runtime Errors

Before class-based exceptions were introduced, exceptions for exception situations of the runtime environment that could be successfully handled in the program were defined exclusively as catchable runtime errors and could be handled using the statement CATCH SYSTEM-EXCEPTIONS.

All catchable runtime errors were predefined in the system and assigned to the ABAP statements where they could occur. Several runtime errors could be grouped together in an exception group and handled together under the name of the group.

With the introduction of class-based exceptions, an exception class is assigned to each catchable runtime error. The error can still be handled as a catchable runtime error, but should be handled as a class-based exception instead.

Catchable runtime errors cannot be triggered explicitly; they are only triggered implicitly by the runtime environment.

-   [Alphabetical Overview of Catchable Runtime Errors](javascript:call_link\('abenueb-abfb-sysexc.htm'\))

-   [Assignment of Catchable Runtime Errors to Exception Groups](javascript:call_link\('abensysexc-errkl.htm'\))

-   [Handling Catchable Runtime Errors](javascript:call_link\('abapcatch_sys.htm'\))

Continue
[Alphabetical Overview of Catchable Runtime Errors](javascript:call_link\('abenueb-abfb-sysexc.htm'\))
[Assignment of Catchable Runtime Errors to Exception Groups](javascript:call_link\('abensysexc-errkl.htm'\))
[CATCH SYSTEM-EXCEPTIONS](javascript:call_link\('abapcatch_sys.htm'\))
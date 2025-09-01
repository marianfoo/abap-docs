  

* * *

AS ABAP Release 756, ©Copyright 2021 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenabap.htm) →  [ABAP - Programming Language](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenabap_reference.htm) →  [Obsolete Language Elements](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenabap_obsolete.htm) →  [Obsolete Program Flow](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenobsolete_program_flow.htm) → 

Obsolete Catchable Runtime Errors

Before class-based exceptions were introduced, exceptions for exception situations of the runtime framework that could be successfully handled in the program were defined exclusively as catchable runtime errors and could be handled using the statement CATCH SYSTEM-EXCEPTIONS.

All catchable runtime errors were predefined in the system and assigned to the ABAP statements where they could occur. It was possible to group multiple catchable runtime errors together in an exception group and under whose name they could be handled together.

With the introduction of class-based exceptions, an exception class is assigned to each catchable runtime error. The error can still be handled as a catchable runtime error, but should be handled as a class-based exception.

Catchable runtime errors cannot be raised explicitly; they are only raised implicitly by the runtime framework.

-   [Alphabetical Overview of Catchable Runtime Errors](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenueb-abfb-sysexc.htm)
-   [Assignment of Catchable Runtime Errors to Exception Groups](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abensysexc-errkl.htm)
-   [Handling Catchable Runtime Errors](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abapcatch_sys.htm)

Continue
[Alphabetical Overview of Catchable Runtime Errors](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenueb-abfb-sysexc.htm)
[Assignment of Catchable Runtime Errors to Exception Groups](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abensysexc-errkl.htm)
[CATCH SYSTEM-EXCEPTIONS](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abapcatch_sys.htm)
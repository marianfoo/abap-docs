---
title: "Obsolete Catchable Runtime Errors"
description: |
  Before class-based exceptions were introduced, exceptions for exception situations of the runtime environment that could be successfully handled in the program were defined exclusively as catchable runtime errors and could be handled using the statement CATCH SYSTEM-EXCEPTIONS. All catchable runtime
version: "7.54"
category: "error-handling"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abensystem-exceptions.htm"
abapFile: "abensystem-exceptions.htm"
keywords: ["do", "catch", "class", "abensystem", "exceptions"]
---

* * *

AS ABAP Release 754, ©Copyright 2019 SAP SE. All rights reserved.

[ABAP Keyword Documentation](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenabap.htm) →  [ABAP − Reference](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenabap_reference.htm) →  [Obsolete Language Elements](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenabap_obsolete.htm) →  [Obsolete Program Flow](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenobsolete_program_flow.htm) → 

Obsolete Catchable Runtime Errors

Before class-based exceptions were introduced, exceptions for exception situations of the runtime environment that could be successfully handled in the program were defined exclusively as catchable runtime errors and could be handled using the statement CATCH SYSTEM-EXCEPTIONS.

All catchable runtime errors were predefined in the system and assigned to the ABAP statements where they could occur. It was possible to group multiple runtime errors together in an exception group and handle them together under the name of the group.

With the introduction of class-based exceptions, an exception class is assigned to each catchable runtime error. The error can still be handled as a catchable runtime error, but should be handled as a class-based exception instead.

Catchable runtime errors cannot be triggered explicitly; they are only triggered implicitly by the runtime environment.

-   [Alphabetical Overview of Catchable Runtime Errors](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenueb-abfb-sysexc.htm)

-   [Assignment of Catchable Runtime Errors to Exception Groups](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abensysexc-errkl.htm)

-   [Handling Catchable Runtime Errors](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abapcatch_sys.htm)

Continue
[Alphabetical Overview of Catchable Runtime Errors](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenueb-abfb-sysexc.htm)
[Assignment of Catchable Runtime Errors to Exception Groups](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abensysexc-errkl.htm)
[CATCH SYSTEM-EXCEPTIONS](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abapcatch_sys.htm)
  

* * *

AS ABAP Release 755, ©Copyright 2020 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenabap.htm) →  [ABAP - Security Notes](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenabap_security.htm) →  [Further Security Risks](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenother_programming_scrty.htm) → 

System-Dependent Program Flow

The use of the following [system fields](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abensystem_field_glosry.htm "Glossary Entry") in ABAP programs to control program behavior can be a security risk:

-   sy-host

-   sy-sysid

-   sy-mandt

As a [user-specific program flow](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenuser_dependent_scrty.htm), it may in the worst case constitute a real back door that can be used by developers to access unauthorized data or functions in systems where they do not have authorization. On the other hand, these can also be code sections used for test purposes during development and then forgotten. Generally speaking, source code that depends on the above system fields should always be avoided and removed. Instead, suitable APIs or fully separate implementations should be used. In cases where the use of the above system fields in logical expressions is absolutely necessary, a special exemption must be granted for the program, so that it can pass the appropriate security tests.

It is possible to define additional system fields, for which this check is performed, by implementing [BAdI](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenbadi_glosry.htm "Glossary Entry") SLIN\_BADI\_SEC\_BACKDOOR.
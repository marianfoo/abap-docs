---
title: "TYPE-POOLS"
description: |
  Short Reference(https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abaptype-pools_shortref.htm) Obsolete Syntax TYPE-POOLS tpool. Effect This statement is obsolete. It is checked for accurate syntax but otherwise ignored by ABAP Compiler. The statement TYPE-POOLS was required in the past t
version: "7.55"
category: "types"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abaptype-pools.htm"
abapFile: "abaptype-pools.htm"
keywords: ["delete", "do", "if", "try", "class", "data", "types", "abaptype", "pools"]
---

* * *

AS ABAP Release 755, ©Copyright 2020 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenabap.htm) →  [ABAP - Programming Language](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenabap_reference.htm) →  [Obsolete Language Elements](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenabap_obsolete.htm) →  [Obsolete Declarations](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenobsolete_declarations.htm) →  [Declaration and Loading](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenaddress_obsolet.htm) → 

TYPE-POOLS

[Short Reference](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abaptype-pools_shortref.htm)

Obsolete Syntax

TYPE-POOLS tpool.

Effect

This statement is obsolete. It is checked for accurate syntax but otherwise ignored by ABAP Compiler.

The statement TYPE-POOLS was required in the past to load the elements of a [type pool](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abentype_pool_glosry.htm "Glossary Entry") tpool explicitly in the current context. It can be specified for the global data declaration of an ABAP program or in the declaration part of a class or an interface.

Now a type pool is loaded automatically when one of its elements is first accessed in a program.

Hints

-   After a type pool is loaded, the data types declared there hide data types of the same name in the ABAP Dictionary which are not declared in the type pool. Previously the pool was loaded explicitly using TYPE-POOLS. Since the statement TYPE-POOLS is now ignored, regular data types from ABAP Dictionary now hide data types of the same name in a type pool until the type pool is loaded when accessing a non-hidden element. Creating types with the same name in the ABAP Dictionary and in type pools has not been allowed for a long time however. This situation should therefore no longer arise.

-   Previously, [macros](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenmacro_glosry.htm "Glossary Entry") defined in type pools only hidden macros with the same names from the database table TRMAC once the type pool had been loaded explicitly using the statement TYPE-POOLS. Now macros defined in type pools always hide macros with the same name from the database table TRMAC. Due to various name conventions however, this situation should not arise.

-   The syntax check no longer checks whether the specified type pool tpool actually exists.

-   The statement TYPE-POOLS can still be used to migrate current programs to lower releases. Otherwise it can be deleted.
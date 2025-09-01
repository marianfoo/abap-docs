---
title: "TYPE-POOLS"
description: |
  Quick Reference(https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abaptype-pools_shortref.htm) Obsolete Syntax TYPE-POOLS tpool. Effect This statement is obsolete. It is checked for accurate syntax but otherwise ignored by ABAP Compiler. The statement TYPE-POOLS was required in the past t
version: "7.54"
category: "types"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abaptype-pools.htm"
abapFile: "abaptype-pools.htm"
keywords: ["delete", "do", "if", "try", "class", "data", "types", "abaptype", "pools"]
---

* * *

AS ABAP Release 754, ©Copyright 2019 SAP SE. All rights reserved.

[ABAP Keyword Documentation](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenabap.htm) →  [ABAP − Reference](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenabap_reference.htm) →  [Obsolete Language Elements](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenabap_obsolete.htm) →  [Obsolete Declarations](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenobsolete_declarations.htm) →  [Declaration and Loading](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenaddress_obsolet.htm) → 

TYPE-POOLS

[Quick Reference](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abaptype-pools_shortref.htm)

Obsolete Syntax

TYPE-POOLS tpool.

Effect

This statement is obsolete. It is checked for accurate syntax but otherwise ignored by ABAP Compiler.

The statement TYPE-POOLS was required in the past to load the elements of a [type group](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abentype_group_1_glosry.htm "Glossary Entry") tpool explicitly in the current context. It can be specified for the global data declaration of an ABAP program or in the declaration part of a class or an interface.

Now a type group is loaded automatically when one of its elements is first accessed in a program.

Notes

-   After loading a type group, the data types declared there obscure data types of the same name in the ABAP Dictionary which are not declared in the type group. Previously the group was loaded explicitly using TYPE-POOLS. Since the statement TYPE-POOLS is now ignored, regular data types from ABAP Dictionary now obscure data types of the same name in a type group until the type group is loaded when accessing a non-obscured element. Creating types with the same name in the ABAP Dictionary and in type groups has not been allowed for a long time however. This situation should therefore no longer arise.
    
-   Previously, [macros](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenmacro_glosry.htm "Glossary Entry") defined in type groups only obscured macros with the same names from the database table TRMAC once the type group had been loaded explicitly using the statement TYPE-POOLS. Now macros defined in type groups always obscure macros with the same name from the database table TRMAC. Due to various name conventions however, this situation should not arise.
    
-   The syntax check no longer checks whether the specified type group tpool actually exists.
    
-   The statement TYPE-POOLS can still be used to migrate current programs to lower releases. Otherwise it can be deleted.
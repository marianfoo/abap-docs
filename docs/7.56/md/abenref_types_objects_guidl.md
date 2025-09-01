---
title: "Reference to Data Types or Data Objects"
description: |
  Background As well as using data types(https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenusing_types_guidl.htm 'Guideline') for declarations and typings with the addition TYPE, the alternative addition LIKE of the corresponding statements can be used to reference the data type of one
version: "7.56"
category: "oop"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenref_types_objects_guidl.htm"
abapFile: "abenref_types_objects_guidl.htm"
keywords: ["do", "if", "case", "method", "class", "data", "types", "internal-table", "abenref", "objects", "guidl"]
---

* * *

AS ABAP Release 756, ©Copyright 2021 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenabap.htm) →  [ABAP - Programming Guidelines](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenabap_pgl.htm) →  [Robust ABAP](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenrobust_abap_gdl.htm) →  [Data Types and Data Objects](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abendata_type_obj_gdl.htm) → 

Reference to Data Types or Data Objects

Background

As well as [using data types](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenusing_types_guidl.htm "Guideline") for declarations and typings with the addition TYPE, the alternative addition LIKE of the corresponding statements can be used to reference the data type of one of the data objects visible at this position directly. This includes references to data objects of the same program, interface parameters of the current procedure, attributes of global classes and interfaces, and constants in type pools.

Rule

Declare dependent data objects with reference to other data objects

If a data object directly depends on another data object, refer to it directly using LIKE for the declaration. In all other cases, use TYPE to refer to a standalone data type.

Details

For example, if a helper variable of the type of an input parameter is required within a procedure ([method](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenfunct_module_subroutine_guidl.htm "Guideline")), it should not be declared with reference to the type of the parameter using TYPE but with reference to the parameter itself using LIKE. It is also possible to declare work areas using LIKE LINE OF if the parameter is an internal table. In the case of typing with LIKE, the type of the parameter can be changed retroactively without always having to adapt the procedure implementation.

However, if no close reference to another data object exists, it is usually more useful to declare data objects with reference to a [standalone data type](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenbound_independent_dtype_guidl.htm "Guideline") by using TYPE.

Hint

Obsolete references to flat structures or database tables or views of the ABAP Dictionary using LIKE should never be implemented.

Bad Example

The following source code shows the declaration of a helper variable in a method that is supposed to be of the same data type as an interface parameter. The TYPE reference to the data type requires a manual implementation of any type changes.

CLASS some\_class DEFINITION ...
   PUBLIC SECTION.
     METHODS some\_method
       CHANGING some\_parameter TYPE some\_type.
     ...
ENDCLASS.
CLASS some\_class IMPLEMENTATION.
   METHOD some\_method.
     DATA save\_parameter TYPE some\_type.
     save\_parameter = some\_parameter.
     ...
   ENDMETHOD.
   ...
ENDCLASS.

Good Example

The following source code shows the improved declaration of the helper variable that now directly refers to the interface parameter with LIKE, so that possible type changes are automatically accepted.

   ...
    METHOD some\_method.
      DATA save\_parameter LIKE some\_parameter.
      save\_parameter = some\_parameter.
      ...
    ENDMETHOD.
...
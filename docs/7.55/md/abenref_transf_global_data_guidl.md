---
title: "Pass by Reference of Global Data"
description: |
  Background In a local context you can normally directly access the data objects(https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abendata_type_obj_guidl.htm 'Guideline') of superordinate more global contexts. For example, it is possible in a method to perform writes on the attributes of
version: "7.55"
category: "general"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenref_transf_global_data_guidl.htm"
abapFile: "abenref_transf_global_data_guidl.htm"
keywords: ["do", "if", "method", "class", "data", "types", "abenref", "transf", "global", "guidl"]
---

* * *

AS ABAP Release 755, ©Copyright 2020 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenabap.htm) →  [ABAP - Programming Guidelines](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenabap_pgl.htm) →  [Robust ABAP](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenrobust_abap_guidl.htm) →  [Assignments, Calculations, and Other Types of Data Access](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenassignment_access_guidl.htm) → 

Pass by Reference of Global Data

Background

In a local context you can normally directly access the [data objects](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abendata_type_obj_guidl.htm "Guideline") of superordinate more global contexts. For example, it is possible in a method to perform writes on the attributes of its class and on any global data of the current program.

Therefore, if a more global data object is passed to a procedure by reference, access is granted there both through its name and the formal parameter.

Rule

Do not pass global data to local contexts using pass by reference

Do not use global data as actual parameters for formal parameters of procedures if you can change them in the procedure in another way, and the parameter is passed by reference.

Details

If a global data object that has also been passed by reference is changed in a procedure ([method](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenfunct_module_subroutine_guidl.htm "Guideline")), this also changes the formal parameter and vice versa. This behavior is not usually anticipated when writing the procedure.

Global data is only supposed to be passed to formal parameters for which [pass by value](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abentype_transf_formal_para_guidl.htm "Guideline") is declared, or to procedures that are guaranteed not to have any unwanted consequences for this data.

Bad Example

After the do\_something method has been called in the main method in the following source code, the attr attribute contains the unexpected value 2.0, because the first assignment to the c\_value changing parameter, which has been passed by reference, also changes attr.

CLASS class DEFINITION.
   PUBLIC SECTION.
     METHODS
       main.
   PRIVATE SECTION.
     DATA
       attr TYPE p DECIMALS 2.
     METHODS
       do\_something CHANGING c\_value TYPE numeric.
ENDCLASS.
CLASS class IMPLEMENTATION.
   METHOD main.
     attr = '1.23'.
     do\_something( CHANGING c\_value = attr ).
   ENDMETHOD.
   METHOD do\_something.
     ...
     c\_value = floor( attr ).
     ...
     c\_value = c\_value + attr.
     ...
   ENDMETHOD.
ENDCLASS.

Good Example

If the pass by reference method in the method declaration of do\_something in the above example is converted into a pass by value method, as shown in the following source code, the attr attribute contains the expected value 2.23 after the method has been called.

...
     METHODS
       do\_something CHANGING VALUE(c\_value) TYPE numeric.
...
---
title: "Pass By Reference for Output Parameters"
description: |
  Background When parameters are passed to a procedure by reference, this procedure directly uses the data object that has been passed as a parameter. Its value is consequently determined by the calling program of the procedure. Particular notice must be made of this behavior for EXPORTING parameters,
version: "7.54"
category: "general"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenref_transf_output_param_guidl.htm"
abapFile: "abenref_transf_output_param_guidl.htm"
keywords: ["insert", "delete", "do", "if", "method", "class", "data", "internal-table", "abenref", "transf", "output", "param", "guidl"]
---

* * *

AS ABAP Release 754, ©Copyright 2019 SAP SE. All rights reserved.

[ABAP Keyword Documentation](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenabap.htm) →  [ABAP Programming Guidelines](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenabap_pgl.htm) →  [Robust ABAP](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenrobust_abap_guidl.htm) →  [Modularization units](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenmodularization_unit_guidl.htm) → 

Pass By Reference for Output Parameters

Background

When parameters are passed to a procedure by reference, this procedure directly uses the data object that has been passed as a parameter. Its value is consequently determined by the calling program of the procedure. Particular notice must be made of this behavior for EXPORTING parameters, whose value is (unlike the pass by value method) not initialized when the procedure is called. After the procedure has started, an output parameter that was passed by reference has the value of the supplied actual parameter.

Rule

Use output parameters correctly with pass by reference

Do not evaluate EXPORTING parameters that are passed by reference in a procedure ([method](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenfunct_module_subroutine_guidl.htm "Guideline")) until a value has been explicitly assigned.

Details

The value of an output parameter that has been passed by reference is undefined from the perspective of the procedure, since cannot be evaluated within the procedure in a useful manner. Therefore, no assumptions can be made regarding the content of the parameter until the first value has been assigned to it.

If a parameter like this is an internal table or a string, a simple write is not sufficient. First, an initialization must be implemented. For example, if new rows are to be inserted in an internal table that is supposed to be produced by reference, its current content needs to be deleted first. Pass by reference means that it cannot be guaranteed that the table is actually empty when the procedure is started. The same applies to strings that are filled using concatenation operations within the procedure.

Note

If the described properties are to be exploited for writable parameters that have been passed by reference in a procedure ([method](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenfunct_module_subroutine_guidl.htm "Guideline")), that is, a read is to be performed prior to the write or an existing dynamic data object is to be extended, the [appropriate formal parameter type](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abentype_formal_param_proc_guidl.htm "Guideline") must be specified, that is, input/output parameter (CHANGING parameter).

Exception

Strictly speaking, optional output parameters that have been passed by reference must be initialized only if the parameter is bound to an actual parameter when called. This can be determined using the IS SUPPLIED query. The obsolete query, IS REQUESTED, in contrast, should no longer be used.

Example

The following source code shows how an internal table that, for performance reasons, is implemented by reference is returned. For this reason, it cannot be declared as a RETURNING parameter. The tabular output parameter is explicitly initialized at the beginning of the method before new lines are inserted.

CLASS class DEFINITION.
  PUBLIC SECTION.
    CLASS-METHODS get\_some\_table
      EXPORTING e\_some\_table TYPE table\_type.
ENDCLASS.
CLASS class IMPLEMENTATION.
  METHOD get\_some\_table.
    DATA new\_line LIKE LINE OF e\_some\_table.
    CLEAR e\_some\_table.
    ...
    INSERT new\_line INTO TABLE e\_some\_table.
    ...
  ENDMETHOD.
ENDCLASS.
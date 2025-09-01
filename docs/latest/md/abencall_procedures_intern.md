---
title: "Internal Procedure Calls"
description: |
  All procedures which are defined in the same ABAP program and are visible from the calling position can be called internally. -   In each ABAP program, and within a class(https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenclass_glosry.htm 'Glossary Entry'), the visible methods(h
version: "latest"
category: "general"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abencall_procedures_intern.htm"
abapFile: "abencall_procedures_intern.htm"
keywords: ["select", "do", "if", "try", "method", "class", "abencall", "procedures", "intern"]
---

* * *

AS ABAP Release 758, ©Copyright 2024 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenabap.htm) →  [ABAP - Programming Language](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenabap_reference.htm) →  [Calling and Exiting Program Units](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenabap_execution.htm) →  [Calling Processing Blocks](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abencall_processing_blocks.htm) →  [Calling Procedures](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abencall_procedures.htm) → 

 [![](Mail.gif?object=Mail.gif "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback%20on%20ABAP%20Documentation&body=Document:%20Internal%20Procedure%20Calls%2C%20ABENCALL_PROCEDURES_INTERN%2C%20758%0D%0A%0D%0AError:%0D%0A%0D%0A%0D%0A%0D%0ASuggestion%20for%20improvement:)

Internal Procedure Calls

All procedures which are defined in the same ABAP program and are visible from the calling position can be called internally.

-   In each ABAP program, and within a [class](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenclass_glosry.htm "Glossary Entry"), the visible [methods](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenmethod_glosry.htm "Glossary Entry") of the class or visible methods of other local classes of the same program can be called. The calling of methods is the only procedure call which is recommended for the internal modularization.
-   In a [function pool](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenfunction_pool_glosry.htm "Glossary Entry"), a [function module](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenfunction_module_glosry.htm "Glossary Entry") provided for external users can also be called internally.
-   In every ABAP program that still contains [subroutines](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abensubroutine_glosry.htm "Glossary Entry"), these can also still be called internally. Subroutines are an obsolete form of internal modularization and should be replaced by methods if possible.

The required program is always already loaded for internal calls.

Example

Internal program call of method meth1 of a local class from the event block START-OF-SELECTION and the call of meth2 from meth1.

CLASS cls DEFINITION.
  PUBLIC SECTION.
    METHODS meth1.
  PRIVATE SECTION.
    METHODS meth2.
ENDCLASS.
CLASS cls IMPLEMENTATION.
  METHOD meth1.
    ...
    meth2( ).
    ...
  ENDMETHOD.
  METHOD meth2.
    ...
  ENDMETHOD.
ENDCLASS.
START-OF-SELECTION.
  NEW cls( )->meth1( ).
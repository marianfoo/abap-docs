  

* * *

AS ABAP Release 758, ©Copyright 2024 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenabap.htm) →  [ABAP - Programming Language](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenabap_reference.htm) →  [Calling and Exiting Program Units](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenabap_execution.htm) →  [Calling Processing Blocks](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abencall_processing_blocks.htm) →  [Calling Procedures](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abencall_procedures.htm) →  [Method Calls](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenmethod_calls.htm) →  [Static Method Calls](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenmethod_calls_static.htm) →  [... meth1( ... )->meth2( ... )->..., Method Chaining](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abapcall_method_static_chain.htm) → 

 [![](Mail.gif?object=Mail.gif "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback%20on%20ABAP%20Documentation&body=Document:%20Method%20Chaining%2C%20ABENMETHOD_CHAINING_ABEXA%2C%20758%0D%0A%0D%0AError:%0D%0A%0D%0A%0D%0A%0D%0ASuggestion%20for%20improvement:)

Method Chaining

This example demonstrates method chaining in an operand position.

Source Code   

\* Public class definition
CLASS cl\_demo\_method\_chaining DEFINITION
  INHERITING FROM cl\_demo\_classrun
  PUBLIC
  CREATE PUBLIC.
  PUBLIC SECTION.
    METHODS main REDEFINITION.
  PRIVATE SECTION.
    METHODS meth  IMPORTING str        TYPE string
                  RETURNING VALUE(ref)
                              TYPE REF TO cl\_demo\_method\_chaining.
    DATA text TYPE string.
ENDCLASS.
\* Public class implementation
CLASS cl\_demo\_method\_chaining IMPLEMENTATION.
  METHOD main.
    out->write(
      NEW cl\_demo\_method\_chaining( )->meth(
        \`Hello \` )->meth( \`world\` )->meth( \`!\` )->text ).
  ENDMETHOD.
  METHOD meth.
    text &&= str.
    ref = me.
  ENDMETHOD.
ENDCLASS.

Description   

In the argument of the method DISPLAY\_TEXT, [chained attribute access](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenchained_attribute_acc_glosry.htm "Glossary Entry") is applied to the attribute text of the class demo. The attribute is changed using three chained method calls.
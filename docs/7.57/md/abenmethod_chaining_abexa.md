---
title: "Method Chaining"
description: |
  This example demonstrates method chaining in an operand position. Source Code REPORT demo_method_chaining. CLASS demo DEFINITION. PUBLIC SECTION. CLASS-METHODS main. PRIVATE SECTION. METHODS meth  IMPORTING str        TYPE string RETURNING VALUE(ref) TYPE REF TO demo. DATA text TYPE string. ENDCLA
version: "7.57"
category: "general"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenmethod_chaining_abexa.htm"
abapFile: "abenmethod_chaining_abexa.htm"
keywords: ["select", "do", "if", "try", "method", "class", "data", "abenmethod", "chaining", "abexa"]
---

* * *

AS ABAP Release 757, ©Copyright 2023 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenabap.htm) →  [ABAP - Programming Language](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenabap_reference.htm) →  [Calling and Exiting Program Units](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenabap_execution.htm) →  [Calling Processing Blocks](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abencall_processing_blocks.htm) →  [Calling Procedures](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abencall_procedures.htm) →  [Method Calls](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenmethod_calls.htm) →  [Static Method Calls](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenmethod_calls_static.htm) →  [... meth1( ... )->meth2( ... )->..., Method Chaining](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abapcall_method_static_chain.htm) → 

 [![](Mail.gif?object=Mail.gif&sap-language=EN "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback on ABAP Documentation&body=Document: Method Chaining, ABENMETHOD_CHAINING_ABEXA, 757%0D%0A%0D%0AError:%0D%0A%0D%0A%0D%0A%0
D%0ASuggestion for improvement:)

Method Chaining

This example demonstrates method chaining in an operand position.

Source Code   

REPORT demo\_method\_chaining.
CLASS demo DEFINITION.
  PUBLIC SECTION.
    CLASS-METHODS main.
  PRIVATE SECTION.
    METHODS meth  IMPORTING str        TYPE string
                  RETURNING VALUE(ref) TYPE REF TO demo.
    DATA text TYPE string.
ENDCLASS.
CLASS demo IMPLEMENTATION.
  METHOD main.
    cl\_demo\_output=>display(
      NEW demo( )->meth(
        \`Hello \` )->meth( \`world\` )->meth( \`!\` )->text ).  ENDMETHOD.
  METHOD meth.
    text &&= str.
    ref = me.
  ENDMETHOD.
ENDCLASS.
START-OF-SELECTION.
  demo=>main( ).

Description   

In the argument of the method DISPLAY\_TEXT, [chained attribute access](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenchained_attribute_acc_glosry.htm "Glossary Entry") is applied to the attribute text of the class demo. The attribute is changed using three chained method calls.
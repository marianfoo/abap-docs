---
title: "Method Chaining"
description: |
  This example demonstrates method chaining in an operand position. Source Code REPORT demo_method_chaining. CLASS demo DEFINITION. PUBLIC SECTION. CLASS-METHODS main. PRIVATE SECTION. METHODS meth  IMPORTING str        TYPE string RETURNING value(ref) TYPE REF TO demo. DATA text TYPE string. ENDCLA
version: "7.53"
category: "general"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenmethod_chaining_abexa.htm"
abapFile: "abenmethod_chaining_abexa.htm"
keywords: ["select", "do", "try", "method", "class", "data", "abenmethod", "chaining", "abexa"]
---

* * *

AS ABAP Release 753, ©Copyright 2019 SAP AG. All rights reserved.

[ABAP Keyword Documentation](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenabap.htm) →  [ABAP − Reference](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenabap_reference.htm) →  [Calling and Exiting Program Units](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenabap_execution.htm) →  [Calling Processing Blocks](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abencall_processing_blocks.htm) →  [Calling Procedures](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abencall_procedures.htm) →  [Method Calls](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenmethod_calls.htm) →  [Static Method Calls](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenmethod_calls_static.htm) →  [... meth1( ... )->meth2( ... )->... - method chaining](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abapcall_method_static_chain.htm) → 

Method Chaining

This example demonstrates method chaining in an operand position.

Source Code

REPORT demo\_method\_chaining.
CLASS demo DEFINITION.
  PUBLIC SECTION.
    CLASS-METHODS main.
  PRIVATE SECTION.
    METHODS meth  IMPORTING str        TYPE string
                  RETURNING value(ref) TYPE REF TO demo.
    DATA text TYPE string.
ENDCLASS.
CLASS demo IMPLEMENTATION.
  METHOD main.
    DATA oref TYPE REF TO demo.
    CREATE OBJECT oref.
    cl\_demo\_output=>display(
      oref->meth( \`Hello \` )->meth( \`world\` )->meth( \`!\` )->text ).  ENDMETHOD.
  METHOD meth.
    text = text && str.
    ref = me.
  ENDMETHOD.
ENDCLASS.
START-OF-SELECTION.
  demo=>main( ).

Description

In the argument of the method DISPLAY\_TEXT, [chained attribute access](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenchained_attribute_acc_glosry.htm "Glossary Entry") is applied to the attribute text of the class demo. The attribute is changed using three chained method calls.
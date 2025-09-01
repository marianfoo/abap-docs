---
title: "Source Code"
description: |
  Public class definition CLASS cl_demo_enum_para_pass DEFINITION PUBLIC INHERITING FROM cl_demo_classrun CREATE PUBLIC . PUBLIC SECTION. METHODS main REDEFINITION . PRIVATE SECTION. METHODS meth IMPORTING VALUE(psimple) TYPE simple VALUE(penum)   TYPE demo_cds_enum_weekday . ENDCLASS.
version: "latest"
category: "general"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenenum_formal_para_abexa.htm"
abapFile: "abenenum_formal_para_abexa.htm"
keywords: ["do", "if", "try", "method", "class", "data", "types", "field-symbol", "abenenum", "formal", "para", "abexa"]
---

* * *

AS ABAP Release 758, ©Copyright 2024 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenabap.htm) →  [ABAP - Programming Language](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenabap_reference.htm) →  [Processing Internal Data](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenabap_data_working.htm) →  [Enumerated Objects (enum)](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenenumerated_types_usage.htm) → 

 [![](Mail.gif?object=Mail.gif "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback%20on%20ABAP%20Documentation&body=Document:%20enum%2C%20Parameter%20Passing%2C%20ABENENUM_FORMAL_PARA_ABEXA%2C%20758%0D%0A%0D%0AError:%0D%0A%0D%0A%0D%0A%0D%0ASuggestion%20for%20improvement:)

enum, Parameter Passing

This example demonstrates the passing [enumerated objects](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenenumerated_object_glosry.htm "Glossary Entry") to a method.

Source Code   

\* Public class definition
CLASS cl\_demo\_enum\_para\_pass DEFINITION
  PUBLIC
  INHERITING FROM cl\_demo\_classrun
  CREATE PUBLIC .
  PUBLIC SECTION.
    METHODS main
      REDEFINITION .
  PRIVATE SECTION.
    METHODS meth
      IMPORTING
        VALUE(psimple) TYPE simple
        VALUE(penum)   TYPE demo\_cds\_enum\_weekday .
ENDCLASS.
\* Public class implementation
CLASS cl\_demo\_enum\_para\_pass IMPLEMENTATION.
  METHOD main.
    meth( psimple = demo\_cds\_enum\_weekday-sat
          penum   = demo\_cds\_enum\_weekday-fri ).
  ENDMETHOD.
  METHOD meth.
\*    IF psimple = demo\_cds\_enum\_weekday-mon. "Syntax error
\*      out->write( \`Sunday Bloody Sunday\` ).
\*    ENDIF.
    psimple = demo\_cds\_enum\_weekday-mon.
    FIELD-SYMBOLS <enum> TYPE demo\_cds\_enum\_weekday.
    ASSIGN psimple TO <enum>.
    IF <enum> = demo\_cds\_enum\_weekday-mon.
      out->write( \`I Don't Like Mondays\` ).
    ENDIF.
    IF penum = demo\_cds\_enum\_weekday-fri.
      out->write( \`Thank God It's Friday\` ).
    ENDIF.
  ENDMETHOD.
ENDCLASS.

Description   

The method meth has a parameter psimple of generic type simple and a parameter penum of CDS enumerated type DEMO\_CDS\_ENUM\_WEEKDAY. To both, enumerated objects of that enumerated type can be passed. psimple cannot be used in a comparison, where the other operand is an enumerated object. But it is possible to use psimple at a write position and to assign it to a field symbol that is typed with the enumerated type and use that in the comparison. Note that the assignment to the field symbol works since the operand position after ASSIGN is not handled as a read position.
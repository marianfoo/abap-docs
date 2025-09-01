# ABAP Keyword Documentation / ABAP − Reference / Program Flow Logic

Included pages: 4


### abenstring_comparison_abexa.htm

---
title: "Comparing Text Strings of Different Length"
description: |
  This example demonstrates how text strings of different lengths are compared. Source Code REPORT demo_string_comparison. CLASS demo DEFINITION. PUBLIC SECTION. CLASS-METHODS main. ENDCLASS. CLASS demo IMPLEMENTATION. METHOD main. DATA length1 TYPE n LENGTH 1 VALUE '4'. cl_demo_input=>add_field(
version: "7.53"
category: "general"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenstring_comparison_abexa.htm"
abapFile: "abenstring_comparison_abexa.htm"
keywords: ["select", "do", "if", "try", "method", "class", "data", "types", "abenstring", "comparison", "abexa"]
---

* * *

AS ABAP Release 753, ©Copyright 2019 SAP AG. All rights reserved.

[ABAP Keyword Documentation](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenabap.htm) →  [ABAP − Reference](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenabap_reference.htm) →  [Program Flow Logic](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenabap_flow_logic.htm) →  [Expressions and Functions for Conditions](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenlogical_expr_func.htm) →  [log\_exp - Logical Expressions](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenlogexp.htm) →  [rel\_exp - Comparison Expressions](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenlogexp_comp.htm) →  [rel\_exp - Comparison Rules](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenlogexp_rules.htm) →  [rel\_exp - Comparing Elementary Data Types](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenlogexp_rules_operands.htm) →  [rel\_exp - Comparison Type of Elementary Data Objects](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenlogexp_rules_operands_dobj.htm) →  [rel\_exp - Comparison Type of Character-Like Data Objects](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenlogexp_character.htm) → 

Comparing Text Strings of Different Length

This example demonstrates how text strings of different lengths are compared.

Source Code

REPORT demo\_string\_comparison.
CLASS demo DEFINITION.
  PUBLIC SECTION.
    CLASS-METHODS main.
ENDCLASS.
CLASS demo IMPLEMENTATION.
  METHOD main.
    DATA length1 TYPE n LENGTH 1 VALUE '4'.
    cl\_demo\_input=>add\_field( CHANGING field = length1 ).
    DATA length2 TYPE n LENGTH 1 VALUE '6'.
    cl\_demo\_input=>request( CHANGING field = length2 ).
    DATA(len1) = CONV i( length1 ).
    DATA(len2) = CONV i( length2 ).
    IF len1 = 0 OR len2 = 0.
      cl\_demo\_output=>display( 'Try again!' ).
      RETURN.
    ENDIF.
    DATA(text1) = REDUCE string( INIT str = \`\`
                                 FOR i = 0 UNTIL i >= len1
                                 NEXT str = str && \`X\`  ).
    DATA(text2) = REDUCE string( INIT str = \`\`
                                 FOR i = 0 UNTIL i >= len2
                                 NEXT str = str && \`X\`  ).
    cl\_demo\_output=>display(
      COND #( WHEN text1 < text2 THEN |{ text1 } < { text2 }|
              WHEN text1 > text2 THEN |{ text1 } > { text2 }|
                                 ELSE |{ text1 } = { text2 }| ) ).  ENDMETHOD.
ENDCLASS.
START-OF-SELECTION.
  demo=>main( ).

Description

Two text strings text1 and text2 are filled using their respective input length with the character X and then compared. The shorter text string is smaller than the longer one.


### abenwait.htm

---
title: "Program Interruption"
description: |
  This section describes how programs are usually interrupted using the statement WAIT(https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abapwait_up_to.htm). A special variant(https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abapwait_until.htm) is explained in the context of as
version: "7.53"
category: "general"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenwait.htm"
abapFile: "abenwait.htm"
keywords: ["do", "try", "abenwait"]
---

* * *

AS ABAP Release 753, ©Copyright 2019 SAP AG. All rights reserved.

[ABAP Keyword Documentation](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenabap.htm) →  [ABAP − Reference](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenabap_reference.htm) →  [Program Flow Logic](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenabap_flow_logic.htm) →  [Control Structures](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abencontrol_structures.htm) → 

Program Interruption

This section describes how programs are usually interrupted using the statement [WAIT](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abapwait_up_to.htm). A special [variant](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abapwait_until.htm) is explained in the context of [asynchronous RFC](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenasynchronous_rfc_glosry.htm "Glossary Entry").

Continue
[WAIT UP TO](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abapwait_up_to.htm)


### abenwait.htm

---
title: "Program Interruption"
description: |
  This section describes how programs are usually interrupted using the statement WAIT(https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abapwait_up_to.htm). A special variant(https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abapwait_until.htm) is explained in the context of as
version: "7.53"
category: "general"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenwait.htm"
abapFile: "abenwait.htm"
keywords: ["do", "try", "abenwait"]
---

* * *

AS ABAP Release 753, ©Copyright 2019 SAP AG. All rights reserved.

[ABAP Keyword Documentation](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenabap.htm) →  [ABAP − Reference](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenabap_reference.htm) →  [Program Flow Logic](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenabap_flow_logic.htm) →  [Control Structures](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abencontrol_structures.htm) → 

Program Interruption

This section describes how programs are usually interrupted using the statement [WAIT](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abapwait_up_to.htm). A special [variant](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abapwait_until.htm) is explained in the context of [asynchronous RFC](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenasynchronous_rfc_glosry.htm "Glossary Entry").

Continue
[WAIT UP TO](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abapwait_up_to.htm)


### abentry_abexa.htm

---
title: "Exceptions, TRY"
description: |
  This example demonstrates the TRY control structure. Source Code REPORT demo_try. CLASS try_demo DEFINITION. PUBLIC SECTION. CLASS-DATA: result TYPE p LENGTH 8 DECIMALS 2, oref   TYPE REF TO cx_root, text   TYPE string. CLASS-METHODS main. PRIVATE SECTION. CLASS-DATA number TYPE i. CLASS-DATA out
version: "7.53"
category: "error-handling"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abentry_abexa.htm"
abapFile: "abentry_abexa.htm"
keywords: ["select", "do", "if", "try", "catch", "method", "class", "data", "exception-handling", "abentry", "abexa"]
---

* * *

AS ABAP Release 753, ©Copyright 2019 SAP AG. All rights reserved.

[ABAP Keyword Documentation](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenabap.htm) →  [ABAP − Reference](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenabap_reference.htm) →  [Program Flow Logic](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenabap_flow_logic.htm) →  [Exception Handling](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenabap_exceptions.htm) →  [Class-Based Exceptions](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenexceptions.htm) →  [Examples of Exceptions](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenexception_abexas.htm) → 

Exceptions, TRY

This example demonstrates the TRY control structure.

Source Code

REPORT demo\_try.
CLASS try\_demo DEFINITION.
  PUBLIC SECTION.
    CLASS-DATA: result TYPE p LENGTH 8 DECIMALS 2,
                oref   TYPE REF TO cx\_root,
                text   TYPE string.
    CLASS-METHODS main.
  PRIVATE SECTION.
    CLASS-DATA number TYPE i.
    CLASS-DATA out TYPE REF TO if\_demo\_output.
    CLASS-METHODS calculation
      IMPORTING  p\_number LIKE number
      CHANGING p\_result LIKE result
               p\_text   LIKE text
      RAISING  cx\_sy\_arithmetic\_error.
ENDCLASS.
CLASS try\_demo IMPLEMENTATION.
  METHOD main.
    cl\_demo\_input=>request( CHANGING field = number ).
    out = cl\_demo\_output=>new( ).
    TRY.
        IF abs( number ) > 100.
          RAISE EXCEPTION TYPE cx\_demo\_abs\_too\_large.
        ENDIF.
        calculation( EXPORTING p\_number = number
                     CHANGING  p\_result = result
                               p\_text   = text ).
      CATCH cx\_sy\_arithmetic\_error INTO oref.
        text = oref->get\_text( ).
      CATCH cx\_root INTO oref.
        text = oref->get\_text( ).
    ENDTRY.
    IF NOT text IS INITIAL.
      out->write( text ).
    ENDIF.
    out->display( |Final result: { result ALIGN = LEFT }| ).
  ENDMETHOD.
  METHOD calculation.
    DATA l\_oref TYPE REF TO cx\_root.
    TRY.
        p\_result =  1 / p\_number.
        out->write(
          |Result of division: { p\_result ALIGN = LEFT }| ).
        p\_result = sqrt( p\_number ).
        out->write(
          |Result of square root: { p\_result ALIGN = LEFT }| ).
      CATCH cx\_sy\_zerodivide INTO l\_oref.
        p\_text = l\_oref->get\_text( ).
      CLEANUP.
        CLEAR p\_result.
    ENDTRY.
  ENDMETHOD.
ENDCLASS.
START-OF-SELECTION.
  try\_demo=>main( ).

Description

-   If the content of number is greater than 100, the TRY control structure of the [master program](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenframe_program_glosry.htm "Glossary Entry") raises an exception of the class CX\_DEMO\_ABS\_TOO\_LARGE in the TRY block. This exception is handled by the second CATCH block of the same TRY control structure, since the subclass of the most general exception is CX\_ROOT.

-   If the content of number is 0, the runtime environment in the TRY block of the TRY control structure of the called method calculation raises an exception of the predefined class CX\_SY\_ZERODIVIDE. This is handled in the CATCH block of the same TRY control structure.

-   If the content of number is a negative number, the runtime environment in the TRY block of the TRY control structure of the called method calculation raises an exception of the predefined class CX\_SY\_ARG\_OUT\_OF\_DOMAIN. Since there is no handler defined for this exception in this TRY control structure, the exception is propagated from the method. This is made possible by the declaration of the superclass CX\_SY\_ARITHMETIC\_ERROR using RAISING in the method interface. The CLEANUP block of the inner TRY control structure is executed first.

-   Any other exceptions are handled in the final CATCH block of the TRY control structure of the master program. This block catches all possible exceptions by specifying the most general exception class, CX\_ROOT. If, for example, CX\_SY\_ARG\_OUT\_OF\_DOMAIN or one of its superclasses is not declared in the method interface, the exception CX\_SY\_NO\_HANDLER would be raised and would be handled in the final CATCH block.

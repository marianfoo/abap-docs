# ABAP - Keyword Documentation / ABAP - Programming Language / Text Repositories / Messages / Messages - System Interfaces / Messages - System Interface IF_T100_DYN_MSG

Included pages: 5


### abenif_t100_dyn_msg.htm

---
title: "Hints"
description: |
  -   The interface IF_T100_DYN_MSG is designed specifically for raising class-based exceptions with the addition MESSAGE(https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abapraise_exception_message.htm) of the statement RAISE EXCEPTION(https://help.sap.com/doc/abapdocu_latest_in
version: "latest"
category: "general"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenif_t100_dyn_msg.htm"
abapFile: "abenif_t100_dyn_msg.htm"
keywords: ["do", "if", "try", "catch", "class", "data", "abenif", "t100", "dyn", "msg"]
---

* * *

AS ABAP Release 758, ©Copyright 2024 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenabap.htm) →  [ABAP - Programming Language](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenabap_reference.htm) →  [Text Repositories](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenabap_texts.htm) →  [Messages](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenabap_messages.htm) →  [Messages - System Interfaces](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenmessage_interfaces.htm) → 

 [![](Mail.gif?object=Mail.gif "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback%20on%20ABAP%20Documentation&body=Document:%20Messages%20-%20System%20Interface%20IF_T100_DYN_MSG%2C%20ABENIF_T100_DYN_MSG%2C%20758%0D%0A%0D%0AError:%0D%0A%0D%0A%0D%0A%0D%0ASuggestion%20for%20improvement
:)

Messages - System Interface IF\_T100\_DYN\_MSG

The interface IF\_T100\_DYN\_MSG contains the interface [IF\_T100\_MESSAGE](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenif_t100_message.htm) as a component interface and adds the following to it:

-   The attribute MSGTY for the message type
-   The attributes MSGV1 to MSGV4 for the placeholders of the message

Like IF\_T100\_MESSAGE, the interface IF\_T100\_DYN\_MSG associates classes with messages, whereby the attributes for the message type and placeholders of the message are already predefined.

Hints

-   The interface IF\_T100\_DYN\_MSG is designed specifically for raising class-based exceptions with the addition [MESSAGE](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abapraise_exception_message.htm) of the statement [RAISE EXCEPTION](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abapraise_exception_class.htm) or the addition [THROW](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenconditional_expression_result.htm) in [conditional expressions](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenconditional_expressions.htm). The properties of the message specified after MESSAGE are assigned automatically to the associated attributes in [exception classes](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenexceptions_classes.htm) that include IF\_T100\_DYN\_MSG.
-   The addition [MESSAGE](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abapraise_exception_message.htm) of RAISE EXCEPTION and/or THROW has a short form USING MESSAGE. This can be used for exception classes with the interface IF\_T100\_DYN\_MSG and enables determining the message from the current content of the system fields sy-msg.... The short form can be used particularly for converting classical exceptions to class-based exceptions.
-   If the object reference variable oref points to an object that includes the system interface IF\_T100\_DYN\_MSG in the variant [MESSAGE oref](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abapmessage_msg.htm) of the statement [MESSAGE](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abapmessage.htm), the addition TYPE can be omitted and the message type from the interface attribute MSGTY of the object is used implicitly.

Example

[THROW](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenconditional_expression_result.htm) is used to raise an exception of the class CX\_DEMO\_DYN\_T100, which implements the interface IF\_T100\_DYN\_MSG.

DATA col TYPE c LENGTH 1.
...
TRY.
    FINAL(color) = COND string(
                    WHEN col = 'R' THEN 'red'
                    WHEN col = 'B' THEN 'blue'
                    WHEN col = 'G' THEN 'green'
                    ELSE THROW cx\_demo\_dyn\_t100(
                         MESSAGE e888(sabapdemos)
                           WITH 'Illegal value:' col ) ).
  CATCH cx\_demo\_dyn\_t100.
    ...
ENDTRY.

Executable Examples

-   [System Interface IF\_T100\_DYN\_MSG in a Regular Class](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenif_t100_dyn_msg_abexa.htm)
-   [System Interface IF\_T100\_DYN\_MSG in a Local Exception Class](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenraise_message_abexa.htm)
-   [System Interface IF\_T100\_DYN\_MSG in a Global Exception Class](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenraise_message_global_abexa.htm)
-   [System Interface IF\_T100\_DYN\_MSG for Exception error\_message](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenraise_error_message_abexa.htm)

Continue
![Example](exa.gif "Example") [Messages - IF\_T100\_DYN\_MSG in a Regular Class](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenif_t100_dyn_msg_abexa.htm)
![Example](exa.gif "Example") [Messages - IF\_T100\_DYN\_MSG in a Local Exception Class](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenraise_message_abexa.htm)
![Example](exa.gif "Example") [Messages - IF\_T100\_DYN\_MSG in a Global Exception Class](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenraise_message_global_abexa.htm)
![Example](exa.gif "Example") [Messages - IF\_T100\_DYN\_MSG for Exception error\_message](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenraise_error_message_abexa.htm)


### abenif_t100_dyn_msg_abexa.htm

---
title: "This example demonstrates how a regular class is linked with a message"
description: |
  Source Code  Public class definition CLASS cl_demo_if_t100_dyn_msg DEFINITION INHERITING FROM cl_demo_classrun PUBLIC CREATE PUBLIC. PUBLIC SECTION. METHODS main REDEFINITION. ENDCLASS.  CCIMP CLASS msg DEFINITION. PUBLIC SECTION. INTERFACES if_t100_dyn_msg. ALIASES: msgty FOR if_t100
version: "latest"
category: "oop"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenif_t100_dyn_msg_abexa.htm"
abapFile: "abenif_t100_dyn_msg_abexa.htm"
keywords: ["do", "if", "method", "class", "data", "abenif", "t100", "dyn", "msg", "abexa"]
---

* * *

AS ABAP Release 758, ©Copyright 2024 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenabap.htm) →  [ABAP - Programming Language](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenabap_reference.htm) →  [Text Repositories](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenabap_texts.htm) →  [Messages](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenabap_messages.htm) →  [Messages - System Interfaces](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenmessage_interfaces.htm) →  [Messages - System Interface IF\_T100\_DYN\_MSG](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenif_t100_dyn_msg.htm) → 

 [![](Mail.gif?object=Mail.gif "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback%20on%20ABAP%20Documentation&body=Document:%20Messages%20-%20IF_T100_DYN_MSG%20in%20a%20Regular%20Class%2C%20ABENIF_T100_DYN_MSG_ABEXA%2C%20758%0D%0A%0D%0AError:%0D%0A%0D%0A%0D%0A%0D%0ASuggestion%20for%2
0improvement:)

Messages - IF\_T100\_DYN\_MSG in a Regular Class

This example demonstrates how a regular class is linked with a message

Source Code   

\* Public class definition
CLASS cl\_demo\_if\_t100\_dyn\_msg DEFINITION
  INHERITING FROM cl\_demo\_classrun
  PUBLIC
  CREATE PUBLIC.
  PUBLIC SECTION.
    METHODS main REDEFINITION.
ENDCLASS.
\* CCIMP
CLASS msg DEFINITION.
  PUBLIC SECTION.
    INTERFACES if\_t100\_dyn\_msg.
    ALIASES: msgty FOR if\_t100\_dyn\_msg~msgty,
    get\_text FOR if\_message~get\_text,
    get\_longtext FOR if\_message~get\_longtext.
    METHODS constructor IMPORTING id TYPE symsgid
    no TYPE symsgno
    ty TYPE symsgty
    v1 TYPE string OPTIONAL
    v2 TYPE string OPTIONAL
    v3 TYPE string OPTIONAL
    v4 TYPE string OPTIONAL.
ENDCLASS.
CLASS msg IMPLEMENTATION.
  METHOD constructor.
    if\_t100\_message~t100key-msgid = id.
    if\_t100\_message~t100key-msgno = no.
    if\_t100\_dyn\_msg~msgty = ty.
    if\_t100\_message~t100key-attr1 = 'IF\_T100\_DYN\_MSG~MSGV1'.
    if\_t100\_message~t100key-attr2 = 'IF\_T100\_DYN\_MSG~MSGV2'.
    if\_t100\_message~t100key-attr3 = 'IF\_T100\_DYN\_MSG~MSGV3'.
    if\_t100\_message~t100key-attr4 = 'IF\_T100\_DYN\_MSG~MSGV4'.
    if\_t100\_dyn\_msg~msgv1 = v1.
    if\_t100\_dyn\_msg~msgv2 = v2.
    if\_t100\_dyn\_msg~msgv3 = v3.
    if\_t100\_dyn\_msg~msgv4 = v4.
  ENDMETHOD.
  METHOD if\_message~get\_text.
    result = cl\_message\_helper=>get\_text\_for\_message( me ).
  ENDMETHOD.
  METHOD if\_message~get\_longtext.
    result = cl\_message\_helper=>get\_longtext\_for\_message( me ).
  ENDMETHOD.
ENDCLASS.
\* Public class implementation
CLASS cl\_demo\_if\_t100\_dyn\_msg IMPLEMENTATION.
  METHOD main.
    DATA(id) = \`SABAPDEMOS\`.
    DATA(no) = \`888\`.
    DATA(ty) = \`I\`.
    DATA(v1) = \`Hello,\`.
    DATA(v2) = \`I am\`.
    DATA(v3) = \`a\`.
    DATA(v4) = \`Message!\`.
    cl\_demo\_input=>new(
      )->add\_field( CHANGING field = id
      )->add\_field( CHANGING field = no
      )->add\_field( CHANGING field = ty
      )->add\_field( CHANGING field = v1
      )->add\_field( CHANGING field = v2
      )->add\_field( CHANGING field = v3
      )->add\_field( CHANGING field = v4
      )->request( ).
    IF strlen( ty ) > 1 OR 'AEISX' NS ty.
      out->write(
        |Invalid message type: { ty }|  ).
      RETURN.
    ENDIF.
    FINAL(mref) = NEW msg( id = CONV #( id )
                           no = CONV #( no )
                           ty = CONV #( ty )
                           v1 = v1
                           v2 = v2
                           v3 = v3
                           v4 = v4 ).
    out->write(
      |{ mref->get\_text( ) }, Type: { mref->msgty }| ).
    "MESSAGE mref TYPE 'I' DISPLAY LIKE mref->msgty.
  ENDMETHOD.
ENDCLASS.

Description   

This example applies the [executable example](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenif_t100_message_abexa.htm) for the interface IF\_T100\_MESSAGE to the interface IF\_T100\_DYN\_MSG directly. If IF\_T100\_DYN\_MSG is used, it is no longer necessary to create separate attributes for the placeholders of the message. The attributes of the interface are used instead. Furthermore, the message type can be stored and evaluated in the interface attribute msgty. If IF\_T100\_MESSAGE is used, a separate attribute must be declared here. The attribute can then be used in the MESSAGE statement in ABAP language versions where that syntax is allowed.


### abenraise_message_abexa.htm

---
title: "This example demonstrates how a local exception class is linked with a message"
description: |
  Source Code  CCDEF CLASS cx_dyn_t100 DEFINITION INHERITING FROM cx_dynamic_check. PUBLIC SECTION. INTERFACES if_t100_dyn_msg. ALIASES msgty FOR if_t100_dyn_msg~msgty. ENDCLASS.  Public class definition CLASS cl_demo_raise_msg DEFINITION INHERITING FROM cl_demo_classrun PUBLIC CREA
version: "latest"
category: "oop"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenraise_message_abexa.htm"
abapFile: "abenraise_message_abexa.htm"
keywords: ["do", "if", "try", "catch", "method", "class", "abenraise", "message", "abexa"]
---

* * *

AS ABAP Release 758, ©Copyright 2024 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenabap.htm) →  [ABAP - Programming Language](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenabap_reference.htm) →  [Text Repositories](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenabap_texts.htm) →  [Messages](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenabap_messages.htm) →  [Messages - System Interfaces](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenmessage_interfaces.htm) →  [Messages - System Interface IF\_T100\_DYN\_MSG](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenif_t100_dyn_msg.htm) → 

 [![](Mail.gif?object=Mail.gif "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback%20on%20ABAP%20Documentation&body=Document:%20Messages%20-%20IF_T100_DYN_MSG%20in%20a%20Local%20Exception%20Class%2C%20ABENRAISE_MESSAGE_ABEXA%2C%20758%0D%0A%0D%0AError:%0D%0A%0D%0A%0D%0A%0D%0ASuggestion
%20for%20improvement:)

Messages - IF\_T100\_DYN\_MSG in a Local Exception Class

This example demonstrates how a local exception class is linked with a message

Source Code   

\* CCDEF
CLASS cx\_dyn\_t100 DEFINITION INHERITING FROM cx\_dynamic\_check.
  PUBLIC SECTION.
    INTERFACES if\_t100\_dyn\_msg.
    ALIASES msgty FOR if\_t100\_dyn\_msg~msgty.
ENDCLASS.
\* Public class definition
CLASS cl\_demo\_raise\_msg DEFINITION
  INHERITING FROM cl\_demo\_classrun
  PUBLIC
  CREATE PUBLIC.
  PUBLIC SECTION.
    METHODS main REDEFINITION.
  PRIVATE SECTION.
    METHODS meth
      RAISING cx\_dyn\_t100.
ENDCLASS.
\* Public class implementation
CLASS cl\_demo\_raise\_msg IMPLEMENTATION.
  METHOD main.
    TRY.
        meth( ).
      CATCH cx\_dyn\_t100 INTO FINAL(oref).
        out->write(
          |Caught exception:\\n\\n| &&
          |"{ oref->get\_text( ) }", Type { oref->msgty } | ).
        "MESSAGE oref TYPE oref->msgty.
    ENDTRY.
  ENDMETHOD.
  METHOD meth.
    RAISE EXCEPTION TYPE cx\_dyn\_t100
          MESSAGE e888(sabapdemos) WITH 'I' 'am' 'an' 'Exception!'.
  ENDMETHOD.
ENDCLASS.

Description   

This example applies the [executable example](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenmessage_interface_abexa.htm) for the interface IF\_T100\_MESSAGE directly to the interface IF\_T100\_DYN\_MSG. The local class cx\_dyn\_t100 implements the interface [IF\_T100\_DYN\_MSG](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenif_t100_dyn_msg.htm) and the addition [MESSAGE](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abapraise_exception_message.htm) of the statement [RAISE EXCEPTION](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abapraise_exception_class.htm) is used to raise the exception in the method meth.

Unlike when using [IF\_T100\_MESSAGE](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenif_t100_message.htm), no separate attributes for the placeholders of the message and no implementation of the instance constructor are required in cx\_dyn\_t100. Furthermore, the message type is passed in an attribute of the exception object when IF\_T100\_DYN\_MSG is used. An alias name is introduced for this attribute here.


### abenraise_message_global_abexa.htm

---
title: "This example demonstrates how a global exception class is linked with a message"
description: |
  Source Code  Public class definition CLASS cl_demo_raise_msg_global DEFINITION INHERITING FROM cl_demo_classrun PUBLIC CREATE PUBLIC. PUBLIC SECTION. METHODS main REDEFINITION. PRIVATE SECTION. METHODS meth EXCEPTIONS exception. ENDCLASS.  Public class implementation CLASS cl_demo_raise
version: "latest"
category: "oop"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenraise_message_global_abexa.htm"
abapFile: "abenraise_message_global_abexa.htm"
keywords: ["do", "if", "case", "try", "catch", "method", "class", "abenraise", "message", "global", "abexa"]
---

* * *

AS ABAP Release 758, ©Copyright 2024 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenabap.htm) →  [ABAP - Programming Language](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenabap_reference.htm) →  [Text Repositories](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenabap_texts.htm) →  [Messages](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenabap_messages.htm) →  [Messages - System Interfaces](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenmessage_interfaces.htm) →  [Messages - System Interface IF\_T100\_DYN\_MSG](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenif_t100_dyn_msg.htm) → 

 [![](Mail.gif?object=Mail.gif "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback%20on%20ABAP%20Documentation&body=Document:%20Messages%20-%20IF_T100_DYN_MSG%20in%20a%20Global%20Exception%20Class%2C%20ABENRAISE_MESSAGE_GLOBAL_ABEXA%2C%20758%0D%0A%0D%0AError:%0D%0A%0D%0A%0D%0A%0D%0ASu
ggestion%20for%20improvement:)

Messages - IF\_T100\_DYN\_MSG in a Global Exception Class

This example demonstrates how a global exception class is linked with a message

Source Code   

\* Public class definition
CLASS cl\_demo\_raise\_msg\_global DEFINITION
  INHERITING FROM cl\_demo\_classrun
  PUBLIC
  CREATE PUBLIC.
  PUBLIC SECTION.
    METHODS main REDEFINITION.
  PRIVATE SECTION.
    METHODS meth EXCEPTIONS exception.
ENDCLASS.
\* Public class implementation
CLASS cl\_demo\_raise\_msg\_global IMPLEMENTATION.
  METHOD main.
    TRY.
        meth( EXCEPTIONS exception = 4 ).
        IF sy-subrc <> 0.
          RAISE EXCEPTION TYPE cx\_demo\_dyn\_t100
            MESSAGE ID sy-msgid
                    TYPE sy-msgty
                    NUMBER sy-msgno
                    WITH sy-msgv1 sy-msgv2 sy-msgv3 sy-msgv4.
        ENDIF.
      CATCH cx\_demo\_dyn\_t100 INTO FINAL(oref).
        out->write(
          |Caught exception:\\n\\n| &&
          |"{ oref->get\_text( ) }", Type { oref->msgty } | ).
        MESSAGE oref TYPE 'I' DISPLAY LIKE oref->msgty.
    ENDTRY.
  ENDMETHOD.
  METHOD meth.
    MESSAGE e888(sabapdemos) WITH 'I' 'am' 'an' 'Exception!'
                             RAISING exception.
  ENDMETHOD.
ENDCLASS.

Description   

This example demonstrates the transformation of a non-class-based exception raised in a method using the statement [MESSAGE RAISING](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abapmessage_raising.htm) and, when the method is called, handled using the addition [EXCEPTIONS](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abapcall_method_parameters.htm), to a class-based exception. This example works in the same way as the [executable example](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenmessage_interface_reuse_abexa.htm) for the system interface [IF\_T100\_MESSAGE](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenif_t100_message.htm), but uses the class CX\_DEMO\_DYN\_T100, which implements the system interface [IF\_T100\_DYN\_MSG](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenif_t100_dyn_msg.htm).

-   In both cases, sy-msgid and sy-msgno can be used after the addition [MESSAGE](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abapraise_exception_message.htm) of the statement [RAISE EXCEPTION](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abapraise_exception_class.htm) to associate the exception object with the message.
-   sy-msgv1 to sy-msgv4 can be specified after [WITH](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abapraise_exception_message.htm) and are automatically assigned to the interface attributes MSGV1 to MSGV4 here.
-   sy-msgty can also be passed here using [MESSAGE](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abapraise_exception_message.htm).

Hint

See also the executable [example](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenraise_message_glbl_shrt_abexa.htm) for using a short form of statement [RAISE EXCEPTION MESSAGE](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abapraise_exception_message.htm).


### abenraise_error_message_abexa.htm

---
title: "Source Code"
description: |
  Public class definition CLASS cl_demo_raise_error_message DEFINITION INHERITING FROM cl_demo_classrun PUBLIC CREATE PUBLIC. PUBLIC SECTION. METHODS main REDEFINITION. ENDCLASS.  Public class implementation CLASS cl_demo_raise_error_message IMPLEMENTATION. METHOD main. TRY. CALL FUNCTI
version: "latest"
category: "general"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenraise_error_message_abexa.htm"
abapFile: "abenraise_error_message_abexa.htm"
keywords: ["do", "if", "try", "catch", "method", "class", "abenraise", "error", "message", "abexa"]
---

* * *

AS ABAP Release 758, ©Copyright 2024 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenabap.htm) →  [ABAP - Programming Language](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenabap_reference.htm) →  [Text Repositories](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenabap_texts.htm) →  [Messages](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenabap_messages.htm) →  [Messages - System Interfaces](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenmessage_interfaces.htm) →  [Messages - System Interface IF\_T100\_DYN\_MSG](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenif_t100_dyn_msg.htm) → 

 [![](Mail.gif?object=Mail.gif "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback%20on%20ABAP%20Documentation&body=Document:%20Messages%20-%20IF_T100_DYN_MSG%20for%20Exception%20error_message%2C%20ABENRAISE_ERROR_MESSAGE_ABEXA%2C%20758%0D%0A%0D%0AError:%0D%0A%0D%0A%0D%0A%0D%0ASuggest
ion%20for%20improvement:)

Messages - IF\_T100\_DYN\_MSG for Exception error\_message

This example demonstrates how a caught message of a function module is forwarded.

Source Code   

\* Public class definition
CLASS cl\_demo\_raise\_error\_message DEFINITION
  INHERITING FROM cl\_demo\_classrun
  PUBLIC
  CREATE PUBLIC.
  PUBLIC SECTION.
    METHODS main REDEFINITION.
ENDCLASS.
\* Public class implementation
CLASS cl\_demo\_raise\_error\_message IMPLEMENTATION.
  METHOD main.
    TRY.
        CALL FUNCTION 'DEMO\_FUNCTION\_MESSAGE'
          EXPORTING
            message\_type  = 'A'
            message\_place = 'in Function Module'
            message\_event = 'Method MAIN'
          EXCEPTIONS
            error\_message = 4.
        IF sy-subrc <> 0.
          RAISE EXCEPTION TYPE cx\_demo\_dyn\_t100
            MESSAGE ID sy-msgid
            TYPE sy-msgty
            NUMBER sy-msgno
            WITH sy-msgv1 sy-msgv2 sy-msgv3 sy-msgv4.
        ENDIF.
      CATCH cx\_demo\_dyn\_t100 INTO FINAL(oref).
        out->write(
          |Caught exception:\\n\\n| &&
          |"{ oref->get\_text( ) }", Type { oref->msgty } | ).
        "MESSAGE oref TYPE 'I' DISPLAY LIKE oref->msgty.
    ENDTRY.
  ENDMETHOD.
ENDCLASS.

Description   

This example works in basically the same way as the [executable example](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenraise_message_global_abexa.htm) for transforming a classic exception raised using MESSAGE RAISING to a class-based exception. Here, however, a message of type A caught using [error\_message](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abapcall_function_parameter.htm) is transformed.

Hint

See also the executable [example](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenraise_error_message_shrt_abexa.htm) for using a short form of statement [RAISE EXCEPTION MESSAGE](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abapraise_exception_message.htm).

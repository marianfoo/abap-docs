---
title: "RAISE SHORTDUMP, message"
description: |
  Short Reference(https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abapraise_shortdump_shortref.htm) Syntax ...  MESSAGE(https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abapraise_exception_message.htm) tn(id)   ID mid TYPE mtype NUMBER num  WITH dobj1 ... dobj4
version: "7.55"
category: "general"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abapraise_shortdump_message.htm"
abapFile: "abapraise_shortdump_message.htm"
keywords: ["do", "if", "try", "class", "exception-handling", "abapraise", "shortdump", "message"]
---

* * *

AS ABAP Release 755, ©Copyright 2020 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenabap.htm) →  [ABAP - Programming Language](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenabap_reference.htm) →  [Program Flow Logic](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenabap_flow_logic.htm) →  [Exception Handling](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenabap_exceptions.htm) →  [Runtime Errors](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abennoncat_exceptions.htm) →  [RAISE SHORTDUMP](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abapraise_shortdump.htm) → 

RAISE SHORTDUMP, message

[Short Reference](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abapraise_shortdump_shortref.htm)

Syntax

... *{* [MESSAGE](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abapraise_exception_message.htm) tn(id)
            *|* *{* ID mid TYPE mtype NUMBER num *}*
              *\[*WITH dobj1 ... dobj4*\]* *}*
  *|* *{* [USING MESSAGE](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abapraise_exception_message.htm) *}* ...

Effect

The addition MESSAGE of the statement [RAISE SHORTDUMP](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abapraise_shortdump.htm) and of the addition [THROW SHORTDUMP](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenconditional_expression_result.htm) in a [conditional expression](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenconditional_expressions.htm) passes the specification of a [message](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenmessage_glosry.htm "Glossary Entry") to the exception object. Syntax and semantics are the same as in the addition [MESSAGE](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abapraise_exception_message.htm) of the statement [RAISE EXCEPTION](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abapraise_exception_class.htm).

Hint

The addition MESSAGE cannot be specified after the variant [RAISE SHORTDUMP oref](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abapraise_shortdump.htm).

Example

Raising of a runtime error with an exception object of the exception class CX\_DEMO\_DYN\_T100, which implements the interface [IF\_T100\_DYN\_MSG](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenif_t100_dyn_msg.htm). The addition MESSAGE is used to pass the properties of a message that determines the exception text.

RAISE SHORTDUMP TYPE cx\_demo\_dyn\_t100
  MESSAGE ID 'SABAPDEMOS'
          TYPE 'I'
          NUMBER '888'
          WITH 'I' 'need' 'a' 'break!'.

Example

Raising of a runtime error with an exception object of the exception class CX\_DEMO\_T100, which implements the interface [IF\_T100\_MESSAGE](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenif_t100_message.htm). The additions MESSAGE and EXPORTING are used to pass the properties of a message that determines the exception text.

RAISE SHORTDUMP TYPE cx\_demo\_t100
                MESSAGE ID 'SABAPDEMOS'
                        NUMBER '888'
                EXPORTING text1 = 'I'
                          text2 = 'need'
                          text3 = 'a'
                          text4 = 'break!'.

Example

Raising of a runtime error with an exception object of the exception class CX\_DEMO\_DYN\_T100, which implements the interface [IF\_T100\_DYN\_MSG](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenif_t100_dyn_msg.htm). The addition USING MESSAGE is used to pass the properties of a previously sent message that determines the exception text.

MESSAGE ID 'SABAPDEMOS'
        TYPE 'S'
        NUMBER '888'
        WITH 'I' 'need' 'a' 'break!'.
RAISE SHORTDUMP TYPE cx\_demo\_dyn\_t100
                USING MESSAGE.
---
title: "Dynamic Calls"
description: |
  In dynamic calls, the name of the called unit is specified as the content of a character-like data object. If some or all of this content originates outside of the calling program, there is a risk that units are called unintentionally. The only way of tackling this security risk is to perform a comp
version: "7.52"
category: "general"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abendyn_call_scrty.htm"
abapFile: "abendyn_call_scrty.htm"
keywords: ["select", "do", "if", "case", "try", "catch", "method", "class", "data", "abendyn", "call", "scrty"]
---

* * *

SAP NetWeaver AS ABAP Release 752, ©Copyright 2017 SAP AG. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenabap.htm) →  [ABAP - Security Notes](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenabap_security.htm) →  [Security Risks Caused by Input from Outside](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abendynamic_programming_scrty.htm) → 

Dynamic Calls

In dynamic calls, the name of the called unit is specified as the content of a character-like data object. If some or all of this content originates outside of the calling program, there is a risk that units are called unintentionally. The only way of tackling this security risk is to perform a comparison with a whitelist. The class CL\_ABAP\_DYN\_PRG provides the methods CHECK\_WHITELIST\_STR and CHECK\_WHITELIST\_TAB.

Potential dynamic calls and hence a potential security risk when handling input can occur in the following cases:

-   When an executable program is specified dynamically after [SUBMIT](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abapsubmit.htm).

-   When a transaction is specified dynamically after [CALL TRANSACTION](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abapcall_transaction.htm) and [LEAVE TO TRANSACTION](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abapleave_to_transaction.htm).

-   When classes and methods are specified dynamically in a dynamic method call using [CALL METHOD](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abapcall_method_dynamic.htm).

-   When a class is specified dynamically in [CREATE OBJECT](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abapcreate_object.htm) (a dynamic call of the instance constructor).

-   When the function module is specified dynamically in a function module call using [CALL FUNCTION](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abapcall_function.htm) (particularly if [RFC](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenrfc_glosry.htm "Glossary Entry") is used).

-   When subroutines and programs are specified dynamically in dynamic subroutine calls using [PERFORM](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abapperform.htm).

-   When the system function is specified dynamically in the internal statement [CALL](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abapcall-.htm).

Note

As well as checking intentional calls, it is also necessary to perform a sufficient [authorization check](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenauthority_scrty.htm) on the current user in program calls.

Example

In the following program section, a transaction name, when entered, is checked against a whitelist that contains only transactions from the ABAP example library.

DATA whitelist TYPE HASHED TABLE OF string
               WITH UNIQUE KEY table\_line.
SELECT obj\_name
       FROM tadir
       WHERE pgmid    = 'R3TR' AND
             object   = 'TRAN' AND
             devclass = 'SABAPDEMOS'
       INTO TABLE @whitelist.
DATA transaction TYPE sy-tcode.
cl\_demo\_input=>request( CHANGING field = transaction ).
TRY.
    transaction = cl\_abap\_dyn\_prg=>check\_whitelist\_tab(
      val = transaction
      whitelist = whitelist ).
  CATCH cx\_abap\_not\_in\_whitelist INTO DATA(exc).
    cl\_demo\_output=>display( exc->get\_text( ) ).
    LEAVE PROGRAM.
ENDTRY.
TRY.
    CALL TRANSACTION transaction WITH AUTHORITY-CHECK.
  CATCH cx\_sy\_authorization\_error ##NO\_HANDLER.
ENDTRY.
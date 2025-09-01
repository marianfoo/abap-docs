  

* * *

AS ABAP Release 753, ©Copyright 2019 SAP AG. All rights reserved.

[ABAP Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP - Security Notes](javascript:call_link\('abenabap_security.htm'\)) →  [Security Risks Caused by Input from Outside](javascript:call_link\('abendynamic_programming_scrty.htm'\)) → 

Dynamic Calls

In dynamic calls, the name of the called unit is specified as the content of a character-like data object. If some or all of this content originates outside of the calling program, there is a risk that units are called unintentionally. The only way of tackling this security risk is to perform a comparison with a whitelist. The class CL\_ABAP\_DYN\_PRG provides the methods CHECK\_WHITELIST\_STR and CHECK\_WHITELIST\_TAB.

Potential dynamic calls and hence a potential security risk when handling input can occur in the following cases:

-   When an executable program is specified dynamically after [SUBMIT](javascript:call_link\('abapsubmit.htm'\)).

-   When a transaction is specified dynamically after [CALL TRANSACTION](javascript:call_link\('abapcall_transaction.htm'\)) and [LEAVE TO TRANSACTION](javascript:call_link\('abapleave_to_transaction.htm'\)).

-   When classes and methods are specified dynamically in a dynamic method call using [CALL METHOD](javascript:call_link\('abapcall_method_dynamic.htm'\)).

-   When a class is specified dynamically in [CREATE OBJECT](javascript:call_link\('abapcreate_object.htm'\)) (a dynamic call of the instance constructor).

-   When the function module is specified dynamically in a function module call using [CALL FUNCTION](javascript:call_link\('abapcall_function.htm'\)) (particularly if [RFC](javascript:call_link\('abenrfc_glosry.htm'\) "Glossary Entry") is used).

-   When subroutines and programs are specified dynamically in dynamic subroutine calls using [PERFORM](javascript:call_link\('abapperform.htm'\)).

-   When the system function is specified dynamically in the internal statement [CALL](javascript:call_link\('abapcall-.htm'\)).

Note

As well as checking intentional calls, it is also necessary to perform a sufficient [authorization check](javascript:call_link\('abenauthority_scrty.htm'\)) on the current user in program calls.

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
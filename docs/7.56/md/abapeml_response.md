  

* * *

AS ABAP Release 756, ©Copyright 2021 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP - Programming Language](javascript:call_link\('abenabap_reference.htm'\)) →  [ABAP for RAP Business Objects](javascript:call_link\('abenabap_for_rap_bos.htm'\)) →  [ABAP for Consuming RAP Business Objects](javascript:call_link\('abenabap_consume_rap_bos.htm'\)) →  [ABAP EML - Consuming RAP BOs](javascript:call_link\('abeneml.htm'\)) →  [ABAP EML - Common EML Statements and Operands](javascript:call_link\('abapcommon_eml_elements.htm'\)) → 

ABAP EML - response\_param

Syntax

... *\[*FAILED failed*\]*
    *\[*MAPPED mapped*\]*
    *\[*REPORTED reported*\]* ...

Effect

Used to specify response parameters for ABAP EML statements to get information on failures (i. e. operations that could not get processed), key mapping information and returned error messages.

The following table shows which responses are possible for the respective EML statements:

EML statement

FAILED

MAPPED

REPORTED

MODIFY

X

X

X

READ

X

 

X

COMMIT

X

 

X

GET PERMISSIONS

X

 

X

SET LOCKS

X

 

X

The specification of the parameters failed, mapped, and reported after the respective keyword depends on the context, i. e. which forms of the ABAP EML statements (dynamic or non-dynamic) are used:

-   [response\_param, Nondynamic Forms of ABAP EML Statements](javascript:call_link\('abapeml_responses.htm'\)).
    
    Use of the parameters with nondynamic (i. e. short or long) forms of ABAP EML statements, for example, [MODIFY ENTITY](javascript:call_link\('abapmodify_entity_short.htm'\)) or [MODIFY ENTITIES](javascript:call_link\('abapmodify_entities_long.htm'\)).
    
-   [response\_param, Dynamic Forms of ABAP EML Statements](javascript:call_link\('abapeml_responses_dyn.htm'\)).
    
    Use of the parameters with the dynamic forms of the ABAP EML statements, for example [MODIFY ENTITIES OPERATIONS](javascript:call_link\('abapmodify_entities_operations_dyn.htm'\)) or [READ ENTITIES OPERATIONS](javascript:call_link\('abapread_entities_operations.htm'\)).
    

Hints

-   If there is no response returned, for example, an operation is successful, there are no entries in the failed and reported parameters.
-   The reported parameter contains the component %msg. It is of type REF TO if\_abap\_behv\_message (which contains if\_t100\_dyn\_msg). If no custom implementation of this interface is required, the inherited method new\_message (or new\_message\_with\_text) can be used as a standard implementation.
-   The specification of a parameter for MAPPED is required for create operations including [UUID](javascript:call_link\('abenuuid_glosry.htm'\) "Glossary Entry") and in case of early internal numbering. It cannot be specified in external numbering scenarios. In late numbering scenarios, the [CONVERT KEY](javascript:call_link\('abapemlcommit_entities_late.htm'\)) statement can be used. For further information, see the Development Guide for the ABAP RESTful Application Programming Model, section Numbering.
-   For MODIFY statements with the addition [AUGMENTING](javascript:call_link\('abapmodify_aug_entity_entities.htm'\)), no response parameters can be specified, i.e. the additions FAILED, MAPPED orREPORTED cannot be used.

Executable Example

-   The example [ABAP EML - Responses](javascript:call_link\('abeneml_responses_abexa.htm'\)) demonstrates the response parameters FAILED, REPORTED and MAPPED using modify operations to change a simple managed RAP BO.
-   The example [ABAP EML - Responses (Dynamic Forms of ABAP EML Statements](javascript:call_link\('abeneml_responses_dyn_abexa.htm'\))) demonstrates the response parameters FAILED, REPORTED and MAPPED with the dynamic forms of read and modify operations in the context of a simple managed RAP BO.

Continue
[response\_param, Nondynamic Forms of ABAP EML Statements](javascript:call_link\('abapeml_responses.htm'\))
[response\_param, Dynamic Forms of ABAP EML Statements](javascript:call_link\('abapeml_responses_dyn.htm'\))
[Examples for responses](javascript:call_link\('abeneml_responses_abexas.htm'\))
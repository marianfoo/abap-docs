  

* * *

AS ABAP Release 756, ©Copyright 2021 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP - Programming Language](javascript:call_link\('abenabap_reference.htm'\)) →  [ABAP for RAP Business Objects](javascript:call_link\('abenabap_for_rap_bos.htm'\)) →  [ABAP for Consuming RAP Business Objects](javascript:call_link\('abenabap_consume_rap_bos.htm'\)) →  [ABAP EML - Consuming RAP BOs](javascript:call_link\('abeneml.htm'\)) →  [MODIFY ENTITY, ENTITIES](javascript:call_link\('abapmodify_entity_entities.htm'\)) →  [Examples for ABAP EML MODIFY](javascript:call_link\('abapeml_modify_examples.htm'\)) → 

ABAP EML - RAP Calculator (Unmanaged)

This example demonstrates a calculator that is implemented in a RAP context using a simple unmanaged RAP BO. Here, a create operation with an ABAP EML MODIFY ENTITY statement takes up user input - numbers and an operand - on whose basis a calculation is done.

Data model

The CDS data model only consists of the root entity DEMO\_UNMANAGED\_CALC.

@AccessControl.authorizationCheck: #NOT\_REQUIRED
define root view entity DEMO\_UNMANAGED\_CALC  
as select from demo\_tab\_calc {
  key equals,
  key operand,
  number1,
  number2,  
  calc\_result
}

Behavior definition

The [CDS behavior definition](javascript:call_link\('abencds_behavior_definition_glosry.htm'\) "Glossary Entry") DEMO\_UNMANAGED\_CALC is defined in [CDS BDL](javascript:call_link\('abencds_bdl_glosry.htm'\) "Glossary Entry") as follows:

unmanaged implementation in class bp\_demo\_unmanaged\_calc unique;
strict;
define behavior for DEMO\_UNMANAGED\_CALC
lock master
authorization master ( instance )
{
  create;
  update;
  delete;
  field ( features : instance ) number1, number2, operand;
}

Behavior implementation

For the above CDS behavior definition, one [ABP](javascript:call_link\('abenbehavior_pool_glosry.htm'\) "Glossary Entry") is created. The global class of the behavior pool is BP\_DEMO\_UNMANAGED\_CALC. The actual behavior implementation takes place in local classes that are defined and implemented in the CCIMP include of the behavior pool.

The class lcl\_var contains the specification of the transactional buffer. The transactional buffer in this example is an internal table buffer\_tab that is typed with a [BDEF derived type](javascript:call_link\('abenrap_derived_type_glosry.htm'\) "Glossary Entry"). Furthermore, the structure request is defined for the GET PERMISSIONS statement that is used in the create method.

The following methods are relevant for this example:

-   create
    
    As an initial step, the transactional buffer (i. e. the internal table buffer\_tab) is filled with the entries provided via the input screen. A GET PERMISSIONS statement follows as a next step that retrieves information whether the calculation is allowed or not. As a prerequisite, %field elements are marked in the request structure to specify that the particular elements should be considered for the permission retrieval. During the execution of the GET PERMISSIONS statement, the get\_instance\_features method is called. After this method call, the calculation is executed or not depending on the result of the GET PERMISSIONS statement. If the calculation is allowed, the field calc\_result receives the result of the calculation according to the numbers and operand provided. Possible short dumps are caught. If the calculation is not allowed and error messages exist (the error messages are created in the course of the get\_instance\_features method call), the reported parameter receives those messages.
    
-   read
    
    The read method reads the entries that are input. It is used in the get\_instance\_features method.
    
-   get\_instance\_features
    
    First, the entries that are input are read. As a next step, the permissions for the calculation are retrieved and stored in result. The calculation is allowed if none of the following conditions are met: the value provided in the number1 field must be filled and contain only numbers, the same is true for the value provided in the number2; additionally, the number2 field must not contain 0 if the operand is / (division by zero); the operand must only be +, \-, \*, / or P. After filling result, error messages are added to the reported if there are errors.
    
-   save
    
    The save method takes care of saving the entries in the transactional buffer to the database table.
    

Source Code

REPORT demo\_rap\_eml\_u\_calculator.
CLASS demo DEFINITION.
  PUBLIC SECTION.
    CLASS-METHODS:
      class\_constructor,
      main.
  PRIVATE SECTION.
    CLASS-DATA:
      out      TYPE REF TO if\_demo\_output,
      reported TYPE RESPONSE FOR REPORTED demo\_unmanaged\_calc,
      number1  TYPE c LENGTH 7,
      number2  TYPE c LENGTH 7,
      operand  TYPE c LENGTH 1.
    CLASS-METHODS:
      initialize\_dbtabs.
ENDCLASS.
CLASS demo IMPLEMENTATION.
  METHOD main.
  cl\_demo\_input=>add\_text( \`RAP Calculator with an unmanaged RAP BO\` ).
  cl\_demo\_input=>add\_text( \`Please enter numbers and an operand \` &&
    \`(+ - \* P) for the calculation:\` ).
  cl\_demo\_input=>add\_field( CHANGING field = number1 ).
  cl\_demo\_input=>add\_line( ).
  cl\_demo\_input=>add\_field( CHANGING field = operand ).
  cl\_demo\_input=>add\_line( ).
  cl\_demo\_input=>add\_field( CHANGING field = number2 ).
  cl\_demo\_input=>request( ).
  out->begin\_section( \`RAP Calculator with an unmanaged RAP BO\` ).
  MODIFY ENTITY demo\_unmanaged\_calc
   CREATE SET FIELDS WITH VALUE #(
    ( %cid = 'calculation'
      number1 =  number1
      number2 = number2
      operand = operand
      equals = '=' ) )
    REPORTED DATA(reported).
  IF reported-demo\_unmanaged\_calc IS NOT INITIAL.
    out->write\_html( '<b>The calculation cannot be executed:</b>' ).
      LOOP AT reported-demo\_unmanaged\_calc
         ASSIGNING FIELD-SYMBOL(<reported>).
        out->write( <reported>-%msg->if\_message~get\_text( ) ).
      ENDLOOP.
  ENDIF.
  COMMIT ENTITIES.
  SELECT number1, operand, number2, equals, calc\_result
   FROM demo\_tab\_calc INTO TABLE @DATA(calculation).
  IF calculation IS NOT INITIAL.
    calculation\[ 1 \]-number1 = CONV i( calculation\[ 1 \]-number1 ).
    calculation\[ 1 \]-number2 = CONV i( calculation\[ 1 \]-number2 ).
      out->write\_html(
             '<b>Calculation result</b>'
            )->write( calculation ).
  ENDIF.
  out->display( ).  ENDMETHOD.
  METHOD class\_constructor.
    out = cl\_demo\_output=>new( ).
    initialize\_dbtabs( ).
  ENDMETHOD.
  METHOD initialize\_dbtabs.
    DELETE FROM demo\_tab\_calc.
  ENDMETHOD.
ENDCLASS.
START-OF-SELECTION.
  demo=>main( ).

Description

Access with ABAP using EML

The above source code uses [EML](javascript:call_link\('abeneml_glosry.htm'\) "Glossary Entry") to access the RAP business object from an ABAP program.

Note: The whole scenario is implemented in a way that the database table only contains one line comprised of the user input (numbers and operand), the equal sign and the calculation result. The focus is on implementing RAP methods and their interaction in a simplified unmanaged RAP context.

The program uses the class CL\_DEMO\_INPUT for user input. This user input is taken up to create an instance with a MODIFY ENTITY statement.

The CREATE keyword as part of the MODIFY ENTITY statement triggers calling the create method in the behavior pool. As outlined in section Behavior implementation, the create method takes care of the calculation if the calculation is allowed (see the get\_instance\_features method that is triggered by the GET PERMISSIONS statement contained in the create method). If the calculation is not allowed, for example, if characters are provided as input or a division by zero is carried out, error messages are inserted in the reported parameter. If there are error messages and the calculation fails, the error messages are displayed in the output screen.

The COMMIT ENTITIES statement triggers the saving of the entries to the database table. If the calculation can be executed successfully, the result of the calculation is displayed including the user input and the equal sign in the output screen.
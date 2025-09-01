  

* * *

AS ABAP Release 756, ©Copyright 2021 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP - Programming Language](javascript:call_link\('abenabap_reference.htm'\)) →  [Calling and exiting program units](javascript:call_link\('abenabap_execution.htm'\)) →  [Calling Processing Blocks](javascript:call_link\('abencall_processing_blocks.htm'\)) →  [Calling Procedures](javascript:call_link\('abencall_procedures.htm'\)) →  [Method Calls](javascript:call_link\('abenmethod_calls.htm'\)) →  [Dynamic Method Call](javascript:call_link\('abenmethod_calls_dynamic.htm'\)) →  [CALL METHOD](javascript:call_link\('abapcall_method_dynamic.htm'\)) → 

CALL METHOD, parameter\_tables

[Short Reference](javascript:call_link\('abapcall_method_shortref.htm'\))

Syntax

... *\[*PARAMETER-TABLE ptab*\]*
    *\[*EXCEPTION-TABLE etab*\]*.

Additions:

[1\. ... PARAMETER-TABLE ptab](#!ABAP_ADDITION_1@1@)
[2\. ... EXCEPTION-TABLE etab](#!ABAP_ADDITION_2@2@)

Effect

In [dynamic method calls](javascript:call_link\('abapcall_method_dynamic.htm'\)), these additions assign actual parameters and exceptions to the formal parameters and non-class-based exceptions using the special internal tables ptab and etab.

Addition 1   

... PARAMETER-TABLE ptab

Effect

PARAMETER-TABLE can be used to assign actual parameters to all formal parameters of a dynamically called method. ptab expects a [hashed table](javascript:call_link\('abenhashed_table_glosry.htm'\) "Glossary Entry") of table type abap\_parmbind\_tab or line type abap\_parmbind from the [type pool](javascript:call_link\('abentype_pool_glosry.htm'\) "Glossary Entry") ABAP. When the statement CALL METHOD is executed, the table must contain exactly one line for each non-optional formal parameter. This line is optional for each optional formal parameter. The table columns are:

-   NAME of type c and length 30
    
    For the name of the relevant formal parameter in uppercase letters. If a nonexistent formal parameter is specified, a catchable exception is raised.
    
-   KIND of type c of length 1.
    
    For the type of the formal parameter. This column is used to verify the interface. The type of the formal parameter is determined in the declaration of the called method. If KIND is initial, no check is performed. If KIND contains the value of a constant EXPORTING, IMPORTING, CHANGING, or RECEIVING of the class CL\_ABAP\_OBJECTDESCR, the system checks (from the perspective of the caller) whether the formal parameter specified in NAME is an input, output, input/output parameter, or a return value, and raises the catchable exception CX\_SY\_DYN\_CALL\_ILLEGAL\_TYPE if an error occurs.
    
-   VALUE of the type REF TO data
    
    For a pointer to an appropriate actual parameter. The data object to which the reference variable in VALUE points is assigned to the formal parameter specified in NAME.
    

The column NAME is the unique key of the table ptab.

Addition 2   

... EXCEPTION-TABLE etab

Effect

EXCEPTION-TABLE can be used to assign return values to all [non-class-based exceptions](javascript:call_link\('abenexceptions_non_class.htm'\)) of a dynamically called method. etab expects a [hashed table](javascript:call_link\('abenhashed_table_glosry.htm'\) "Glossary Entry") of table type abap\_excpbind\_tab or of line type abap\_excpbind from the [type pool](javascript:call_link\('abentype_pool_glosry.htm'\) "Glossary Entry") ABAP. When the statement CALL METHOD is executed, this table can contain exactly one line for every non-class-based exception of the method. The table columns are:

-   NAME of type c and length 30
    
    For the name of the respective exception or [OTHERS](javascript:call_link\('abapcall_method_parameters.htm'\)) in uppercase letters.
    
-   VALUE of type i
    
    For the numeric value that is to be available in sy-subrc after the exception specified in NAME is raised.
    

The column NAME is the unique key of table etab.

Example

Dynamic method call with parameter and exception table.

CLASS cls DEFINITION.
  PUBLIC SECTION.
    CLASS-METHODS meth IMPORTING  p TYPE string
                       EXCEPTIONS e.
ENDCLASS.
CLASS cls IMPLEMENTATION.
  METHOD meth.
    cl\_demo\_output=>write( p ).
    RAISE e.
  ENDMETHOD.
ENDCLASS.
START-OF-SELECTION.
  DATA(class) = \`CLS\`.
  DATA(meth) = \`METH\`.
  DATA(ptab) = VALUE abap\_parmbind\_tab(
    ( name  = 'P'
      kind  = cl\_abap\_objectdescr=>exporting
      value = REF #( \`Hello method!\` ) ) ).
  DATA(etab) = VALUE abap\_excpbind\_tab(
    ( name = 'E' value = 4 ) ).
  CALL METHOD (class)=>(meth)
    PARAMETER-TABLE ptab
    EXCEPTION-TABLE etab.
  IF sy-subrc <> 0.
    cl\_demo\_output=>display( \`Exception caught ...\` ).
  ENDIF.
  

* * *

SAP NetWeaver AS ABAP Release 752, ©Copyright 2017 SAP AG. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenabap.htm) →  [ABAP - Reference](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenabap_reference.htm) →  [Calling and leaving program units](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenabap_execution.htm) →  [Calling Processing Blocks](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abencall_processing_blocks.htm) →  [Calling Procedures](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abencall_procedures.htm) →  [Method Calls](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenmethod_calls.htm) →  [Dynamic Method Call](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenmethod_calls_dynamic.htm) → 

CALL METHOD

[Quick Reference](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abapcall_method_shortref.htm)

Syntax

CALL METHOD [dynamic\_meth](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abapcall_method_meth_ident_dyna.htm) *{* [parameter\_list](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abapcall_method_parameters.htm)
                         *|* [parameter\_tables](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abapcall_method_parameter_tables.htm) *}*.

Effect

This statement calls the method dynamically specified in [dynamic\_meth](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abapcall_method_meth_ident_dyna.htm)(Dynamic Invoke). Actual parameters are assigned to formal parameters of the method, either statically using [parameter\_list](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abapcall_method_parameters.htm) or dynamically using [parameter\_tables](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abapcall_method_parameter_tables.htm). The syntax of parameter\_list is the same as that in the explicit parameter specification for the [static method call](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abapcall_method_static_short.htm).

Notes

-   In the dynamic method call, the parameters are not passed in parentheses. The syntax of the dynamic method call is like that of a [function module call](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abapcall_function_general.htm).
    
-   The CALL\_METHOD statement should now only be used for the dynamic method call. It is unnecessary, and therefore [obsolete](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abapcall_method_static.htm), for the [static method call](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenmethod_calls_static.htm).
    

Security Note

If the name of a program unit is specified dynamically when it is called, and this name is passed to a program from outside, the result is a serious security risk. Any names passed to a program from outside must be checked thoroughly before being used in calls. The system class CL\_ABAP\_DYN\_PRG, for example, can be used to do this. See [Dynamic Calls](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abendyn_call_scrty.htm).

System Fields

The system field sy-subrc is set to 0 when a method is called. If a [non-class-based exception](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenexceptions_non_class.htm) is raised that was handled by the assignment of a value, sy-subrc is set to this value.

Example

Dynamic call of the static method GUI\_DOWNLOAD of global class [CL\_GUI\_FRONTEND\_SERVICES](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenfrontend_services.htm) for storing the content of an internal table in a file on the current [presentation server](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenpresentation_server_glosry.htm "Glossary Entry"). The names of the class and method are specified in the strings class and meth. The interface parameters are passed in the internal table ptab and return values are assigned to the exceptions of the method are assigned using table etab. Exceptions that occur at the method call itself are handled in a [TRY](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abaptry.htm) control structure with statement [CATCH](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abaptry.htm).

DATA: line     TYPE c LENGTH 80,
      text\_tab LIKE STANDARD TABLE OF line,
      filename TYPE string,
      filetype TYPE c LENGTH 10,
      fleng    TYPE i.
DATA: meth  TYPE string,
      class TYPE string,
      ptab TYPE abap\_parmbind\_tab,
      etab TYPE abap\_excpbind\_tab.
DATA: exc\_ref TYPE REF TO cx\_sy\_dyn\_call\_error.
class    = 'CL\_GUI\_FRONTEND\_SERVICES'.
meth     = 'GUI\_DOWNLOAD'.
filename = 'c:\\temp\\text.txt'.
filetype = 'ASC'.
ptab = VALUE #( ( name  = 'FILENAME'
                  kind  = cl\_abap\_objectdescr=>exporting
                  value = REF #( filename ) )
                ( name  = 'FILETYPE'
                  kind  = cl\_abap\_objectdescr=>exporting
                  value = REF #( filetype ) )
                ( name  = 'DATA\_TAB'
                  kind  = cl\_abap\_objectdescr=>changing
                  value = REF #( text\_tab ) )
                ( name  = 'FILELENGTH'
                  kind  = cl\_abap\_objectdescr=>importing
                  value = REF #( fleng ) ) ).
etab = VALUE #( ( name = 'OTHERS' value = 4 ) ).
TRY.
    CALL METHOD (class)=>(meth)
      PARAMETER-TABLE
        ptab
      EXCEPTION-TABLE
        etab.
    CASE sy-subrc.
      WHEN 1.
        ...
      ...
    ENDCASE.
  CATCH cx\_sy\_dyn\_call\_error INTO exc\_ref.
    MESSAGE exc\_ref->get\_text( ) TYPE 'I'.
ENDTRY.

[Exceptions](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenabap_language_exceptions.htm)

Handleable Exceptions

CX\_SY\_NO\_HANDLER

-   See [Class-Based Exceptions in Procedures](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenexceptions_procedures.htm).
    Runtime error: UNCAUGHT\_EXCEPTION
    

CX\_SY\_DYN\_CALL\_EXCP\_NOT\_FOUND

-   Cause: Exception does not exist
    Runtime error: DYN\_CALL\_METH\_EXCP\_NOT\_FOUND
    

CX\_SY\_DYN\_CALL\_ILLEGAL\_CLASS

-   Cause: Specified class does not exist
    Runtime error: DYN\_CALL\_METH\_CLASS\_NOT\_FOUND
    

CX\_SY\_DYN\_CALL\_ILLEGAL\_METHOD

-   Cause: Method cannot be accessed.
    Runtime error: CALL\_METHOD\_NOT\_ACCESSIBLE
    
-   Cause: The called method is not implemented.
    Runtime error: CALL\_METHOD\_NOT\_IMPLEMENTED
    
-   Cause: Calls the static constructor
    Runtime error: DYN\_CALL\_METH\_CLASSCONSTRUCTOR
    
-   Cause: Calls the instance constructor
    Runtime error: DYN\_CALL\_METH\_CONSTRUCTOR
    
-   Cause: Method does not exist
    Runtime error: DYN\_CALL\_METH\_NOT\_FOUND
    
-   Cause: Method is not static
    Runtime error: DYN\_CALL\_METH\_NO\_CLASS\_METHOD
    
-   Cause: Calls a non-visible method
    Runtime error: DYN\_CALL\_METH\_PRIVATE
    
-   Cause: Calls a non-visible method
    Runtime error: DYN\_CALL\_METH\_PROTECTED
    

CX\_SY\_DYN\_CALL\_ILLEGAL\_TYPE

-   Cause: Type conflict during method call.
    Runtime error: CALL\_METHOD\_CONFLICT\_GEN\_TYPE
    
-   Cause: Type conflict during method call.
    Runtime error: CALL\_METHOD\_CONFLICT\_TAB\_TYPE
    
-   Cause: Type conflict during method call.
    Runtime error: CALL\_METHOD\_CONFLICT\_TYPE
    
-   Cause: Incorrect parameter type
    Runtime error: DYN\_CALL\_METH\_PARAM\_KIND
    
-   Cause: Actual parameter cannot be filled
    Runtime error: DYN\_CALL\_METH\_PARAM\_LITL\_MOVE
    
-   Cause: Incorrect table type for a parameter
    Runtime error: DYN\_CALL\_METH\_PARAM\_TAB\_TYPE
    
-   Cause: Incorrect parameter type
    Runtime error: DYN\_CALL\_METH\_PARAM\_TYPE
    

CX\_SY\_DYN\_CALL\_PARAM\_MISSING

-   Cause: Missing actual parameter
    Runtime error: DYN\_CALL\_METH\_PARAM\_MISSING
    
-   Cause: Parameter reference is empty
    Runtime error: DYN\_CALL\_METH\_PARREF\_INITIAL
    

CX\_SY\_DYN\_CALL\_PARAM\_NOT\_FOUND

-   Cause: Incorrect parameter name
    Runtime error: DYN\_CALL\_METH\_PARAM\_NOT\_FOUND
    

CX\_SY\_REF\_IS\_INITIAL

-   Cause: Reference variable is initial
    Runtime error: DYN\_CALL\_METH\_REF\_IS\_INITIAL
    

Non-Handleable Exceptions

-   Cause: Invalid parameters for dynamic method call. Relevant for instance constructors when instantiated dynamically.
    Runtime error: CALL\_METHOD\_PARMS\_ILLEGAL
    

Continue
[CALL METHOD - dynamic\_meth](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abapcall_method_meth_ident_dyna.htm)
[CALL METHOD - parameter\_tables](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abapcall_method_parameter_tables.htm)
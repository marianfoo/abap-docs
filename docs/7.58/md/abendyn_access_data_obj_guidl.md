  

* * *

AS ABAP Release 758, ©Copyright 2024 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP - Programming Guidelines](javascript:call_link\('abenabap_pgl.htm'\)) →  [Robust ABAP](javascript:call_link\('abenrobust_abap_gdl.htm'\)) →  [Dynamic Programming Techniques](javascript:call_link\('abendynamic_prog_technique_gdl.htm'\)) → 

 [![](Mail.gif?object=Mail.gif "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback%20on%20ABAP%20Documentation&body=Document:%20Accessing%20Data%20Objects%20Dynamically%2C%20ABENDYN_ACCESS_DATA_OBJ_GUIDL%2C%20758%0D%0A%0D%0AError:%0D%0A%0D%0A%0D%0A%0D%0ASuggestion%20for%20improvement:
)

Accessing Data Objects Dynamically

Background   

Field symbols and data references are used to access data objects whose name and attributes are not known until runtime.

-   Field symbols
    
    A field symbol is a symbolic name for a data object declared with FIELD-SYMBOLS, to which memory areas can be assigned using the ASSIGN statement or, if internal tables are processed, using the ASSIGNING addition. Field symbols are typed either generically or completely and can be used like a data object in all appropriate operand positions. For typing, the same rules apply as for [formal parameters of procedures](javascript:call_link\('abentype_formal_param_guidl.htm'\) "Guideline"). When accessing field symbols, value semantics applies, which means that the assigned memory content is addressed directly. Field symbols are thus always handled like dereferenced pointers.
    
-   Data references
    
    A data reference is the content of a data reference variable that is declared using REF TO and points to any data objects or parts of data objects. Data references are needed to create anonymous data objects using CREATE DATA or [NEW](javascript:call_link\('abenconstructor_expression_new.htm'\)). They can also be generated for existing data objects, however, using the statement GET REFERENCE, the reference operator [REF](javascript:call_link\('abenconstructor_expression_ref.htm'\)), or, if internal tables are processed, using the REFERENCE INTO addition. A data reference variable is either completely generic or completely typed. When accessing data reference variables, reference semantics applies, which means that the data reference itself is addressed. To access the referenced memory content, a data reference variable must be dereferenced explicitly using the dereferencing operator (->\*).
    

Data reference variables can be [declared](javascript:call_link\('abendeclaration_variables_guidl.htm'\) "Guideline") in the same context as all other data objects, especially also as attributes of classes. Field symbols, in contrast, can only be declared within procedures ([methods](javascript:call_link\('abenfunct_module_subroutine_guidl.htm'\) "Guideline")) or in the global declaration part. However, the latter is [no longer allowed](javascript:call_link\('abendeclaration_variables_guidl.htm'\) "Guideline").

Rule   

Use field symbols and data references in appropriate ways

Use field symbols and data references for the purpose that best matches their semantics:

-   Field symbols for value access (value semantics)
-   Data references for working with the references (reference semantics)

Details   

Both field symbols and data references can be understood as pointers to memory areas. The main difference is in the different access semantics.

-   Due to their value semantics, field symbols should always be used if the focus is on the access to referenced data.
-   Due to their reference semantics, data references are to be used if the focus is on the explicit handling of references to data objects. Data references are vital for creating anonymous data objects or complex dynamic data structures, such as trees or chained lists in the [internal session](javascript:call_link\('abeninternal_session_glosry.htm'\) "Glossary Entry") or in the shared objects memory. Furthermore, data references are the preferred element for implementing explicit sharing between any data objects, and for passing pointers to data objects to procedures.

Note

Actually, data reference variables can be better used in programs that are based on [ABAP Objects](javascript:call_link\('abenabap_obj_progr_model_guidl.htm'\) "Guideline") because they have the same semantics as object reference variables and therefore represent a more [modern](javascript:call_link\('abenmodern_abap_guidl.htm'\) "Guideline") programming concept.
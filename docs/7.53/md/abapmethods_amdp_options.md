  

* * *

AS ABAP Release 753, ©Copyright 2019 SAP AG. All rights reserved.

[ABAP Keyword Documentation](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenabap.htm) →  [ABAP − Reference](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenabap_reference.htm) →  [Processing External Data](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenabap_language_external_data.htm) →  [ABAP Database Access](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenabap_sql.htm) →  [AMDP - ABAP Managed Database Procedures](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenamdp.htm) →  [AMDP - Methods](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenamdp_methods.htm) → 

\[CLASS-\]METHODS - AMDP OPTIONS

[Quick Reference](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abapmethods_shortref.htm)

Syntax

\[CLASS-\]METHODS meth ... AMDP OPTIONS *\[*READ-ONLY*\]*
                                      *\[*CDS SESSION CLIENT clnt*|*CURRENT*\]* ...

Extras:

[1\. ... READ-ONLY](#!ABAP_ADDITION_1@1@)
[2\. ... CDS SESSION CLIENT clnt*|*CURRENT](#!ABAP_ADDITION_2@2@)

Effect

The addition AMDP OPTIONS for [METHODS](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abapmethods.htm) and [CLASS-METHODS](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abapclass-methods.htm) statements can be used to declare attributes of [AMDP methods](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenamdp_methods.htm) of global classes or interfaces. After AMDP OPTIONS, at least one attribute must be specified.

If the addition AMDP OPTIONS is used in the declaration of a method, but the method is implemented as a normal ABAP method without the addition [BY DATABASE PROCEDURE|FUNCTION](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abapmethod_by_db_proc.htm), the attributes specified byAMDP OPTIONS are ignored. However, the following restrictions for AMDP methods apply to the method declaration:

-   If there is no RETURNING parameter, the restrictions for [AMDP procedure implementations](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenamdp_procedure_methods.htm) apply.
    
-   If there is a RETURNING parameter, the restrictions described for [AMDP function implementations](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenamdp_function_methods.htm) also apply.
    

A prerequisite for using this addition is that the global class or the interface must contain a [tag interface](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abentag_interface_glosry.htm "Glossary Entry") [IF\_AMDP\_MARKER\_...](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenamdp_classes.htm) for [AMDP classes](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenamdp_class_glosry.htm "Glossary Entry"). AMDP OPTIONS cannot be used in local classes, for the [constructors](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenconstructor_glosry.htm "Glossary Entry") [constructor](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abapmethods_constructor.htm) or [class\_constructor](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abapclass-methods_constructor.htm), for [event handlers](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenevent_handler_glosry.htm "Glossary Entry") declared with [FOR EVENT](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abapmethods_event_handler.htm), for [redefinitions](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenredefinition_glosry.htm "Glossary Entry") declared with [REDEFINITION](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abapmethods_redefinition.htm), or for [AMDP function implementations](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenamdp_function_method_glosry.htm "Glossary Entry") for [CDS table functions](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abencds_table_function_glosry.htm "Glossary Entry") declared with [FOR TABLE FUNCTION](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abapclass-methods_for_tabfunc.htm).

Addition 1

... READ-ONLY

Effect

If the option READ-ONLY is specified, only reads of database tables are allowed in the [implementation](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abapmethod_by_db_proc.htm) of the [database procedure](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abendatabase_procedure_glosry.htm "Glossary Entry") or [database function](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abendatabase_function_glosry.htm "Glossary Entry"). Only database procedures or database functions of other AMDP methods that are also marked as READ-ONLY can be called. This is checked by the syntax check or at runtime.

This attribute can also be specified using the addition OPTIONS in the implementation of an AMDP method with [METHOD meth BY DATABASE PROCEDURE|FUNCTION](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abapmethod_by_db_proc.htm). It applies when specified either in the declaration or in the implementation of the method, or both.

The option READ-ONLY must be specified at least once in the implementation of an [AMDP](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenamdp_function_glosry.htm "Glossary Entry") function or an [L procedure](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenamdp_hdb_l_internal.htm). If the addition AMDP OPTIONS is used in the declaration of a method with a RETURNING parameter, the option READ-ONLY must already be specified in the declaration.

Addition 2

... CDS SESSION CLIENT clnt*|*CURRENT

Effect

If the option CDS SESSION CLIENT is used, the [session variable](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abensession_variable_glosry.htm "Glossary Entry") of the database that can be addressed in the CDS DDL of the [ABAP CDS](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abencds_ddl_glosry.htm "Glossary Entry") under the name [$session.client](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abencds_f1_session_variable.htm) is supplied with a value when the AMDP method is called from ABAP. In the [SAP HANA database](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenhana_database_glosry.htm "Glossary Entry") this is the ABAP-specific session variable [CDS\_CLIENT](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenhana_session_variables.htm). The value is determined as follows:

-   The name of an input parameter of the current method can be specified for clnt. Its type must be compatible with the built in type [CLNT](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenddic_builtin_types.htm) in ABAP Dictionary. The session variable is set to the value passed to this parameter during the call, or to the value of the replacement parameter declared with [DEFAULT](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abapmethods_parameters.htm).
    
-   If CURRENT is specified, the session variable is set to its default value, that is, to the nominal value of the ABAP system field [sy-mandt](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abensystem_fields.htm) or the [client](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenclient_glosry.htm "Glossary Entry") of the current [logon](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenlogon_glosry.htm "Glossary Entry"). In this case there can be no input parameters with the name current.
    

The session variable is only set when the AMDP method is called from ABAP. If the associated database procedure or function is called from another AMDP method or from a database procedure or function that is not managed by AMDP, the session variable is not affected.

If the database procedure or function of an AMDP method that is declared with the option CDS SESSION CLIENT is called from an AMDP procedure or function implementation or during a [SELECT](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abapselect.htm) statement, the following rules apply:

-   AMDP method as call target
    

-   The implementation of an AMDP method that is declared with the addition CURRENT can only be called in implementations of methods with the addition CURRENT, and not during the execution of a [SELECT](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abapselect.htm) statement with the addition [USING CLIENT](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abapselect_client.htm).

-   The implementation of an AMDP method declared with clnt can only be called in implementations of methods where the addition CURRENT or clnt is specified, and during the execution of a [SELECT](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abapselect.htm) statement with the addition [USING CLIENT](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abapselect_client.htm).

-   The implementation of an AMDP method that is declared without any additions can be called from any implementations and during the execution of any [SELECT](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abapselect.htm) statements.

-   AMDP method as caller
    

-   The implementation of an AMDP method that is declared with the addition CURRENT can call any implementations.

-   The implementation of an AMDP method declared with clnt cannot call any implementations of methods where CURRENT is specified.

-   The implementation of an AMDP method that is declared without any additions can only call other implementations without additions.

A call can occur during a [SELECT](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abapselect.htm) statement if it directly or indirectly accesses a [CDS table function](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abencds_table_function_glosry.htm "Glossary Entry"), because this is implemented as an [AMDP table function](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenamdp_table_function_glosry.htm "Glossary Entry").

If an AMDP method accesses the [CDS database view](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abencds_database_view_glosry.htm "Glossary Entry") of a [CDS view](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abencds_view_glosry.htm "Glossary Entry") whose [client handling](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abencds_client_handling.htm) is defined by the annotation [@ClientHandling.algorithm: #SESSION\_VARIABLE](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abencds_client_handling.htm), it must be declared with the option CDS SESSION CLIENT. If not, a syntax error occurs.

Notes

-   The option CDS SESSION CLIENT is mainly required if an AMDP method accesses the [CDS database view](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abencds_database_view_glosry.htm "Glossary Entry") of a [CDS view](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abencds_view_glosry.htm "Glossary Entry") whose [client handling](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abencds_client_handling.htm) is determined by the annotation [@ClientHandling.algorithm: #SESSION\_VARIABLE](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abencds_client_handling.htm). In database views like this, the session variable associated with [$session.client](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abencds_f1_session_variable.htm) is usually evaluated in comparisons with a client column. If the option CDS SESSION CLIENT is not used when calling AMDP methods (or the addition [USING CLIENT](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abapselect_client.htm) in ABAP SQL), the default value for the session variable would be the nominal value of the ABAP system field [sy-mandt](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abensystem_fields.htm). If the session variable is set when an AMDP method is called, the [CDS database views](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abencds_database_view_glosry.htm "Glossary Entry") that are used select the data of the required [client](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenclient_glosry.htm "Glossary Entry"). If, in the implementation of the AMDP method, the client ID that is selected when the CDS database view is accessed does not match the value of the session variable, the results set is empty.
    
-   If CDS SESSION CLIENT is used for an AMDP method, the AMDP framework sets the session variable belonging to [$session.client](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abencds_f1_session_variable.htm) exactly once when this method is called from ABAP. The following recommendations apply:
    

-   The value of the input parameter marked with clnt should be treated as a constant and should not be changed when executing the implementation, so that it always matches the value of the session variable. When calling other implementations of AMDP methods that are declared with CDS SESSION CLIENT, only the client ID that matches the value of the session variable should be passed.

-   The value of the session variable should not be overwritten using database methods.

Whether the input parameter is used explicitly in self-programmed conditions or implicitly in CDS database views, this ensures that the data of the same [client](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenclient_glosry.htm "Glossary Entry") is accessed.

-   The rules governing how AMDP methods declared with the option CDS SESSION CLIENT call each other support the previous point:
    

-   In a call chain that leads to a method with the addition CURRENT, the session variable that belongs to [$session.client](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abencds_f1_session_variable.htm) can only have the nominal value of the ABAP system field [sy-mandt](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abensystem_fields.htm).

-   In a call chain that leads to a method that specifies clnt, the session variable that belongs to [$session.client](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abencds_f1_session_variable.htm) can have a value defined explicitly by clnt.

-   In AMDP methods that do not access a [CDS database view](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abencds_database_view_glosry.htm "Glossary Entry") of a [CDS view](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abencds_view_glosry.htm "Glossary Entry") whose [client handling](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abencds_client_handling.htm) is defined by the annotation [@ClientHandling.algorithm: #SESSION\_VARIABLE](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abencds_client_handling.htm), the option CDS SESSION CLIENT can be used to set [$session.client](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abencds_f1_session_variable.htm) to a particular value, but this is generally not necessary. Instead of accessing the session variables for the client ID in the implementation, these should be passed to an input parameter and this should then be used (see the [executable example](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenamdp_abexa.htm)).

Example

The following implementation of an AMDP method accesses the [CDS database view](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abencds_database_view_glosry.htm "Glossary Entry") DEMO\_CDS\_PRJCT0A of a client-specific CDS view:

METHOD get\_spfli\_view BY DATABASE PROCEDURE FOR HDB
                      LANGUAGE SQLSCRIPT
                      USING demo\_cds\_prjct0a.
  connections  = select \*
                        from DEMO\_CDS\_PRJCT0A;
ENDMETHOD.

The [DDL source code](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenddl_source_code_glosry.htm "Glossary Entry") used to define the actual [CDS entity](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abencds_entity_glosry.htm "Glossary Entry") DEMO\_CDS\_SPFLI\_CLIENT\_0A is as follows:

@AbapCatalog.sqlViewName: 'DEMO\_CDS\_PRJCT0A'
@AccessControl.authorizationCheck: #NOT\_ALLOWED
@ClientHandling.type: #CLIENT\_DEPENDENT
@ClientHandling.algorithm: #SESSION\_VARIABLE
define view demo\_cds\_spfli\_client\_0a
  as select from
    spfli
    {
      key spfli.carrid,
      key spfli.connid,
          spfli.cityfrom,
          spfli.cityto
    }

The client handling is defined using the annotation @ClientHandling.algorithm: #SESSION\_VARIABLE. For this reason, the version of the view in the database contains the following WHERE condition (in this case for the SAP HANA database):

WHERE ( "SPFLI"."MANDT" = SESSION\_CONTEXT( 'CDS\_CLIENT') )

This WHERE condition applies each time the view is accessed. If the SELECT statement in the above AMDP method had its own WHERE condition for the client column MANDT and this selected a client other than the session variable CDS\_CLIENT, the results set would be empty. For this reason, accessing such a CDS database view in an AMDP method causes the syntax check to issue a warning by default. This warning can be bypassed by using the addition AMDP OPTIONS CDS SESSION CLIENT when declaring the method in the class CL\_DEMO\_AMDP\_SESSION\_CLIENT:

CLASS cl\_demo\_amdp\_session\_client DEFINITION
  PUBLIC
  FINAL
  CREATE PUBLIC.
  PUBLIC SECTION.
    INTERFACES if\_amdp\_marker\_hdb .
    TYPES t\_connections TYPE STANDARD TABLE OF demo\_cds\_prjct0a
                        WITH EMPTY KEY.
    METHODS get\_spfli\_view
      AMDP OPTIONS READ-ONLY
                   CDS SESSION CLIENT clnt
      IMPORTING VALUE(clnt)        TYPE sy-mandt
      EXPORTING VALUE(connections) TYPE t\_connections
      RAISING   cx\_amdp\_error.

When the method is called from ABAP, the session variable CDS\_CLIENT is set to the value passed to the input parameter clnt. The program DEMO\_AMDP\_SESSION\_CLIENT calls the AMDP method and it is possible to enter different values for the client ID. The data of the client in question is selected.
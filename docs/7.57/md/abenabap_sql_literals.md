  

* * *

AS ABAP Release 757, ©Copyright 2023 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenabap.htm) →  [ABAP - Programming Language](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenabap_reference.htm) →  [Processing External Data](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenabap_language_external_data.htm) →  [ABAP Database Access](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abendb_access.htm) →  [ABAP SQL](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenabap_sql.htm) →  [ABAP SQL - Operands and Expressions](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenabap_sql_operands.htm) →  [ABAP SQL - SQL Operands sql\_elem](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abensql_operands.htm) → 

 [![](Mail.gif?object=Mail.gif&sap-language=EN "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback on ABAP Documentation&body=Document: ABAP SQL - literal, ABENABAP_SQL_LITERALS, 757%0D%0A%0D%0AError:%0D%0A%0D%0A%0D%0A%0D
%0ASuggestion for improvement:)

ABAP SQL - literal

[ABAP literals](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenliteral.htm) can be used in read positions of ABAP SQL statements where [host variables](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenabap_sql_host_variables.htm) are possible. Unlike host variables, they are not prefixed with the escape character @. The [literal operator](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenliteral_operator_glosry.htm "Glossary Entry") can be used to combine two literals of the same type into a single literal.

In ABAP SQL, there are two different kinds of literals:

-   [Typed literals](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenabap_sql_typed_literals.htm) (cover most built-in types of the ABAP Dictionary)
    
    Typed literals are always handled like elementary SQL expressions
    
-   [Untyped literals](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenabap_sql_untyped_literals.htm) (character literals and numeric literals)
    
    Untyped literals are either handled like elementary SQL expressions or like host variables.
    

Continue
[ABAP SQL - Typed Literals](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenabap_sql_typed_literals.htm)
[ABAP SQL - Untyped Literals](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenabap_sql_untyped_literals.htm)
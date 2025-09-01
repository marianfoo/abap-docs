# ABAP Keyword Documentation / ABAP - Quick Reference

Included pages: 3


### abenstring_exp_shortref.htm

---
title: "Syntax"
description: |
  ...  string_template    operand1 && operand2 &&  operand3 ...   ... Effect String expression for creating a character string Additions -   string_template(https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenstring_templates.htm) String template that represents
version: "7.53"
category: "general"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenstring_exp_shortref.htm"
abapFile: "abenstring_exp_shortref.htm"
keywords: ["do", "abenstring", "exp", "shortref"]
---

* * *

AS ABAP Release 753, ©Copyright 2019 SAP AG. All rights reserved.

[ABAP Keyword Documentation](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenabap.htm) →  [ABAP - Quick Reference](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenabap_shortref.htm) →  S

string\_exp - Quick reference

[Reference](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abapcompute_string.htm)

Syntax

... *{* |string\_template| *}*
  *|* *{* operand1 && operand2 *\[*&&  operand3 ... *\]* *}* ...

Effect

String expression for creating a character string

Additions

-   [string\_template](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenstring_templates.htm)
    String template that represents a character string
    
-   [&&](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenstring_operators.htm)
    String operator for concatenating two character strings


### abensubquery_shortref.htm

---
title: "Syntax"
description: |
  ... ( SELECT  ... FROM ...    FROM ... FIELDS ...  WHERE sql_cond(https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abensql_cond_shortref.htm) GROUP BY ... HAVING sql_cond(https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abensql_cond_shortr
version: "7.53"
category: "general"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abensubquery_shortref.htm"
abapFile: "abensubquery_shortref.htm"
keywords: ["select", "insert", "do", "try", "data", "abensubquery", "shortref"]
---

* * *

AS ABAP Release 753, ©Copyright 2019 SAP AG. All rights reserved.

[ABAP Keyword Documentation](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenabap.htm) →  [ABAP - Quick Reference](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenabap_shortref.htm) →  S

subquery - Quick reference

Syntax

... ( SELECT *{* ...
               FROM ... *}*
           *|* *{* FROM ...
               FIELDS ... *}*
             *\[*WHERE [sql\_cond](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abensql_cond_shortref.htm)*\]*
             *\[*GROUP BY ...*\]* *\[*HAVING [sql\_cond](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abensql_cond_shortref.htm)*\]* ) ...

Effect

Parenthesized SELECT statement that can be used in conditions [sql\_cond](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abensql_cond_shortref.htm) of [ABAP SQL](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenopen_sql_glosry.htm "Glossary Entry") statements, in common table expressions of the statement [WITH](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abapwith_shortref.htm), or as a data source of an [INSERT statement](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abapinsert_dbtab_shortref.htm) for a subquery.

Additions

-   As in the statement [SELECT](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abapselect_shortref.htm).
    
-   The additions SINGLE, ORDER BY, and INTO cannot be used.
    
-   Further additions may also be excluded, depending on how they are used.


### abentyping_shortref.htm

---
title: "Syntax"
description: |
  ...  TYPE generic_type    LIKE  <generic_fs>generic_para    TYPE LINE OF complete_type  REF TO datacomplete_typeclassintf    LIKE LINE OF dobj  REF TO dobj  ... Effect Types field symbols or formal
version: "7.53"
category: "general"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abentyping_shortref.htm"
abapFile: "abentyping_shortref.htm"
keywords: ["do", "class", "data", "types", "internal-table", "field-symbol", "abentyping", "shortref"]
---

* * *

AS ABAP Release 753, ©Copyright 2019 SAP AG. All rights reserved.

[ABAP Keyword Documentation](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenabap.htm) →  [ABAP - Quick Reference](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenabap_shortref.htm) →  T

typing - Quick reference

[Reference](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abentyping_syntax.htm)

Syntax

... *{* TYPE generic\_type *}*
  *|* *{* LIKE  <generic\_fs>*|*generic\_para *}*
  *|* *{* TYPE *{**\[*LINE OF*\]* complete\_type*}*
         *|* *{*REF TO *{*data*|*complete\_type*|*class*|*intf*}**}* *}*
  *|* *{* LIKE *{**\[*LINE OF*\]* dobj*}*
         *|* *{*REF TO dobj*}* *}* ...

Effect

Types field symbols or formal parameters.

Additions

-   TYPE
    Types with reference to a data type.
    
-   LIKE
    Types with reference to a data object, generic field symbol, or formal parameter.
    
-   LINE OF
    Types with reference to the row type of an internal table.
    
-   REF TO
    Types as reference type.

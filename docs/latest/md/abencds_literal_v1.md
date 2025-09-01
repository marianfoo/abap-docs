---
title: "CDS DDL - DDIC-Based View, literal"
description: |
  Syntax ... #:domain.'character_literal'numeric_literal ... Addition: ... #:domain.(#!ABAP_ONE_ADD@1@) Effect Literal in a SELECT statement(https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abencds_select_statement_v1.htm) of a CDS DDIC-based view (obsolete)(htt
version: "latest"
category: "cds"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abencds_literal_v1.htm"
abapFile: "abencds_literal_v1.htm"
keywords: ["select", "do", "if", "case", "try", "data", "types", "abencds", "literal"]
---

* * *

AS ABAP Release 758, ©Copyright 2024 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenabap.htm) →  [ABAP - Core Data Services (ABAP CDS)](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abencds.htm) →  [Obsolete CDS Language Elements](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abencds_obsolete.htm) →  [Obsolete CDS Entities](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abencds_entities_obsolete.htm) →  [ABAP CDS - DDIC-Based Entities (Obsolete)](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abencds_ddic_entity.htm) →  [ABAP CDS - DDIC-Based Views (Obsolete)](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abencds_v1_views.htm) →  [CDS DDL - DEFINE VIEW ddic\_based](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abencds_define_view_v1.htm) →  [CDS DDL - DDIC-Based View, SELECT](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abencds_select_statement_v1.htm) →  [CDS DDL - DDIC-Based View, SELECT, Operands and Expressions](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abencds_operands_and_expr_v1.htm) →  [CDS DDL - DDIC-Based View, Elementary CDS Operands](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abencds_operands_v1.htm) → 

 [![](Mail.gif?object=Mail.gif "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback%20on%20ABAP%20Documentation&body=Document:%20CDS%20DDL%20-%20DDIC-Based%20View%2C%20literal%2C%20ABENCDS_LITERAL_V1%2C%20758%0D%0A%0D%0AError:%0D%0A%0D%0A%0D%0A%0D%0ASuggestion%20for%20improvement:)

CDS DDL - DDIC-Based View, literal

Syntax

... *\[*#*|*:domain.*\]*'character\_literal'*|*numeric\_literal ...

Addition:

[... #*|*:domain.](#!ABAP_ONE_ADD@1@)

Effect

Literal in a [SELECT statement](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abencds_select_statement_v1.htm) of a [CDS DDIC-based view (obsolete)](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abencds_v1_view_glosry.htm "Glossary Entry"). It is either a character literal or a numeric literal:

-   A character literal 'character\_literal' is a character string enclosed in quotation marks. If the character string consists exclusively of digits, the data type of the literal is [NUMC](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenddic_builtin_types.htm). If this is not the case, the data type is [CHAR](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenddic_builtin_types.htm). When activated, the length of the corresponding field in the database system is set to a size at least as large as the actual length of the literal. A character literal can have a maximum of 1333 characters.
-   A numeric literal numeric\_literal is a series of digits between 0 and 9. It can be directly prefixed by a + or \- sign and can contain a decimal point (.) after the first digit. A numeric literal without a decimal point is handled as a field of the type [INT1](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenddic_builtin_types.htm), [INT2](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenddic_builtin_types.htm), [INT4](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenddic_builtin_types.htm), or [INT8](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenddic_builtin_types.htm), depending on the value. A numeric literal with a decimal point is floating point number of type [FLTP](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenddic_builtin_types.htm). The value of a numeric literal cannot be greater than the value range of the valid types.

Literals can be used at all operand positions where this is documented.

Escape characters:
A single quote (') must be used to escape a single quote ('...''...') in a character literal.

Hints

-   0.5 is a valid numeric literal, but .5 is not.
-   Byte-like literals are currently not supported.
-   A literal prefixed with a sign is interpreted as an [arithmetic expression](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abencds_arithmetic_expression_v1.htm) and can be specified in all operand positions where [arithmetic expressions](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abencds_arithmetic_expression_v1.htm) are allowed.
-   The built-in conversion function [FLTP\_TO\_DEC](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abencds_conv_func_types_v1.htm) can be used to convert literals with a decimal point to a packed number.
-   It is not possible to specify a literal in an operand position that expects a type-compliant operand in a data type that is not numeric or character-like, such as UTCLONG.
    
    In the following example, the operand after when cannot be specified as literal and therefore, the syntax is invalid:
    
    case utcl\_current( )
    when '2020020720162345' then 'ok'
    else 'no'
    end as demo
    

Example

The CDS view demonstrates various literals at operand positions.

@AbapCatalog.sqlViewName: 'DEMO\_CORPSO\_VW'
define view demo\_corp\_sales\_order
  as select from snwd\_so
  association \[1..1\]  
    to snwd\_bpa as \_partner  
      on snwd\_so.buyer\_guid = \_partner.node\_key
{
  key snwd\_so.so\_id              as sales\_order\_id,
      snwd\_so.buyer\_guid,
      \_partner.bp\_id             as corporation\_id,
      \_partner.company\_name      as corporation\_name,
      'corporation'              as legal\_form,
      @Semantics.currencyCode
      cast( 'EUR' as abap.cuky ) as currency\_code,
      @Semantics.amount.currencyCode: 'currency\_code'
      snwd\_so.gross\_amount       as sales\_order\_gross\_amount
}
where
      \_partner.legal\_form   = 'Inc.' //Corporations only
  and snwd\_so.currency\_code = 'EUR'
  and snwd\_so.gross\_amount  > 100000

Addition   

... #*|*:domain.

Effect

In certain operand positions, a literal can be prefixed with a name of a [DDIC domain](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abendomain_glosry.htm "Glossary Entry") domain introduced using the character # or : and separated by a period (.). In this case, a check is made to verify whether the value of the literal is defined as a [fixed value](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenfixed_value_glosry.htm "Glossary Entry") in the [value range](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenddic_domains_sema.htm) of the domain. If this is not the case or if the domain does not exist as an active domain, a syntax check warning occurs. Apart from this, the literal is handled like a regular literal.

A domain can be specified in front of a literal in the following operand positions:

-   Element of the [SELECT list](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abencds_select_list_v1.htm)
-   Right side of a [comparison condition](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abencds_cond_expr_comp_v1.htm)
-   Parameters passed to [built-in functions](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abencds_builtin_functions_v1.htm)

Hints

-   In the case of character literals consisting only of letters, numbers, underscores (\_), and slashes (/) and that start with a letter, underscore, or slash, the quotation marks can be omitted after the domain.
    -   #domain.xXx has the same semantics as
    -   #domain.'xXx'.
-   Numeric literals can only be checked using fixed values of numeric domains.
-   Currently, not all potential literal values can be represented as fixed values of domains. For example, a numeric domain can only have positive integers as fixed values and there are no fixed values for domains of type FLTP.

Example

Fixed value EXA of the domain ABDOCTYPE as the operand of the WHERE condition of a view.

@AbapCatalog.sqlViewName: 'DEMO\_ABAPDOCTREE'
@AccessControl.authorizationCheck: #NOT\_REQUIRED
define view demo\_abapdoc\_tree as
select from abapdocu\_tree
       { \* }
       where node\_type = #ABDOCTYPE.'EXA';
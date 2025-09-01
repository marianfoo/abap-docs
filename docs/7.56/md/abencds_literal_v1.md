  

* * *

AS ABAP Release 756, ©Copyright 2021 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP - Core Data Services (ABAP CDS)](javascript:call_link\('abencds.htm'\)) →  [ABAP CDS - Data Definitions](javascript:call_link\('abencds_entities.htm'\)) →  [ABAP CDS - DDL for Data Definitions](javascript:call_link\('abencds_f1_ddl_syntax.htm'\)) →  [ABAP CDS - CDS Entities](javascript:call_link\('abencds_view_entity.htm'\)) →  [ABAP CDS - DDIC-Based Entities](javascript:call_link\('abencds_ddic_entity.htm'\)) →  [ABAP CDS - DDIC-Based Views](javascript:call_link\('abencds_v1_views.htm'\)) →  [CDS DDL - DEFINE VIEW ddic\_based](javascript:call_link\('abencds_define_view_v1.htm'\)) →  [CDS DDL - DDIC-based View, SELECT](javascript:call_link\('abencds_select_statement_v1.htm'\)) →  [CDS DDL - DDIC-based View, SELECT, Operands and Expressions](javascript:call_link\('abencds_operands_and_expr_v1.htm'\)) →  [CDS DDL - DDIC-based View, Elementary CDS Operands](javascript:call_link\('abencds_operands_v1.htm'\)) → 

CDS DDL - DDIC-based View, literal

Syntax

... *\[*#*|*:domain.*\]*'character\_literal'*|*numeric\_literal ...

Addition:

[... #*|*:domain.](#!ABAP_ONE_ADD@1@)

Effect

Literal in a [SELECT statement](javascript:call_link\('abencds_select_statement_v1.htm'\)) of a [CDS DDIC-based view](javascript:call_link\('abencds_v1_view_glosry.htm'\) "Glossary Entry"). It is either a character literal or a numeric literal:

-   A character literal 'character\_literal' is a character string enclosed in quotation marks. If the character string consists exclusively of digits, the data type of the literal is [NUMC](javascript:call_link\('abenddic_builtin_types.htm'\)). If this is not the case, the data type is [CHAR](javascript:call_link\('abenddic_builtin_types.htm'\)). When activated, the length of the corresponding field in the database system is set to a size at least as large as the actual length of the literal. A character literal can have a maximum of 1333 characters.
-   A numeric literal numeric\_literal is a series of digits between 0 and 9. It can be directly prefixed by a + or \- sign and can contain a decimal point (.) after the first digit. A numeric literal without a decimal point is handled as a field of the type [INT1](javascript:call_link\('abenddic_builtin_types.htm'\)), [INT2](javascript:call_link\('abenddic_builtin_types.htm'\)), [INT4](javascript:call_link\('abenddic_builtin_types.htm'\)), or [INT8](javascript:call_link\('abenddic_builtin_types.htm'\)), depending on the value. A numeric literal with a decimal point is floating point number of type [FLTP](javascript:call_link\('abenddic_builtin_types.htm'\)). The value of a numeric literal cannot be greater than the value range of the valid types.

Literals can be used at all operand positions where this is documented.

Escape characters:
A single quote (') must be used to escape a single quote ('...''...') in a character literal.

Hints

-   0.5 is a valid numeric literal, but .5 is not.
-   Byte-like literals are currently not supported.
-   A literal prefixed with a sign is interpreted as an [arithmetic expression](javascript:call_link\('abencds_arithmetic_expression_v1.htm'\)) and can be specified in all operand positions where [arithmetic expressions](javascript:call_link\('abencds_arithmetic_expression_v1.htm'\)) are allowed.
-   The built-in conversion function [FLTP\_TO\_DEC](javascript:call_link\('abencds_conv_func_types_v1.htm'\)) can be used to convert literals with a decimal point to a packed number.
-   It is not possible to specify a literal in an operand position that expects a type-compliant operand in a data type that is not numeric or character-like, such as UTCLONG.
    
    In the following example, the operand after when cannot be specified as literal and therefore, the syntax is invalid:
    
    case utcl\_current( )
    when '2020020720162345' then 'ok'
    else 'no'
    end as demo
    

Example

The CDS view demonstrates various literals at operand positions.

@AbapCatalog.sqlViewName: 'CORP\_SO\_VW'
define view corp\_sales\_order as
  select from snwd\_so
         association \[1..1\] to snwd\_bpa as \_partner
           on snwd\_so.buyer\_guid = \_partner.node\_key
         { key snwd\_so.so\_id as sales\_order\_id,
               snwd\_so.buyer\_guid,
               \_partner.bp\_id as corporation\_id,
               \_partner.company\_name as corporation\_name,
              'corporation' as legal\_form,
             @Semantics.currencyCode
              'EUR' as currency\_code,
             @Semantics.amount.currencyCode: 'currency\_code'
               snwd\_so.gross\_amount as sales\_order\_gross\_amount }
         where \_partner.legal\_form = 'Inc.' //Corporations only
           and snwd\_so.currency\_code = 'EUR'
           and snwd\_so.gross\_amount > 100000

Addition   

... #*|*:domain.

Effect

In certain operand positions, a literal can be prefixed with a name of a [DDIC domain](javascript:call_link\('abendomain_glosry.htm'\) "Glossary Entry") domain introduced using the character # or : and separated by a period (.). In this case, a check is made to verify whether the value of the literal is defined as a [fixed value](javascript:call_link\('abenfixed_value_glosry.htm'\) "Glossary Entry") in the [value range](javascript:call_link\('abenddic_domains_sema.htm'\)) of the domain. If this is not the case or if the domain does not exist as an active domain, a syntax check warning occurs. Apart from this, the literal is handled like a regular literal.

A domain can be specified in front of a literal in the following operand positions:

-   Element of the [SELECT list](javascript:call_link\('abencds_select_list_v1.htm'\))
-   Right side of a [comparison condition](javascript:call_link\('abencds_cond_expr_comp_v1.htm'\))
-   Parameters passed to [built-in functions](javascript:call_link\('abencds_builtin_functions_v1.htm'\))

Hints

-   In the case of character literals consisting only of letters, numbers, underscores (\_), and slashes (/) and that start with a letter, underscore, or slash, the quotation marks can be omitted after the domain.
    -   #domain.xXx has the same semantics as
    -   #domain.'xXx'.
-   Numeric literals can only be checked using fixed values of numeric domains.
-   Currently, not all potential literal values can be represented as fixed values of domains. For example, a numeric domain can only have positive integers as fixed values and there are no fixed values for domains of type FLTP.

Example

Fixed value EXA of the domain ABDOCTYPE as the operand of the WHERE condition of a view.

AbapCatalog.sqlViewName: 'ABAPDOCTREE'
  define view abapdoc\_tree as
  select from abapdocu\_tree
         { \* }
         where node\_type = #ABDOCTYPE.'EXA';
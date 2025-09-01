  

* * *

SAP NetWeaver AS ABAP Release 752, ©Copyright 2017 SAP AG. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenabap.htm) →  [ABAP - Dictionary](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenabap_dictionary.htm) →  [ABAP CDS in ABAP Dictionary](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abencds.htm) →  [ABAP CDS - Data Definitions](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenddic_cds_entities.htm) →  [ABAP CDS - DDL for Data Definitions](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abencds_f1_ddl_syntax.htm) →  [ABAP CDS - DEFINE VIEW](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abencds_f1_define_view.htm) →  [ABAP CDS - SELECT](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abencds_f1_select_statement.htm) →  [ABAP CDS - SELECT, Operands and Expressions](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abencds_operands_and_expressions.htm) → 

ABAP CDS - literal

Syntax

... *\[*#*|*:domain.*\]*'character\_literal'*|*numeric\_literal ...

Addition:

[... #*|*:domain.](#!ABAP_ONE_ADD@1@)

Effect

Literal in a [SELECT statement](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abencds_f1_select_statement.htm) of a [CDS view](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abencds_view_glosry.htm "Glossary Entry"). It is either a character literal or a number literal:

-   A character literal 'character\_literal' is a character string enclosed in quotation marks. If the character string consists exclusively of digits, the data type of the literal is [NUMC](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenddic_builtin_types.htm). If this is not the case, the data type is [CHAR](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenddic_builtin_types.htm). When activated, the length of the corresponding field in the database system is set to a size at least as large as the actual length of the literal. A character literal can have a maximum of 1333 characters.

-   A numeric literal numeric\_literal is a series of digits between 0 and 9. It can be directly prefixed by a + or \- sign and can contain a decimal point .) after the first digit. A numeric literal without a decimal point is handled as a field of the type [INT1](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenddic_builtin_types.htm), [INT2](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenddic_builtin_types.htm), or [INT4](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenddic_builtin_types.htm), depending on the value. There is no implicit handling as a field of type [INT8](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenddic_builtin_types.htm). A numeric literal with a decimal point is floating point number of type [FLTP](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenddic_builtin_types.htm). The value of a numeric literal cannot be greater than the value range of the valid types.

Literals can be used at all operand positions where this is documented.

Notes

-   0.5 is a valid numeric literal, but .5 is not.

-   No byte-like literals are currently supported.

-   The specification of a literal prefixed with a sign is interpreted as an [arithmetic expression](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abencds_f1_arithmetic_expression.htm) and can be specified wherever it is permitted.

-   The built-in conversion function [FLTP\_TO\_DEC](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abencds_f1_conv_func_types.htm) can be used to convert literals with a decimal point to a packed number.

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

In certain operand positions, a literal can be prefixed with a name of a [domain](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abendomain_glosry.htm "Glossary Entry") domain introduced using the character # or : and separated by a period (.). In this case, a check is made to verify whether the value of the literal is defined as a [fixed value](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenfixed_value_glosry.htm "Glossary Entry") in the [value range](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenddic_domains_sema.htm) of the domain. If this is not the case or if the domain does not exist as an active domain, a syntax check warning occurs. Apart from this, the literal is handled like a regular literal.

A domain can be specified in front of a literal in the following operand positions:

-   Element of the [SELECT list](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abencds_f1_select_list.htm)

-   Right side of a [comparison condition](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abencds_cond_expr_comp.htm)

-   Parameters passed to [built-in functions](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abencds_f1_builtin_functions.htm)

Notes

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
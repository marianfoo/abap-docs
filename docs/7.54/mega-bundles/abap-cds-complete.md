# ABAP CDS - Complete Reference (7.54)

**Generated**: 2025-09-01T11:14:58.226Z
**Bundles Combined**: 24
**Category**: cds

---



## 🔗 Complete Source Documentation

**📖 Official Documentation**: [ABAP Keyword Documentation 7.54](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/index.htm)
**🏷️ Category**: CDS
**🔍 Search Specific Topics**: Use `abap_search query:"cds"` for focused results
**📄 Individual Pages**: All source URLs included in each section below

### 🎯 Quick Navigation
- **Search for specific statements**: `abap_search query:"SELECT"` or `abap_search query:"LOOP"`
- **Get individual bundles**: Use `abap_get` with specific bundle doc_id
- **Browse by difficulty**: Look for **Difficulty** markers in each section

---

## ABAP Keyword Documentation / ABAP - Dictionary / ABAP CDS in ABAP Dictionary / ABAP CDS - Syntax

**Files**: 3 | **Difficulty**: advanced

# ABAP Keyword Documentation / ABAP - Dictionary / ABAP CDS in ABAP Dictionary / ABAP CDS - Syntax

Included pages: 3


### abencds_syntax.htm

> **📖 Official SAP Documentation**: [abencds_syntax.htm](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abencds_syntax.htm)
> **🔍 Direct Link**: This section contains the complete content from the official SAP ABAP documentation page.


  

* * *

AS ABAP Release 754, ©Copyright 2019 SAP SE. All rights reserved.

[ABAP Keyword Documentation](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenabap.htm) →  [ABAP - Dictionary](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenabap_dictionary.htm) →  [ABAP CDS in ABAP Dictionary](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abencds.htm) → 

ABAP CDS - Syntax

The syntax of the [CDS DDL](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abencds_ddl_glosry.htm "Glossary Entry") and the [CDS DCL](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abencds_dcl_glosry.htm "Glossary Entry") in ABAP CDS comprises elements of the general [SQL](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abensql_glosry.htm "Glossary Entry") [DDL](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenddl_glosry.htm "Glossary Entry") and [DCL](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abendcl_glosry.htm "Glossary Entry") and also makes it possible to define annotations and CDS associations. The syntax and semantics basically match the general [CDS](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abencds_glosry.htm "Glossary Entry") concept.

-   [General Syntax Rules](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abencds_general_syntax_rules.htm)

-   [Language Elements](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abencds_language_elements.htm)

Continue
[ABAP CDS - General Syntax Rules](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abencds_general_syntax_rules.htm)
[ABAP CDS - Language Elements](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abencds_language_elements.htm)



**📖 Source**: [abencds_syntax.htm](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abencds_syntax.htm)

### abencds_general_syntax_rules.htm

> **📖 Official SAP Documentation**: [abencds_general_syntax_rules.htm](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abencds_general_syntax_rules.htm)
> **🔍 Direct Link**: This section contains the complete content from the official SAP ABAP documentation page.


  

* * *

AS ABAP Release 754, ©Copyright 2019 SAP SE. All rights reserved.

[ABAP Keyword Documentation](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenabap.htm) →  [ABAP - Dictionary](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenabap_dictionary.htm) →  [ABAP CDS in ABAP Dictionary](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abencds.htm) →  [ABAP CDS - Syntax](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abencds_syntax.htm) → 

ABAP CDS - General Syntax Rules

The general syntax rules for the [CDS DDL](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abencds_ddl_glosry.htm "Glossary Entry") and [CDS DCL](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abencds_dcl_glosry.htm "Glossary Entry") for defining [CDS objects](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abencds_object_glosry.htm "Glossary Entry") in [ABAP CDS](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenabap_cds_glosry.htm "Glossary Entry") are as follows:

-   Keywords

-   Keywords must be all uppercase, all lowercase, or in lowercase with an uppercase initial letter. Other mixes of uppercase and lowercase are not allowed.

-   Names

-   Names are not case-sensitive.

-   A name must contain at least 2 characters but no more than 30 characters.

-   A name can consist of letters, numbers, underscores (\_), and slashes (/).

-   A name must start with a letter, slash character, or underscore. Underscores are recommended as the naming convention for [CDS associations](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abencds_association_glosry.htm "Glossary Entry").

-   The separator for names with multiple parts is a period (.). Names with multiple parts can be paths, columns with a prefixed data source, and structured annotations.

-   The following CDS keywords cannot be used as names:
    ALL, AND, AS, ASSOCIATION, AVG, CASE, CAST, COUNT, CROSS, DISTINCT, EXISTS, EXTEND, EXTENSION, FROM, FULL, GROUP, HAVING, INNER, JOIN, KEY, LEFT, MAX, MIN, NOT, NULL, ON, OR, ORDER, RIGHT, SELECT, SUM, UNION, VIEW, WHEN, WHERE

-   Literals

-   Numeric literals must always be specified in full and a decimal point (.) used as a decimal separator if necessary.

-   Character literals are enclosed in single quotation marks (').

-   Comments

-   Two forward slashes (//) introduce a comment, which continues until the end of the line.

-   Comments within lines or that span multiple lines are enclosed by the characters /\* and \*/.

-   Separators

-   Statements can be closed using a semicolon (;). Sometimes this is mandatory.

-   Protected words

-   Certain keywords are protected and cannot be used as self-defined names. The reserved names that cannot be used are specified in the database table TRESE.

Notes

-   The closing semicolon after a statement is sometimes optional because one piece of CDS source code can currently only contain a single statement.

-   In [DDL source code](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenddl_source_code_glosry.htm "Glossary Entry") for [CDS data definitions](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abencds_data_definition_glosry.htm "Glossary Entry") and [DCL source code](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abendcl_source_code_glosry.htm "Glossary Entry") for [CDS roles](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abencds_role_glosry.htm "Glossary Entry"), as well as two slashes, two dashes (\--) can also be used to introduce a comment. Slashes (//), however, are the recommended method. Two dashes are not allowed in [DDLA source code](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenddla_source_code_glosry.htm "Glossary Entry") for [annotation definitions](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abencds_anno_definition_glosry.htm "Glossary Entry") and in [DDLX source code](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenddlx_source_code_glosry.htm "Glossary Entry") for [metadata extensions](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abencds_metadata_extension_glosry.htm "Glossary Entry").

Examples

-   SELECT, select, and Select are all valid ways of specifying a keyword. seLect and SeLect, on the other hand, produce syntax errors.

-   MYVIEW, myview, and myView all identify the same operand.

-   0.5 is a valid numeric literal, but .5 is not.



**📖 Source**: [abencds_general_syntax_rules.htm](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abencds_general_syntax_rules.htm)

### abencds_language_elements.htm

> **📖 Official SAP Documentation**: [abencds_language_elements.htm](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abencds_language_elements.htm)
> **🔍 Direct Link**: This section contains the complete content from the official SAP ABAP documentation page.


  

* * *

AS ABAP Release 754, ©Copyright 2019 SAP SE. All rights reserved.

[ABAP Keyword Documentation](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenabap.htm) →  [ABAP - Dictionary](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenabap_dictionary.htm) →  [ABAP CDS in ABAP Dictionary](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abencds.htm) →  [ABAP CDS - Syntax](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abencds_syntax.htm) → 

ABAP CDS - Language Elements

The following sections summarize the language elements of the [CDS DDL](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abencds_ddl_glosry.htm "Glossary Entry") and [CDS DCL](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abencds_dcl_glosry.htm "Glossary Entry") in [ABAP CDS](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenabap_cds_glosry.htm "Glossary Entry"), arranged by topics.

-   [DDL](#abencds-language-elements-1--------cds-annotation-definitions---@ITOC@@ABENCDS_LANGUAGE_ELEMENTS_2)

-   [CDS Views](#abencds-language-elements-3--------cds-view-enhancements---@ITOC@@ABENCDS_LANGUAGE_ELEMENTS_4)

-   [CDS Table Functions](#abencds-language-elements-5--------cds-hierarchies---@ITOC@@ABENCDS_LANGUAGE_ELEMENTS_6)

-   [Abstract CDS Entities](#abencds-language-elements-7--------cds-metadata-extensions---@ITOC@@ABENCDS_LANGUAGE_ELEMENTS_8)

-   [DCL](#abencds-language-elements-9--------cds-roles---@ITOC@@ABENCDS_LANGUAGE_ELEMENTS_10)

-   [CDS access policy](#abencds-language-elements-11---in-addition-to-the-language-elements-shown-here--cds-source-code-can-also-contain--annotations--javascript-call-link---abencds-annotations-htm-----with-metadata---ddl--cds-annotation-definitions--keywords-and-additions--language-element--meaning---define-annotation------javascript-call-link---abencds-f1-define-annotation-htm------defines-a--cds-annotation--javascript-call-link---abencds-annotation-glosry-htm-----glossary-entry-----enum--javascript-call-link---abencds-f1-define-annotation-type-htm------defines-enumeration-symbols-of-a--cds-annotation--javascript-call-link---abencds-annotation-glosry-htm-----glossary-entry-----default--javascript-call-link---abencds-f1-define-annotation-type-htm------defines-default-values-of-a--cds-annotation--javascript-call-link---abencds-annotation-glosry-htm-----glossary-entry-----array-of--javascript-call-link---abencds-f1-define-annotation-arr-htm------defines-an--annotation-arras--javascript-call-link---abenannotation-array-glosry-htm-----glossary-entry-----cds-views--keywords-and-additions--language-element--meaning---define-view-----as--javascript-call-link---abencds-f1-define-view-htm------defines-a--cds-view--javascript-call-link---abencds-view-glosry-htm-----glossary-entry-----with-parameters--javascript-call-link---abencds-f1-parameter-list-htm------defines-input-parameters-of-a--cds-view--javascript-call-link---abencds-view-glosry-htm-----glossary-entry-----select-----distinct---------from--javascript-call-link---abencds-f1-select-statement-htm------select-statement-of-a--cds-view--javascript-call-link---abencds-view-glosry-htm-----glossary-entry-----inner-join-----on--javascript-call-link---abencds-f1-joined-data-source-htm------inner-join-in-a--select-statement--javascript-call-link---abencds-f1-select-statement-htm-------left---right-outer-join-----on--javascript-call-link---abencds-f1-joined-data-source-htm------outer-join-in-a--select-statement--javascript-call-link---abencds-f1-select-statement-htm-------association-----to-----as-----on--javascript-call-link---abencds-f1-association-htm------defines-a-cds-association-for-a--path-expression--javascript-call-link---abencds-f1-path-expression-htm-----in-a--select-statement--javascript-call-link---abencds-f1-select-statement-htm-------with-default-filter--javascript-call-link---abencds-f1-association-htm------specifies-a-default-filter-condition-of-a-cds-association---1---javascript-call-link---abencds-path-expression-attr-htm------attribute-of-a--path-expression--javascript-call-link---abencds-f1-path-expression-htm-------inner-----where--javascript-call-link---abencds-path-expression-attr-htm------attribute-of-a--path-expression--javascript-call-link---abencds-f1-path-expression-htm-------left-outer-----where--javascript-call-link---abencds-path-expression-attr-htm------attribute-of-a--path-expression--javascript-call-link---abencds-f1-path-expression-htm-------key-----as--javascript-call-link---abencds-f1-select-list-entry-htm------element-of-a--select-list--javascript-call-link---abencds-f1-select-list-htm--------extension-----javascript-call-link---abencds-f1-select-list-entry-htm------elements-of-an-enhancement-in-a--select-list--javascript-call-link---abencds-f1-select-list-htm-------where------javascript-call-link---abencds-f1-where-clause-htm------where-clause-of-a--select-statement--javascript-call-link---abencds-f1-select-statement-htm-------group-by------javascript-call-link---abencds-f1-group-by-htm------group-by-clause-of-a--select-statement--javascript-call-link---abencds-f1-select-statement-htm-------having------javascript-call-link---abencds-f1-having-clause-htm------having-clause-of-a--select-statement--javascript-call-link---abencds-f1-select-statement-htm-------union-all------javascript-call-link---abencds-f1-union-htm------union-clause-of-a--select-statement--javascript-call-link---abencds-f1-select-statement-htm------expressions--operators--meaning---max--javascript-call-link---abencds-f1-aggregate-functions-htm-------min--javascript-call-link---abencds-f1-aggregate-functions-htm-------avg-----as-dtype------javascript-call-link---abencds-f1-aggregate-functions-htm-------sum--javascript-call-link---abencds-f1-aggregate-functions-htm-------count--javascript-call-link---abencds-f1-aggregate-functions-htm------aggregate-expression-in-a--select-statement--javascript-call-link---abencds-f1-select-statement-htm----------javascript-call-link---abencds-f1-arithmetic-expression-htm-----------javascript-call-link---abencds-f1-arithmetic-expression-htm-----------javascript-call-link---abencds-f1-arithmetic-expression-htm----------javascript-call-link---abencds-f1-arithmetic-expression-htm------arithmetic-expression-in-a--select-statement--javascript-call-link---abencds-f1-select-statement-htm-------case--javascript-call-link---abencds-f1-case-expression-htm-------when--javascript-call-link---abencds-f1-case-expression-htm-------then--javascript-call-link---abencds-f1-case-expression-htm-------else--javascript-call-link---abencds-f1-case-expression-htm-------end--javascript-call-link---abencds-f1-case-expression-htm------case-distinction-in-a--select-statement--javascript-call-link---abencds-f1-select-statement-htm-------cast--javascript-call-link---abencds-f1-cast-expression-htm------cast-expression-in-a--select-statement--javascript-call-link---abencds-f1-select-statement-htm-----------javascript-call-link---abencds-cond-expr-comp-htm-----------javascript-call-link---abencds-cond-expr-comp-htm----------javascript-call-link---abencds-cond-expr-comp-htm-----------javascript-call-link---abencds-cond-expr-comp-htm-----------javascript-call-link---abencds-cond-expr-comp-htm------------javascript-call-link---abencds-cond-expr-comp-htm-------between--javascript-call-link---abencds-cond-expr-between-htm-------like--javascript-call-link---abencds-cond-expr-like-htm-------is-null--javascript-call-link---abencds-cond-expr-null-htm-------not--javascript-call-link---abencds-f1-conditional-expression-htm-------and--javascript-call-link---abencds-f1-conditional-expression-htm-------or--javascript-call-link---abencds-f1-conditional-expression-htm------relational-expression-in-a--select-statement--javascript-call-link---abencds-f1-select-statement-htm------built-in-functions--function--meaning---abs--javascript-call-link---abencds-f1-sql-functions-numeric-htm-------ceil--javascript-call-link---abencds-f1-sql-functions-numeric-htm-------div--javascript-call-link---abencds-f1-sql-functions-numeric-htm-------division--javascript-call-link---abencds-f1-sql-functions-numeric-htm-------floor--javascript-call-link---abencds-f1-sql-functions-numeric-htm-------mod--javascript-call-link---abencds-f1-sql-functions-numeric-htm-------round--javascript-call-link---abencds-f1-sql-functions-numeric-htm------numeric-function-in-a--select-statement--javascript-call-link---abencds-f1-select-statement-htm-------concat--javascript-call-link---abencds-f1-sql-functions-character-htm-------concat--with--space--javascript-call-link---abencds-f1-sql-functions-character-htm-------instr--javascript-call-link---abencds-f1-sql-functions-character-htm-------left--javascript-call-link---abencds-f1-sql-functions-character-htm-------length--javascript-call-link---abencds-f1-sql-functions-character-htm-------lpad--javascript-call-link---abencds-f1-sql-functions-character-htm-------lower--javascript-call-link---abencds-f1-sql-functions-character-htm-------ltrim--javascript-call-link---abencds-f1-sql-functions-character-htm-------replace--javascript-call-link---abencds-f1-sql-functions-character-htm-------right--javascript-call-link---abencds-f1-sql-functions-character-htm-------rpad--javascript-call-link---abencds-f1-sql-functions-character-htm-------rtrim--javascript-call-link---abencds-f1-sql-functions-character-htm-------substring--javascript-call-link---abencds-f1-sql-functions-character-htm-------upper--javascript-call-link---abencds-f1-sql-functions-character-htm------string-function-in-a--select-statement--javascript-call-link---abencds-f1-select-statement-htm-------bintohex--javascript-call-link---abencds-f1-conv-func-types-htm-------hextobin--javascript-call-link---abencds-f1-conv-func-types-htm------byte-string-function-in-a--select-statement--javascript-call-link---abencds-f1-select-statement-htm-------coalesce--javascript-call-link---abencds-f1-coalesce-expression-htm------coalesce-function-in-a--select-statement--javascript-call-link---abencds-f1-select-statement-htm-------fltp--to--dec--javascript-call-link---abencds-f1-conv-func-types-htm-------unit--conversion--javascript-call-link---abencds-f1-conv-func-unit-curr-htm-------currency--conversion--javascript-call-link---abencds-f1-conv-func-unit-curr-htm-------decimal--shift--javascript-call-link---abencds-f1-conv-func-unit-curr-htm------conversion-functions-in-a--select-statement--javascript-call-link---abencds-f1-select-statement-htm-------dats--is--valid--javascript-call-link---abencds-f1-date-functions-htm-------dats--days--between--javascript-call-link---abencds-f1-date-functions-htm-------dats--add--days--javascript-call-link---abencds-f1-date-functions-htm-------dats--add--months--javascript-call-link---abencds-f1-date-functions-htm------date-function-in-a--select-statement--javascript-call-link---abencds-f1-select-statement-htm-------tims--is--valid--javascript-call-link---abencds-f1-time-functions-htm------time-function-in-a--select-statement--javascript-call-link---abencds-f1-select-statement-htm-------tstmp--is--valid--javascript-call-link---abencds-f1-timestamp-functions-htm-------tstmp--current--utctimestamp--javascript-call-link---abencds-f1-timestamp-functions-htm-------tstmp--seconds--between--javascript-call-link---abencds-f1-timestamp-functions-htm-------tstmp--add--seconds--javascript-call-link---abencds-f1-timestamp-functions-htm------time-stamp-function-in-a--select-statement--javascript-call-link---abencds-f1-select-statement-htm-------abap--system--timezone--javascript-call-link---abencds-f1-timezone-functions-htm-------abap--user--timezone--javascript-call-link---abencds-f1-timezone-functions-htm------time-zone-functions-in-a--select-statement--javascript-call-link---abencds-f1-select-statement-htm-------tstmp--to--dats--javascript-call-link---abencds-f1-date-time-conversions-htm-------tstmp--to--tims--javascript-call-link---abencds-f1-date-time-conversions-htm-------tstmp--to--dst--javascript-call-link---abencds-f1-date-time-conversions-htm-------dats--tims--to--tstmp--javascript-call-link---abencds-f1-date-time-conversions-htm------date-time-conversions-functions-in-a--select-statement--javascript-call-link---abencds-f1-select-statement-htm------cds-view-enhancements--keywords-and-additions--language-element--meaning---extend-view-----with--javascript-call-link---abencds-f1-extend-view-htm------extends-a--cds-view--javascript-call-link---abencds-view-glosry-htm-----glossary-entry---using-a--cds-view-extension--javascript-call-link---abencds-view-extend-glosry-htm-----glossary-entry----cds-table-functions--keywords-and-additions--language-element--meaning---define-table-function-----returns-----implemented-by-method------javascript-call-link---abencds-f1-define-table-function-htm------defines-a--cds-table-function--javascript-call-link---abencds-table-function-glosry-htm-----glossary-entry----cds-hierarchies--keywords-and-additions--language-element--meaning---define-hierarchy------javascript-call-link---abencds-f1-define-hierarchy-htm------defines-a--cds-hierarchy--javascript-call-link---abencds-hierarchy-glosry-htm-----glossary-entry-----with-parameters--javascript-call-link---abencds-f1-hiera-parameter-list-htm------defines-input-parameters-of-a--cds-hierarchy--javascript-call-link---abencds-hierarchy-glosry-htm-----glossary-entry-----as-parent-child-hierarchy--javascript-call-link---abencds-f1-define-hierarchy-htm------defines-a--cds-hierarchy--javascript-call-link---abencds-hierarchy-glosry-htm-----glossary-entry---using-parent-child-relationships---source------javascript-call-link---abencds-f1-define-hierarchy-htm------specifies-the-data-source-of-a--cds-hierarchy--javascript-call-link---abencds-hierarchy-glosry-htm-----glossary-entry-----child-to-parent-association--javascript-call-link---abencds-f1-define-hierarchy-htm------specifies-the--hierarchy-association--javascript-call-link---abenhierarchy-association-glosry-htm-----glossary-entry---of-a--cds-hierarchy--javascript-call-link---abencds-hierarchy-glosry-htm-----glossary-entry-----period-from-----to-----valid-from-----to------javascript-call-link---abencds-f1-define-hierarchy-htm------defines-a--temporal-hierarchy--javascript-call-link---abentemporal-hierarchy-glosry-htm-----glossary-entry-----directory-----filter-by------javascript-call-link---abencds-f1-define-hierarchy-htm------specifies-a-condition-for-the-source-of-a--cds-hierarchy--javascript-call-link---abencds-hierarchy-glosry-htm-----glossary-entry-----start-where------javascript-call-link---abencds-f1-define-hierarchy-htm------specifies-the-start-condition-of-a--cds-hierarchy--javascript-call-link---abencds-hierarchy-glosry-htm-----glossary-entry-----siblings-order-by------javascript-call-link---abencds-f1-define-hierarchy-htm------specifies-the-sort-order-of--sibling-nodes--javascript-call-link---abensibling-node-glosry-htm-----glossary-entry---in-a--cds-hierarchy--javascript-call-link---abencds-hierarchy-glosry-htm-----glossary-entry-----depth------javascript-call-link---abencds-f1-define-hierarchy-htm------delimits-the--hierarchy-levels--javascript-call-link---abenhierarchy-level-glosry-htm-----glossary-entry---of-a--cds-hierarchy--javascript-call-link---abencds-hierarchy-glosry-htm-----glossary-entry-----nodetype------javascript-call-link---abencds-f1-define-hierarchy-htm------defines-an-element-as-a-node-type-for-a--cds-hierarchy--javascript-call-link---abencds-hierarchy-glosry-htm-----glossary-entry-----multiple-parents------javascript-call-link---abencds-f1-define-hierarchy-htm------defines-the-behavior-that-applies-if-multiple--parent-nodes--javascript-call-link---abenparent-node-glosry-htm-----glossary-entry---are-specified-in-a--cds-hierarchy--javascript-call-link---abencds-hierarchy-glosry-htm-----glossary-entry-----orphans------javascript-call-link---abencds-f1-define-hierarchy-htm------defines-the-behavior-that-applies-if--orphan-nodes--javascript-call-link---abenorphan-node-glosry-htm-----glossary-entry---are-specified-in-a--cds-hierarchy--javascript-call-link---abencds-hierarchy-glosry-htm-----glossary-entry-----cycles------javascript-call-link---abencds-f1-define-hierarchy-htm------defines-the-behavior-that-applies-if--node-cycles--javascript-call-link---abennode-cycle-glosry-htm-----glossary-entry---are-specified-in-a--cds-hierarchy--javascript-call-link---abencds-hierarchy-glosry-htm-----glossary-entry-----generate-spantree--javascript-call-link---abencds-f1-define-hierarchy-htm------reduces-a--cds-hierarchy--javascript-call-link---abencds-hierarchy-glosry-htm-----glossary-entry---to-a-tree--abstract-cds-entities--keywords-and-additions--language-element--meaning---define-abstract-entity------javascript-call-link---abencds-f1-define-abstract-entity-htm------defines-an--abstract-cds-entity--javascript-call-link---abenabstract-entity-glosry-htm-----glossary-entry-----with-parameters--javascript-call-link---abencds-f1-entity-parameter-list-htm------defines-input-parameters-of-an--abstract-cds-entity--javascript-call-link---abenabstract-entity-glosry-htm-----glossary-entry------association-----to-----on--javascript-call-link---abencds-f1-absent-association-htm------publishes-a-cds-association-in-the--element-list--javascript-call-link---abencds-f1-absent-element-list-htm-----of-an--abstract-cds-entity--javascript-call-link---abenabstract-entity-glosry-htm-----glossary-entry-----with-default-filter--javascript-call-link---abencds-f1-absent-association-htm------specifies-a-default-filter-condition-of-a-cds-association--cds-metadata-extensions--keywords-and-additions--language-element--meaning---annotate-entity---view-----with--javascript-call-link---abencds-f1-annotate-view-htm------defines-a--cds-metadata-extension--javascript-call-link---abencds-metadata-extension-glosry-htm-----glossary-entry---for-a--cds-entity--javascript-call-link---abencds-entity-glosry-htm-----glossary-entry-----variant--javascript-call-link---abencds-f1-annotate-view-htm------joins-a--cds-metadata-extension--javascript-call-link---abencds-metadata-extension-glosry-htm-----glossary-entry---with-a--cds-variant--javascript-call-link---abencds-variant-glosry-htm-----glossary-entry-----parameters--javascript-call-link---abencds-f1-annotate-view-para-list-htm------extends-the-annotations-of-the-input-parameters-of-a--cds-entity--javascript-call-link---abencds-entity-glosry-htm-----glossary-entry----dcl--cds-roles--keywords-and-additions--language-element--meaning---define-role--javascript-call-link---abencds-f1-define-role-htm------defines-a--cds-role--javascript-call-link---abencds-role-glosry-htm-----glossary-entry-----grant-select-on--javascript-call-link---abencds-dcl-role-rules-htm------defines-an-access-rule-in-a--cds-role--javascript-call-link---abencds-role-glosry-htm-----glossary-entry-----where--javascript-call-link---abencds-dcl-role-cond-rule-htm------where-clause-in-a-conditional-access-rule-of-a--cds-role--javascript-call-link---abencds-role-glosry-htm-----glossary-entry-----and--javascript-call-link---abencds-dcl-role-cond-expr-htm-------or--javascript-call-link---abencds-dcl-role-cond-expr-htm-------not--javascript-call-link---abencds-dcl-role-cond-expr-htm------boolean-operator-in-a-conditional-access-rule-of-a--cds-role--javascript-call-link---abencds-role-glosry-htm-----glossary-entry-----inherit--javascript-call-link---abencds-dcl-role-inherited-rule-htm------defines-an-inherited-access-rule-of-a--cds-role--javascript-call-link---abencds-role-glosry-htm-----glossary-entry----obsolete----aspect-pfcg--auth--javascript-call-link---abencds-f1-cond-pfcg-htm-------aspect-user--javascript-call-link---abencds-f1-cond-user-htm------conditions-for--cds-roles--javascript-call-link---abencds-role-glosry-htm-----glossary-entry-----pfcg--mapping--javascript-call-link---abencds-f1-cond-pfcg-mapping-htm------specifies-a--pfcg-mapping--javascript-call-link---abencds-pfcg-mapping-glosry-htm-----glossary-entry---in-a--pfcg-condition--javascript-call-link---abenpfcg-condition-glosry-htm-----glossary-entry---of-a--cds-role--javascript-call-link---abencds-role-glosry-htm-----glossary-entry-----inherit-----for-grant-select-on--javascript-call-link---abencds-f1-cond-inherit-htm------defines-an--inheritance-condition--javascript-call-link---abeninherit-condition-glosry-htm-----glossary-entry---of-a--cds-role--javascript-call-link---abencds-role-glosry-htm-----glossary-entry------------------------------------------javascript-call-link---abencds-f1-dcl-cond-expression-htm--------between---like---is-null--javascript-call-link---abencds-f1-cond-literal-htm----------operators-for-literal-conditions--cds-access-policy--keywords-and-additions--language-element--meaning---define-accesspolicy--javascript-call-link---abencds-f1-define-accesspolicy-htm------defines-a--cds-access-policy--javascript-call-link---abencds-access-policy-glosry-htm-----glossary-entry-----define-pfcg--mapping-----between-----and-----using------javascript-call-link---abencds-f1-define-pfcg-mapping-htm------defines-a--pfcg-mapping--javascript-call-link---abencds-pfcg-mapping-glosry-htm-----glossary-entry---in-an-access-policy------------abap-keyword-documentation---abap---dictionary---abap-cds-in-abap-dictionary---abap-cds---annotations---abap-cds---definition-of-annotations----files----9-----difficulty----advanced----abap-keyword-documentation---abap---dictionary---abap-cds-in-abap-dictionary---abap-cds---annotations---abap-cds---sap-annotations---abap-cds---abap-annotations--included-pages--3---------source-----abencds-language-elements-htm--https---help-sap-com-doc-abapdocu-754-index-htm-7-54-en-us-abencds-language-elements-htm-------abencds-annotations-abap-htm-------------as-abap-release-754---copyright-2019-sap-se--all-rights-reserved----abap-keyword-documentation--javascript-call-link---abenabap-htm---------abap---dictionary--javascript-call-link---abenabap-dictionary-htm---------abap-cds-in-abap-dictionary--javascript-call-link---abencds-htm---------abap-cds---annotations--javascript-call-link---abencds-annotations-htm---------abap-cds---sap-annotations--javascript-call-link---abencds-annotations-sap-htm---------abap-cds---abap-annotations--abap-annotations-are--sap-annotations--javascript-call-link---abensap-annotation-glosry-htm-----glossary-entry---that-are-evaluated-by-the-abap-runtime-environment--the-following-sections-show-the-associated--annotation-definitions--javascript-call-link---abencds-anno-definition-glosry-htm-----glossary-entry---and-the--annotation-syntax--javascript-call-link---abencds-annotation-syntax-glosry-htm-----glossary-entry----------abap-annotation-definitions--javascript-call-link---abencds-annotations-abap-ddla-htm-----------abap-annotation-syntax--javascript-call-link---abencds-annotations-abap-tables-htm------the-detailed-meanings-of-the-abap-annotations-is-documented-for-the-corresponding--scope--javascript-call-link---abencds-annotations-scopes-htm-----in-this-documentation---note--an-abap-annotation-can-also-be-evaluated-by-frameworks-of-other-software-components---continue--abap-cds---abap-annotation-definitions--javascript-call-link---abencds-annotations-abap-ddla-htm------abap-cds---abap-annotation-syntax--javascript-call-link---abencds-annotations-abap-tables-htm-------------source-----abencds-annotations-abap-htm--https---help-sap-com-doc-abapdocu-754-index-htm-7-54-en-us-abencds-annotations-abap-htm-------abencds-annotations-abap-ddla-htm-------------as-abap-release-754---copyright-2019-sap-se--all-rights-reserved----abap-keyword-documentation--javascript-call-link---abenabap-htm---------abap---dictionary--javascript-call-link---abenabap-dictionary-htm---------abap-cds-in-abap-dictionary--javascript-call-link---abencds-htm---------abap-cds---annotations--javascript-call-link---abencds-annotations-htm---------abap-cds---sap-annotations--javascript-call-link---abencds-annotations-sap-htm---------abap-cds---abap-annotations--javascript-call-link---abencds-annotations-abap-htm---------abap-cds---abap-annotation-definitions--the-following--ddla-source-code--javascript-call-link---abenddla-source-code-glosry-htm-----glossary-entry---shows-the--cds-annotation-definitions--javascript-call-link---abencds-anno-definition-glosry-htm-----glossary-entry---in-all--abap-annotations--javascript-call-link---abencore-annotation-glosry-htm-----glossary-entry---in--cds-ddl--javascript-call-link---abencds-ddl-glosry-htm-----glossary-entry---and--cds-dcl--javascript-call-link---abencds-dcl-glosry-htm-----glossary-entry---in-abap-cds-------the-meaning-of-the--ddla-source-code--javascript-call-link---abenddla-source-code-glosry-htm-----glossary-entry---shown-here-can-be-found-in-the-documentation-for--define-annotation--javascript-call-link---abencds-f1-define-annotation-htm-----------the-semantics-of-the-annotations-can-be-found-in-the-links-in-the-ddla-source-code---the-detailed-meanings-of-these-abap-annotations-are-described-under-the-relevant--scope--javascript-call-link---abencds-annotations-scopes-htm-----defined-after--Scope](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abencds_f1_define_anno_annos.htm) in the documentation.

-   [AbapAnnotation-Annotations](#abencds-annotations-abap-ddla-1--------abapcatalog-annotations---@ITOC@@ABENCDS_ANNOTATIONS_ABAP_DDLA_2)

-   [AccessControl-Annotations](#abencds-annotations-abap-ddla-3--------api-annotations---@ITOC@@ABENCDS_ANNOTATIONS_ABAP_DDLA_4)

-   [ClientDependent-Annotations](#abencds-annotations-abap-ddla-5--------clienthandling-annotations---@ITOC@@ABENCDS_ANNOTATIONS_ABAP_DDLA_6)

-   [CompatibilityContract-Annotations](#abencds-annotations-abap-ddla-7--------dataaging-annotations---@ITOC@@ABENCDS_ANNOTATIONS_ABAP_DDLA_8)

-   [EndUserText-Annotations](#abencds-annotations-abap-ddla-9--------environment-annotations---@ITOC@@ABENCDS_ANNOTATIONS_ABAP_DDLA_10)

-   [LanguageDependency-Annotations](#abencds-annotations-abap-ddla-11--------mappingrole-annotations---@ITOC@@ABENCDS_ANNOTATIONS_ABAP_DDLA_12)

-   [Metadata-Annotations](#abencds-annotations-abap-ddla-13--------metadataextension-annotations---@ITOC@@ABENCDS_ANNOTATIONS_ABAP_DDLA_14)

-   [ObjectModel-Annotations](#abencds-annotations-abap-ddla-15--------scope------annotations---@ITOC@@ABENCDS_ANNOTATIONS_ABAP_DDLA_16)

-   [Semantics-Annotations](#abencds-annotations-abap-ddla-17---note--see-also--abap-annotation-syntax--javascript-call-link---abencds-annotations-abap-tables-htm-------abapannotation-annotations--Scope: \[[#ANNOTATION](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abencds_f1_define_anno_annos.htm)\]
annotation AbapAnnotation {
  definitionHidden : Boolean default true;
};

AbapCatalog-Annotations

@Scope:\[[#VIEW](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abencds_f1_view_entity_annotations.htm)\]
@CompatibilityContract.c2.usageAllowed: false
@API.state: \[#RELEASED\_FOR\_SAP\_CLOUD\_PLATFORM\]
annotation AbapCatalog
{
   @CompatibilityContract.c1: {
       usageAllowed: true,
       allowedChanges: {
           annotation: \[#NONE\],
           value: \[#NONE\]
       }
   }
   buffering
   {
      status : String(20) enum { NOT\_ALLOWED; ACTIVE; SWITCHED\_OFF; } default #SWITCHED\_OFF;
      type : String(10) enum { SINGLE; GENERIC; FULL; NONE; } default #NONE;
      numberOfKeyFields : Integer default 000;
   };
   @CompatibilityContract.c1: {
       usageAllowed: true,
       allowedChanges: {
           annotation: \[#ANY\],
           value: \[#ANY\]
       }
   }
   dbHints : array of
   {
      dbSystem : String(3) enum
      {
         ADA;
         DB2;
         DB4;
         DB6;
         INF;
         MSS;
         ORA;
         HDB;
         ASE;
         ALL;
      };
      hint : String(1298);
   };
   @CompatibilityContract.c1: {
       usageAllowed: true,
       allowedChanges: {
           annotation: \[#NONE\],
           value: \[#NONE\]
       }
   }
   viewEnhancementCategory : array of String(20) enum
   {
      NONE;
      PROJECTION\_LIST;
      GROUP\_BY;
      UNION;
   };
   @CompatibilityContract: {
       c1: {
           usageAllowed: true,
           allowedChanges: {
               annotation: \[#NONE\],
               value: \[#NONE\]
           }
       },
       c2: {
           usageAllowed: true,
           allowedChanges: {
               annotation: \[#NONE\],
               value: \[#NONE\]
           }
       }
   }
   @API.state: \[#RELEASED\_FOR\_SAP\_CLOUD\_PLATFORM, #RELEASED\_FOR\_KEY\_USER\_APPS\]    
   sqlViewName : String(16);
   @CompatibilityContract.c1: {
       usageAllowed: true,
       allowedChanges: {
           annotation: \[#ADD\],
           value: \[#FALSE\_TO\_TRUE\]
       }
   }
   @CompatibilityContract.c2: {
       usageAllowed: true,
       allowedChanges: {
           annotation: \[#ADD\],
           value: \[#FALSE\_TO\_TRUE\]
       }
   }    
   preserveKey : Boolean default true;
   @CompatibilityContract: {
       c1: {
           usageAllowed: true,
           allowedChanges: {
               annotation: \[#NONE\],
               value: \[#NONE\]
           }
       },
       c2: {
           usageAllowed: true,
           allowedChanges: {
               annotation: \[#NONE\],
               value: \[#NONE\]
           }
       }
   }
   compiler
   {
      compareFilter : Boolean default true;
      @Scope:\[[#ELEMENT](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abencds_f1_element_annotation.htm)\]
      @AbapAnnotation.definitionHidden: true
      @CompatibilityContract: {
        c1: {
            usageAllowed: true,
            allowedChanges: {
                annotation: \[#ANY\],
                value: \[#ANY\]
            }
        },
        c2: {
            usageAllowed: true,
            allowedChanges: {
                annotation: \[#ANY\],
                value: \[#ANY\]
            }
        }
      }
      @API.state: \[#NOT\_RELEASED\]        
      caseJoin : Boolean default true;
   };
   @AbapAnnotation.definitionHidden: true
   @CompatibilityContract.c1.usageAllowed: false
   @API.state: \[#NOT\_RELEASED\]
   internal
   {  
      @Scope:\[[#ELEMENT](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abencds_f1_element_annotation.htm)\]
      isMandt : Boolean default true;
      @Scope: \[[#VIEW](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abencds_f1_view_entity_annotations.htm), [#EXTEND\_VIEW](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abencds_f1_extend_view_annotations.htm)\]
      @CompatibilityContract: {
        c1: {
            usageAllowed: true,
            allowedChanges: {
                annotation: \[#ANY\],
                value: \[#ANY\]
            }
        },
        c2: {
            usageAllowed: true,
            allowedChanges: {
                annotation: \[#ANY\],
                value: \[#ANY\]
            }
        }
      }      
      setChange : String(30);  
      inheritedType : Boolean default true;    
   };
   @Scope:\[[#EXTEND\_VIEW](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abencds_f1_extend_view_annotations.htm)\]
   @CompatibilityContract.c1.usageAllowed: false
   sqlViewAppendName : String(16);
   @Scope:\[[#ENTITY](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abencds_f1_entity_annotations.htm)\]
   @MetadataExtension.usageAllowed: false
   @AbapAnnotation.definitionHidden: true
   @CompatibilityContract.c1.usageAllowed: false
   @API.state: \[#NOT\_RELEASED\]    
   sqlName : String(256);    
};

AccessControl-Annotations

See [Framework Specific Annotation Definitions](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abencds_annotations_frmwrk_ddla.htm).

API-Annotations

define annotation API
{
  @Scope:\[[#ANNOTATION](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abencds_f1_define_anno_annos.htm)\]
  state: array of String(40) enum {
    NOT\_RELEASED;
    RELEASED\_FOR\_SAP\_CLOUD\_PLATFORM;
    RELEASED\_FOR\_KEY\_USER\_APPS;
  };
  @Scope:\[[#ELEMENT](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abencds_f1_element_annotation.htm)\]
  @CompatibilityContract.c1.usageAllowed: true
  @CompatibilityContract.c2.usageAllowed: false
  element {    
    @CompatibilityContract.c1.allowedChanges: {annotation: \[#CUSTOM\], value: \[#CUSTOM\]}
    releaseState: String(30) enum {DEPRECATED;};
    @CompatibilityContract.c1.allowedChanges: {annotation: \[#CUSTOM\], value: \[#CUSTOM\]}
    successor: ElementRef;
  };
};

ClientDependent-Annotations

Obsolete annotations for scopes [#VIEW](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abencds_f1_view_entity_annotations.htm), [#TABLE\_FUNCTION](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abencds_f1_view_entity_annotations.htm).

ClientHandling-Annotations

@Scope:\[[#VIEW](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abencds_f1_view_entity_annotations.htm), [#TABLE\_FUNCTION](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abencds_f1_function_annotations.htm)\]
@CompatibilityContract: {
    c1: {
        usageAllowed: true,
        allowedChanges: {
            annotation: \[#NONE\],
            value: \[#NONE\]
        }
    },
    c2: {
        usageAllowed: true,
        allowedChanges: {
            annotation: \[#NONE\],
            value: \[#NONE\]
        }
    }
}  
@API.state: \[#RELEASED\_FOR\_SAP\_CLOUD\_PLATFORM\]
annotation ClientHandling
{
   type : String(20) enum { CLIENT\_DEPENDENT; CLIENT\_INDEPENDENT; INHERITED; } default #INHERITED;
   algorithm : String(20) enum { NONE; AUTOMATED; SESSION\_VARIABLE; };
};

CompatibilityContract-Annotations

@Scope:\[[#ANNOTATION](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abencds_f1_define_anno_annos.htm)\]
define annotation CompatibilityContract {
  c0 {  
    usageAllowed: Boolean default true;
    allowedChanges {
      annotation: array of String(20) enum {ADD; REMOVE; ANY; NONE; CUSTOM;};
      value: array of String(20) enum {ADD; REMOVE; UPDATE; FALSE\_TO\_TRUE; TRUE\_TO\_FALSE; ANY; NONE; CUSTOM;};
    };
  };
  c1 {  
    usageAllowed: Boolean default true;
    allowedChanges {
      annotation: array of String(20) enum {ADD; REMOVE; ANY; NONE; CUSTOM;};
      value: array of String(20) enum {ADD; REMOVE; UPDATE; FALSE\_TO\_TRUE; TRUE\_TO\_FALSE; ANY; NONE; CUSTOM;};
    };
  };
  c2 {  
    usageAllowed: Boolean default true;
    allowedChanges {
      annotation: array of String(20) enum {ADD; REMOVE; ANY; NONE; CUSTOM;};
      value: array of String(20) enum {ADD; REMOVE; UPDATE; FALSE\_TO\_TRUE; TRUE\_TO\_FALSE; ANY; NONE; CUSTOM;};
    };
  };    
}

DataAging-Annotations

@Scope:\[[#VIEW](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abencds_f1_view_entity_annotations.htm), [#TABLE\_FUNCTION](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abencds_f1_function_annotations.htm)\]
@CompatibilityContract: {
    c1: {
        usageAllowed: true,
        allowedChanges: {
            annotation: \[#ADD\],
            value: \[#FALSE\_TO\_TRUE\]
        }
    },
    c2: {
        usageAllowed: true,
        allowedChanges: {
            annotation: \[#ADD\],
            value: \[#FALSE\_TO\_TRUE\]
        }
    }
}  
annotation DataAging
{
   noAgingRestriction : Boolean default true;
};

EndUserText-Annotations

@CompatibilityContract: {
    c1: {
        usageAllowed: true,
        allowedChanges: {
            annotation: \[#ANY\],
            value: \[#ANY\]
        }
    },
    c2: {
        usageAllowed: true,
        allowedChanges: {
            annotation: \[#ANY\],
            value: \[#ANY\]
        }
    }        
}
@API.state: \[#RELEASED\_FOR\_SAP\_CLOUD\_PLATFORM\]
annotation EndUserText
{
   @MetadataExtension.usageAllowed : true
   @LanguageDependency.maxLength : 40
   @Scope:\[[#ENTITY](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abencds_f1_entity_annotations.htm), [#PARAMETER](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abencds_f1_parameter_annotations.htm), [#ELEMENT](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abencds_f1_element_annotation.htm), [#EXTEND\_VIEW](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abencds_f1_extend_view_annotations.htm), [#ROLE](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abencds_f1_dcl_role_annotations.htm), #ASPECT, [#PFCG\_MAPPING](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abencds_f1_define_pfcg_mapping.htm), [#ACCESSPOLICY](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abencds_f1_define_accesspolicy.htm), #SERVICE\]
   label : String(60);
   @MetadataExtension.usageAllowed : true
   @LanguageDependency.maxLength : 67  
   @Scope:\[[#ELEMENT](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abencds_f1_element_annotation.htm), [#PARAMETER](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abencds_f1_parameter_annotations.htm), [#ANNOTATE](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abencds_f1_metadata_ext_annos.htm)\]
   quickInfo : String(100);
   @LanguageDependency.maxLength : 37
   @Scope:\[#SIMPLE\_TYPE\]
   @API.state: \[#NOT\_RELEASED\]
   heading : String(55);
};

Environment-Annotations

@CompatibilityContract: {
    c1: {
        usageAllowed: true,
        allowedChanges: {
            annotation: \[#NONE\],
            value: \[#NONE\]
        }
    },
    c2.usageAllowed: false
}
@API.state: \[#RELEASED\_FOR\_SAP\_CLOUD\_PLATFORM\]
annotation Environment
{
   @Scope:\[[#PARAMETER](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abencds_f1_parameter_annotations.htm)\]
   systemField : String(20) enum { CLIENT; SYSTEM\_LANGUAGE; USER; SYSTEM\_DATE; SYSTEM\_TIME; };
   @Scope:\[[#ELEMENT](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abencds_f1_element_annotation.htm)\]
   sql
   {
      passValue : Boolean default true;
   };
};

LanguageDependency-Annotations

@Scope: \[[#ANNOTATION](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abencds_f1_define_anno_annos.htm)\]
annotation LanguageDependency {
  maxLength : Integer;
};

MappingRole-Annotations

@Scope:\[[#ROLE](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abencds_f1_dcl_role_annotations.htm)\]
@CompatibilityContract: {
   c1: { usageAllowed: true },
   c1: {
      allowedChanges: { annotation: \[#ADD, #REMOVE \],
                        value: \[#FALSE\_TO\_TRUE \] }
       },
   c2: { usageAllowed: true },  
   c2: {
      allowedChanges: { annotation: \[#ADD, #REMOVE \],
                        value: \[#FALSE\_TO\_TRUE \] }
       }
}  
@API.state: \[#RELEASED\_FOR\_SAP\_CLOUD\_PLATFORM\]
annotation MappingRole
: Boolean default true  
;

Metadata-Annotations

annotation Metadata {
  @Scope:\[[#ENTITY](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abencds_f1_entity_annotations.htm)\]
  @CompatibilityContract: {
      c1: {
          usageAllowed: true,
          allowedChanges: {
              annotation: \[#ADD\],
              value: \[#FALSE\_TO\_TRUE\]
          }
      },
      c2.usageAllowed: false
  }
  allowExtensions : Boolean default true;
  @Scope:\[[#VIEW](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abencds_f1_view_entity_annotations.htm)\]
  @CompatibilityContract: {
      c1: {
          usageAllowed: true,
          allowedChanges: {
              annotation: \[#NONE\],
              value: \[#NONE\]
          }
      },
      c2: {
          usageAllowed: true,
          allowedChanges: {
              annotation: \[#NONE\],
              value: \[#NONE\]
          }
      }
  }
  @API.state: \[#RELEASED\_FOR\_SAP\_CLOUD\_PLATFORM\]
  ignorePropagatedAnnotations : Boolean default true;
  @MetadataExtension.usageAllowed : true
  @Scope:\[[#ANNOTATE](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abencds_f1_metadata_ext_annos.htm)\]
  @CompatibilityContract.c1: {
      usageAllowed: true,
      allowedChanges: {
          annotation: \[#NONE\],
          value: \[#NONE\]
      }
  }
  @CompatibilityContract.c2.usageAllowed: false
  layer : Integer  
    enum {
      CORE;      
      LOCALIZATION;
      INDUSTRY;
      PARTNER;
      CUSTOMER;
    };
};

MetadataExtension-Annotations

@Scope: \[[#ANNOTATION](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abencds_f1_define_anno_annos.htm)\]
annotation MetadataExtension {
  usageAllowed : Boolean default true;
};

ObjectModel-Annotations

See [Framework Specific Annotation Definitions](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abencds_annotations_frmwrk_ddla.htm).

Scope\[ \]-Annotations

@Scope: \[[#ANNOTATION](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abencds_f1_define_anno_annos.htm)\]
annotation Scope : array of String(20)  
  enum {  
    ENTITY;                
    VIEW;                  
    TABLE\_FUNCTION;        
    EXTEND\_VIEW;          
    ROLE;                  
    ACCESSPOLICY;          
    ANNOTATION;            
    ANNOTATE;              
    SERVICE;              
    CUSTOM\_ENTITY;        
    HIERARCHY;            
    PARAMETER;            
    ELEMENT;              
    ASPECT;                
    PFCG\_MAPPING;          
    SIMPLE\_TYPE;          
  };

Semantics-Annotations

...
define annotation Semantics
{
  ...
   @API.state: \[ #RELEASED\_FOR\_SAP\_CLOUD\_PLATFORM \]        
   amount      
   {      
       currencyCode    : ElementRef;  
   };      
   @Scope:\[[#ELEMENT](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abencds_f1_element_annotation.htm)\]
   @CompatibilityContract: {
   c1: { usageAllowed: true,
         allowedChanges.annotation: \[ #NONE \],
         allowedChanges.value: \[ #NONE \] },    
   c2: { usageAllowed: true,
         allowedChanges.annotation: \[ #NONE \],
         allowedChanges.value: \[ #NONE \] } }  
   @API.state: \[ #RELEASED\_FOR\_SAP\_CLOUD\_PLATFORM \]          
   quantity      
   {      
       unitOfMeasure   : ElementRef;  
   };      
   @Scope:\[[#ELEMENT](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abencds_f1_element_annotation.htm)\]
   @CompatibilityContract: {
   c1: { usageAllowed: true,
         allowedChanges.annotation: \[ #NONE \],
         allowedChanges.value: \[ #NONE \] },    
   c2: { usageAllowed: true,
         allowedChanges.annotation: \[ #NONE \],
         allowedChanges.value: \[ #NONE \] } }  
   @API.state: \[ #RELEASED\_FOR\_SAP\_CLOUD\_PLATFORM \]          
   currencyCode        : Boolean default true;
   @Scope:\[[#ELEMENT](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abencds_f1_element_annotation.htm)\]
   @CompatibilityContract: {
   c1: { usageAllowed: true,
         allowedChanges.annotation: \[ #NONE \],
         allowedChanges.value: \[ #NONE \] },    
   c2: { usageAllowed: true,
         allowedChanges.annotation: \[ #NONE \],
         allowedChanges.value: \[ #NONE \] } }      
   @API.state: \[ #RELEASED\_FOR\_SAP\_CLOUD\_PLATFORM \]      
   unitOfMeasure       : Boolean default true;  
   @Scope:\[[#ELEMENT](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abencds_f1_element_annotation.htm)\]
   @CompatibilityContract: {
   c1: { usageAllowed: false },    
   c2: { usageAllowed: false } }  
   booleanIndicator    : Boolean default true;
  ...
};



**📖 Source**: [abencds_annotations_abap_ddla.htm](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abencds_annotations_abap_ddla.htm)

### abencds_annotations_abap_tables.htm

> **📖 Official SAP Documentation**: [abencds_annotations_abap_tables.htm](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abencds_annotations_abap_tables.htm)
> **🔍 Direct Link**: This section contains the complete content from the official SAP ABAP documentation page.


  

* * *

AS ABAP Release 754, ©Copyright 2019 SAP SE. All rights reserved.

[ABAP Keyword Documentation](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenabap.htm) →  [ABAP - Dictionary](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenabap_dictionary.htm) →  [ABAP CDS in ABAP Dictionary](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abencds.htm) →  [ABAP CDS - Annotations](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abencds_annotations.htm) →  [ABAP CDS - SAP Annotations](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abencds_annotations_sap.htm) →  [ABAP CDS - ABAP Annotations](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abencds_annotations_abap.htm) → 

ABAP CDS - ABAP Annotation Syntax

The following tables summarize the [annotation syntax](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abencds_annotation_syntax_glosry.htm "Glossary Entry") of all [ABAP annotations](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abencore_annotation_glosry.htm "Glossary Entry") in [CDS DDL](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abencds_ddl_glosry.htm "Glossary Entry") and [CDS DCL](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abencds_dcl_glosry.htm "Glossary Entry") in ABAP CDS. Any specified subannotations are shown using [chainings](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abencds_annotations_syntax_name.htm). If square brackets \[ \] are specified after a name in the column Annotation, this means that the annotation in front of the square brackets is an [annotation array](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenannotation_array_glosry.htm "Glossary Entry"). Any enumeration symbols in an annotation are specified in the column Enums. The column Default shows the default values applied to the evaluation when an annotation is specified without a value. The columns Text and MDE indicate whether the annotation values are translatable texts and whether the annotation can be specified in a [metadata extension](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abencds_metadata_extension_glosry.htm "Glossary Entry"). The API column indicates whether the annotation can be used in CDS entities defined in [ABAP for SAP Cloud Platform](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenabap_for_sap_cloud_glosry.htm "Glossary Entry"). The detailed meanings of each ABAP annotation is documented for the corresponding [scope](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abencds_annotations_scopes.htm) in this documentation.

-   [AbapAnnotation-Annotations](#abencds-annotations-abap-tables-1--------abapcatalog-annotations---@ITOC@@ABENCDS_ANNOTATIONS_ABAP_TABLES_2)

-   [AccessControl-Annotations](#abencds-annotations-abap-tables-3--------api-annotations---@ITOC@@ABENCDS_ANNOTATIONS_ABAP_TABLES_4)

-   [ClientDependent-Annotations](#abencds-annotations-abap-tables-5--------clienthandling-annotations---@ITOC@@ABENCDS_ANNOTATIONS_ABAP_TABLES_6)

-   [CompatibilityContract-Annotations](#abencds-annotations-abap-tables-7--------dataaging-annotations---@ITOC@@ABENCDS_ANNOTATIONS_ABAP_TABLES_8)

-   [EndUserText-Annotations](#abencds-annotations-abap-tables-9--------environment-annotations---@ITOC@@ABENCDS_ANNOTATIONS_ABAP_TABLES_10)

-   [LanguageDependency-Annotations](#abencds-annotations-abap-tables-11--------mappingrole-annotations---@ITOC@@ABENCDS_ANNOTATIONS_ABAP_TABLES_12)

-   [Metadata-Annotations](#abencds-annotations-abap-tables-13--------metadataextension-annotations---@ITOC@@ABENCDS_ANNOTATIONS_ABAP_TABLES_14)

-   [ObjectModel-Annotations](#abencds-annotations-abap-tables-15--------scope------annotations---@ITOC@@ABENCDS_ANNOTATIONS_ABAP_TABLES_16)

-   [Semantics-Annotations](#abencds-annotations-abap-tables-17---note--see-also--abap-annotation-definitions--javascript-call-link---abencds-annotations-abap-ddla-htm-------abapannotation-annotations--annotation--meaning--scope--typ--enums--default--text--mde--api--abapannotation-definitionhidden--annotation-definition--test-annotation-or-demonstration-annotation-that-cannot-be-used-in-production-cds-source-code---annotation-definition--javascript-call-link---abencds-f1-define-anno-annos-htm------boolean------true--------------abapcatalog-annotations--annotation--meaning--scope--typ--enums--default--text--mde--api--abapcatalog-buffering-numberofkeyfields--table-buffering--number-of-key-fields-when-buffering-generic-areas---view--javascript-call-link---abencds-f1-view-entity-annotations-htm------integer------000----------released--for--sap--cloud--platform--abapcatalog-buffering-status--table-buffering--enables-and-disables-buffering---view--javascript-call-link---abencds-f1-view-entity-annotations-htm------string-20----active--not--allowed--switched--off---switched--off----------released--for--sap--cloud--platform--abapcatalog-buffering-type--table-buffering--defines-the-buffering-type---view--javascript-call-link---abencds-f1-view-entity-annotations-htm------string-10----full--generic--none--single---none----------released--for--sap--cloud--platform--abapcatalog-compiler-comparefilter--cds-view--specifies-how-filter-conditions-are-evaluated-in-path-expressions---view--javascript-call-link---abencds-f1-view-entity-annotations-htm------boolean------true----------released--for--sap--cloud--platform--abapcatalog-dbhints------dbsystem--obsolete--replaced-by-consumption-dbhintscalculatedby---view--javascript-call-link---abencds-f1-view-entity-annotations-htm------string-3----ada--all--ase--db2--db4--db6--hdb--inf--mss--ora--------------released--for--sap--cloud--platform--abapcatalog-dbhints------hint--obsolete--replaced-by-consumption-dbhints--------view--javascript-call-link---abencds-f1-view-entity-annotations-htm------string-1298-------------------released--for--sap--cloud--platform--abapcatalog-preservekey--cds-view--specifies-the-definition-of-the-key-fields-in-the-associated-database-view---view--javascript-call-link---abencds-f1-view-entity-annotations-htm------boolean------true----------released--for--sap--cloud--platform--abapcatalog-sqlviewappendname--cds-view-extension--name-of-the-append-view---view-extension--javascript-call-link---abencds-f1-extend-view-annotations-htm------string-16-------------------released--for--sap--cloud--platform--abapcatalog-sqlviewname--cds-view--name-of-the-database-view---view--javascript-call-link---abencds-f1-view-entity-annotations-htm------string-16-------------------released--for--key--user--appsreleased--for--sap--cloud--platform--abapcatalog-viewenhancementcategory-------cds-view--specifies-how-the-view-can-be-extended-using-cds-view-extensions---view--javascript-call-link---abencds-f1-view-entity-annotations-htm------string-20----group--by--none--projection--list--union--------------released--for--sap--cloud--platform--accesscontrol-annotations--annotation--meaning--scope--typ--enums--default--text--mde--api--accesscontrol-authorizationcheck--cds-access-control--specifies-implicit-access-control---hierarchy--javascript-call-link---abencds-f1-hierarchy-annotations-htm------table-function--javascript-call-link---abencds-f1-function-annotations-htm------view--javascript-call-link---abencds-f1-view-entity-annotations-htm------string-20----check--not--allowed--not--required--privileged--only---check----------released--for--sap--cloud--platform--api-annotations--annotation--meaning--scope--typ--enums--default--text--mde--api--api-element-releasestate--element-annotation--release-element---element--javascript-call-link---abencds-f1-element-annotation-htm------string-30----deprecated------------------api-element-successor--element-annotation--successor-of-rejected-element---element--javascript-call-link---abencds-f1-element-annotation-htm------elementref----------------------api-state-------annotation-definition--release-annotation---annotation-definition--javascript-call-link---abencds-f1-define-anno-annos-htm------string-40----not--released--released--for--key--user--apps--released--for--sap--cloud--platform------------------clientdependent-annotations--annotation--meaning--scope--typ--enums--default--text--mde--api--clientdependent--specifies-client-dependency-and-how-clients-are-handled--obsolete----table-function--javascript-call-link---abencds-f1-function-annotations-htm------view--javascript-call-link---abencds-f1-view-entity-annotations-htm------boolean------true--------------clienthandling-annotations--annotation--meaning--scope--typ--enums--default--text--mde--api--clienthandling-algorithm--specifies-client-handling---table-function--javascript-call-link---abencds-f1-function-annotations-htm------view--javascript-call-link---abencds-f1-view-entity-annotations-htm------string-20----automated--none--session--variable--------------released--for--sap--cloud--platform--clienthandling-type--specifies-client-dependency---table-function--javascript-call-link---abencds-f1-function-annotations-htm------view--javascript-call-link---abencds-f1-view-entity-annotations-htm------string-20----client--dependent--client--independent--inherited---inherited----------released--for--sap--cloud--platform--compatibilitycontract-annotations--annotation--meaning--scope--typ--enums--default--text--mde--api--compatibilitycontract-c0-allowedchanges-annotation-------modifiability-of-an-annotation-in-released-cds-entities---annotation-definition--javascript-call-link---abencds-f1-define-anno-annos-htm------string-20----add--any--custom--none--remove------------------compatibilitycontract-c0-allowedchanges-value-------modifiability-of-annotation-values-in-released-cds-entities---annotation-definition--javascript-call-link---abencds-f1-define-anno-annos-htm------string-20----add--any--custom--false--to--true--none--remove--true--to--false--update------------------compatibilitycontract-c0-usageallowed--usability-of-an-annotation-in-released-cds-entities---annotation-definition--javascript-call-link---abencds-f1-define-anno-annos-htm------boolean------true--------------compatibilitycontract-c1-allowedchanges-annotation-------modifiability-of-an-annotation-in-released-cds-entities---annotation-definition--javascript-call-link---abencds-f1-define-anno-annos-htm------string-20----add--any--custom--none--remove------------------compatibilitycontract-c1-allowedchanges-value-------modifiability-of-annotation-values-in-released-cds-entities---annotation-definition--javascript-call-link---abencds-f1-define-anno-annos-htm------string-20----add--any--custom--false--to--true--none--remove--true--to--false--update------------------compatibilitycontract-c1-usageallowed--usability-of-an-annotation-in-released-cds-entities---annotation-definition--javascript-call-link---abencds-f1-define-anno-annos-htm------boolean------true--------------compatibilitycontract-c2-allowedchanges-annotation-------modifiability-of-an-annotation-in-released-cds-entities---annotation-definition--javascript-call-link---abencds-f1-define-anno-annos-htm------string-20----add--any--custom--none--remove------------------compatibilitycontract-c2-allowedchanges-value-------modifiability-of-annotation-values-in-released-cds-entities---annotation-definition--javascript-call-link---abencds-f1-define-anno-annos-htm------string-20----add--any--custom--false--to--true--none--remove--true--to--false--update------------------compatibilitycontract-c2-usageallowed--usability-of-an-annotation-in-released-cds-entities---annotation-definition--javascript-call-link---abencds-f1-define-anno-annos-htm------boolean------true--------------dataaging-annotations--annotation--meaning--scope--typ--enums--default--text--mde--api--dataaging-noagingrestriction--data-aging-on-sap-hana--specifies-how-old-data-is-handled---table-function--javascript-call-link---abencds-f1-function-annotations-htm------view--javascript-call-link---abencds-f1-view-entity-annotations-htm------boolean------true--------------endusertext-annotations--annotation--meaning--scope--typ--enums--default--text--mde--api--endusertext-heading--texts--implicit-annotation-for-data-element-header-----string-55-----------x------not--released--endusertext-label--texts--short-text-connected-to-translation---access-policy--javascript-call-link---abencds-f1-define-accesspolicy-htm------element--javascript-call-link---abencds-f1-element-annotation-htm------entity--javascript-call-link---abencds-f1-entity-annotations-htm------view-extension--javascript-call-link---abencds-f1-extend-view-annotations-htm------parameter--javascript-call-link---abencds-f1-parameter-annotations-htm------pfcg-mapping--javascript-call-link---abencds-f1-define-pfcg-mapping-htm------role--javascript-call-link---abencds-f1-dcl-role-annotations-htm------string-60-----------x--x--released--for--sap--cloud--platform--endusertext-quickinfo--texts--tooltip-connected-to-translation---meta-data-extension--javascript-call-link---abencds-f1-metadata-ext-annos-htm------element--javascript-call-link---abencds-f1-element-annotation-htm------parameter--javascript-call-link---abencds-f1-parameter-annotations-htm------string-100-----------x--x--released--for--sap--cloud--platform--environment-annotations--annotation--meaning--scope--typ--enums--default--text--mde--api--environment-sql-passvalue--defines-pass-by-value-of-host-variables-in-comparisons-in-abap-sql---element--javascript-call-link---abencds-f1-element-annotation-htm------boolean------true----------released--for--sap--cloud--platform--environment-systemfield--environment--assigns-an-abap-system-field---parameter--javascript-call-link---abencds-f1-parameter-annotations-htm------string-20----client--system--date--system--language--system--time--user--------------released--for--sap--cloud--platform--languagedependency-annotations--annotation--meaning--scope--typ--enums--default--text--mde--api--languagedependency-maxlength--annotation-definition--specifies-the-translatibility-of-texts---annotation-definition--javascript-call-link---abencds-f1-define-anno-annos-htm------integer----------------------mappingrole-annotations--annotation--meaning--scope--typ--enums--default--text--mde--api--mappingrole--access-control--specifies-the-assignment-of-a-cds-role-to-users---role--javascript-call-link---abencds-f1-dcl-role-annotations-htm------boolean------true----------released--for--sap--cloud--platform--metadata-annotations--annotation--meaning--scope--typ--enums--default--text--mde--api--metadata-allowextensions--metadata--specifies-extensibility-using-metadata-extensions---entity--javascript-call-link---abencds-f1-entity-annotations-htm------boolean------true--------------metadata-ignorepropagatedannotations--metadata--specifies-how-propagated-annotations-are-evaluated-using-the-class-cl--dd--ddl--annotation--service---view--javascript-call-link---abencds-f1-view-entity-annotations-htm------boolean------true----------released--for--sap--cloud--platform--metadata-layer--metadata--specfies-layer-in-cds-metadata-extension---meta-data-extension--javascript-call-link---abencds-f1-metadata-ext-annos-htm------integer---core--customer--industry--localization--partner----------x------metadataextension-annotations--annotation--meaning--scope--typ--enums--default--text--mde--api--metadataextension-usageallowed--annotation-definition--specifies-the-distribution-of-the-annotation-in-cds-metadata-extensions---annotation-definition--javascript-call-link---abencds-f1-define-anno-annos-htm------boolean------true--------------objectmodel-annotations--annotation--meaning--scope--typ--enums--default--text--mde--api--objectmodel-usagetype-dataclass--undocumented---table-function--javascript-call-link---abencds-f1-function-annotations-htm------view--javascript-call-link---abencds-f1-view-entity-annotations-htm------string-30----customizing--master--meta--mixed--organizational--transactional---mixed--------------objectmodel-usagetype-servicequality--undocumented---table-function--javascript-call-link---abencds-f1-function-annotations-htm------view--javascript-call-link---abencds-f1-view-entity-annotations-htm------string-30----a--b--c--d--p--x---x--------------objectmodel-usagetype-sizecategory--undocumented---table-function--javascript-call-link---abencds-f1-function-annotations-htm------view--javascript-call-link---abencds-f1-view-entity-annotations-htm------string-3----l--m--s--xl--xxl---s--------------scope------annotations--annotation--meaning--scope--typ--enums--default--text--mde--api--scope-------annotation-definition--defines-the-range-of-validity-of-the-annotation----annotation-definition--javascript-call-link---abencds-f1-define-anno-annos-htm------string-20----accesspolicy--annotate--annotation--aspect--custom--entity--element--entity--extend--view--hierarchy--parameter--pfcg--mapping--role--service--simple--type--table--function--view------------------semantics-annotations--annotation--meaning--scope--typ--enums--default--text--mde--api--semantics-amount-currencycode--currency-field---element--javascript-call-link---abencds-f1-element-annotation-htm------elementref------------------released--for--sap--cloud--platform--semantics-currencycode--currency-key---element--javascript-call-link---abencds-f1-element-annotation-htm------boolean------true----------released--for--sap--cloud--platform--semantics-quantity-unitofmeasure--quantity-field---element--javascript-call-link---abencds-f1-element-annotation-htm------elementref------------------released--for--sap--cloud--platform--semantics-unitofmeasure--unit-key---element--javascript-call-link---abencds-f1-element-annotation-htm------boolean------true----------released--for--sap--cloud--platform------------abap-keyword-documentation---abap---dictionary---abap-cds-in-abap-dictionary---abap-cds---annotations---abap-cds---specifying-annotations---abap-cds---annotation-syntax----files----5-----difficulty----advanced----abap-keyword-documentation---abap---dictionary---abap-cds-in-abap-dictionary---abap-cds---annotations---abap-cds---sap-annotations---abap-cds---abap-annotations--included-pages--3---------source-----abencds-annotations-abap-tables-htm--https---help-sap-com-doc-abapdocu-754-index-htm-7-54-en-us-abencds-annotations-abap-tables-htm-------abencds-annotations-abap-htm-------------as-abap-release-754---copyright-2019-sap-se--all-rights-reserved----abap-keyword-documentation--javascript-call-link---abenabap-htm---------abap---dictionary--javascript-call-link---abenabap-dictionary-htm---------abap-cds-in-abap-dictionary--javascript-call-link---abencds-htm---------abap-cds---annotations--javascript-call-link---abencds-annotations-htm---------abap-cds---sap-annotations--javascript-call-link---abencds-annotations-sap-htm---------abap-cds---abap-annotations--abap-annotations-are--sap-annotations--javascript-call-link---abensap-annotation-glosry-htm-----glossary-entry---that-are-evaluated-by-the-abap-runtime-environment--the-following-sections-show-the-associated--annotation-definitions--javascript-call-link---abencds-anno-definition-glosry-htm-----glossary-entry---and-the--annotation-syntax--javascript-call-link---abencds-annotation-syntax-glosry-htm-----glossary-entry----------abap-annotation-definitions--javascript-call-link---abencds-annotations-abap-ddla-htm-----------abap-annotation-syntax--javascript-call-link---abencds-annotations-abap-tables-htm------the-detailed-meanings-of-the-abap-annotations-is-documented-for-the-corresponding--scope--javascript-call-link---abencds-annotations-scopes-htm-----in-this-documentation---note--an-abap-annotation-can-also-be-evaluated-by-frameworks-of-other-software-components---continue--abap-cds---abap-annotation-definitions--javascript-call-link---abencds-annotations-abap-ddla-htm------abap-cds---abap-annotation-syntax--javascript-call-link---abencds-annotations-abap-tables-htm-------------source-----abencds-annotations-abap-htm--https---help-sap-com-doc-abapdocu-754-index-htm-7-54-en-us-abencds-annotations-abap-htm-------abencds-annotations-abap-ddla-htm-------------as-abap-release-754---copyright-2019-sap-se--all-rights-reserved----abap-keyword-documentation--javascript-call-link---abenabap-htm---------abap---dictionary--javascript-call-link---abenabap-dictionary-htm---------abap-cds-in-abap-dictionary--javascript-call-link---abencds-htm---------abap-cds---annotations--javascript-call-link---abencds-annotations-htm---------abap-cds---sap-annotations--javascript-call-link---abencds-annotations-sap-htm---------abap-cds---abap-annotations--javascript-call-link---abencds-annotations-abap-htm---------abap-cds---abap-annotation-definitions--the-following--ddla-source-code--javascript-call-link---abenddla-source-code-glosry-htm-----glossary-entry---shows-the--cds-annotation-definitions--javascript-call-link---abencds-anno-definition-glosry-htm-----glossary-entry---in-all--abap-annotations--javascript-call-link---abencore-annotation-glosry-htm-----glossary-entry---in--cds-ddl--javascript-call-link---abencds-ddl-glosry-htm-----glossary-entry---and--cds-dcl--javascript-call-link---abencds-dcl-glosry-htm-----glossary-entry---in-abap-cds-------the-meaning-of-the--ddla-source-code--javascript-call-link---abenddla-source-code-glosry-htm-----glossary-entry---shown-here-can-be-found-in-the-documentation-for--define-annotation--javascript-call-link---abencds-f1-define-annotation-htm-----------the-semantics-of-the-annotations-can-be-found-in-the-links-in-the-ddla-source-code---the-detailed-meanings-of-these-abap-annotations-are-described-under-the-relevant--scope--javascript-call-link---abencds-annotations-scopes-htm-----defined-after--Scope](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abencds_f1_define_anno_annos.htm) in the documentation.

-   [AbapAnnotation-Annotations](#abencds-annotations-abap-ddla-1--------abapcatalog-annotations---@ITOC@@ABENCDS_ANNOTATIONS_ABAP_DDLA_2)

-   [AccessControl-Annotations](#abencds-annotations-abap-ddla-3--------api-annotations---@ITOC@@ABENCDS_ANNOTATIONS_ABAP_DDLA_4)

-   [ClientDependent-Annotations](#abencds-annotations-abap-ddla-5--------clienthandling-annotations---@ITOC@@ABENCDS_ANNOTATIONS_ABAP_DDLA_6)

-   [CompatibilityContract-Annotations](#abencds-annotations-abap-ddla-7--------dataaging-annotations---@ITOC@@ABENCDS_ANNOTATIONS_ABAP_DDLA_8)

-   [EndUserText-Annotations](#abencds-annotations-abap-ddla-9--------environment-annotations---@ITOC@@ABENCDS_ANNOTATIONS_ABAP_DDLA_10)

-   [LanguageDependency-Annotations](#abencds-annotations-abap-ddla-11--------mappingrole-annotations---@ITOC@@ABENCDS_ANNOTATIONS_ABAP_DDLA_12)

-   [Metadata-Annotations](#abencds-annotations-abap-ddla-13--------metadataextension-annotations---@ITOC@@ABENCDS_ANNOTATIONS_ABAP_DDLA_14)

-   [ObjectModel-Annotations](#abencds-annotations-abap-ddla-15--------scope------annotations---@ITOC@@ABENCDS_ANNOTATIONS_ABAP_DDLA_16)

-   [Semantics-Annotations](#abencds-annotations-abap-ddla-17---note--see-also--abap-annotation-syntax--javascript-call-link---abencds-annotations-abap-tables-htm-------abapannotation-annotations--Scope: \[[#ANNOTATION](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abencds_f1_define_anno_annos.htm)\]
annotation AbapAnnotation {
  definitionHidden : Boolean default true;
};

AbapCatalog-Annotations

@Scope:\[[#VIEW](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abencds_f1_view_entity_annotations.htm)\]
@CompatibilityContract.c2.usageAllowed: false
@API.state: \[#RELEASED\_FOR\_SAP\_CLOUD\_PLATFORM\]
annotation AbapCatalog
{
   @CompatibilityContract.c1: {
       usageAllowed: true,
       allowedChanges: {
           annotation: \[#NONE\],
           value: \[#NONE\]
       }
   }
   buffering
   {
      status : String(20) enum { NOT\_ALLOWED; ACTIVE; SWITCHED\_OFF; } default #SWITCHED\_OFF;
      type : String(10) enum { SINGLE; GENERIC; FULL; NONE; } default #NONE;
      numberOfKeyFields : Integer default 000;
   };
   @CompatibilityContract.c1: {
       usageAllowed: true,
       allowedChanges: {
           annotation: \[#ANY\],
           value: \[#ANY\]
       }
   }
   dbHints : array of
   {
      dbSystem : String(3) enum
      {
         ADA;
         DB2;
         DB4;
         DB6;
         INF;
         MSS;
         ORA;
         HDB;
         ASE;
         ALL;
      };
      hint : String(1298);
   };
   @CompatibilityContract.c1: {
       usageAllowed: true,
       allowedChanges: {
           annotation: \[#NONE\],
           value: \[#NONE\]
       }
   }
   viewEnhancementCategory : array of String(20) enum
   {
      NONE;
      PROJECTION\_LIST;
      GROUP\_BY;
      UNION;
   };
   @CompatibilityContract: {
       c1: {
           usageAllowed: true,
           allowedChanges: {
               annotation: \[#NONE\],
               value: \[#NONE\]
           }
       },
       c2: {
           usageAllowed: true,
           allowedChanges: {
               annotation: \[#NONE\],
               value: \[#NONE\]
           }
       }
   }
   @API.state: \[#RELEASED\_FOR\_SAP\_CLOUD\_PLATFORM, #RELEASED\_FOR\_KEY\_USER\_APPS\]    
   sqlViewName : String(16);
   @CompatibilityContract.c1: {
       usageAllowed: true,
       allowedChanges: {
           annotation: \[#ADD\],
           value: \[#FALSE\_TO\_TRUE\]
       }
   }
   @CompatibilityContract.c2: {
       usageAllowed: true,
       allowedChanges: {
           annotation: \[#ADD\],
           value: \[#FALSE\_TO\_TRUE\]
       }
   }    
   preserveKey : Boolean default true;
   @CompatibilityContract: {
       c1: {
           usageAllowed: true,
           allowedChanges: {
               annotation: \[#NONE\],
               value: \[#NONE\]
           }
       },
       c2: {
           usageAllowed: true,
           allowedChanges: {
               annotation: \[#NONE\],
               value: \[#NONE\]
           }
       }
   }
   compiler
   {
      compareFilter : Boolean default true;
      @Scope:\[[#ELEMENT](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abencds_f1_element_annotation.htm)\]
      @AbapAnnotation.definitionHidden: true
      @CompatibilityContract: {
        c1: {
            usageAllowed: true,
            allowedChanges: {
                annotation: \[#ANY\],
                value: \[#ANY\]
            }
        },
        c2: {
            usageAllowed: true,
            allowedChanges: {
                annotation: \[#ANY\],
                value: \[#ANY\]
            }
        }
      }
      @API.state: \[#NOT\_RELEASED\]        
      caseJoin : Boolean default true;
   };
   @AbapAnnotation.definitionHidden: true
   @CompatibilityContract.c1.usageAllowed: false
   @API.state: \[#NOT\_RELEASED\]
   internal
   {  
      @Scope:\[[#ELEMENT](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abencds_f1_element_annotation.htm)\]
      isMandt : Boolean default true;
      @Scope: \[[#VIEW](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abencds_f1_view_entity_annotations.htm), [#EXTEND\_VIEW](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abencds_f1_extend_view_annotations.htm)\]
      @CompatibilityContract: {
        c1: {
            usageAllowed: true,
            allowedChanges: {
                annotation: \[#ANY\],
                value: \[#ANY\]
            }
        },
        c2: {
            usageAllowed: true,
            allowedChanges: {
                annotation: \[#ANY\],
                value: \[#ANY\]
            }
        }
      }      
      setChange : String(30);  
      inheritedType : Boolean default true;    
   };
   @Scope:\[[#EXTEND\_VIEW](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abencds_f1_extend_view_annotations.htm)\]
   @CompatibilityContract.c1.usageAllowed: false
   sqlViewAppendName : String(16);
   @Scope:\[[#ENTITY](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abencds_f1_entity_annotations.htm)\]
   @MetadataExtension.usageAllowed: false
   @AbapAnnotation.definitionHidden: true
   @CompatibilityContract.c1.usageAllowed: false
   @API.state: \[#NOT\_RELEASED\]    
   sqlName : String(256);    
};

AccessControl-Annotations

See [Framework Specific Annotation Definitions](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abencds_annotations_frmwrk_ddla.htm).

API-Annotations

define annotation API
{
  @Scope:\[[#ANNOTATION](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abencds_f1_define_anno_annos.htm)\]
  state: array of String(40) enum {
    NOT\_RELEASED;
    RELEASED\_FOR\_SAP\_CLOUD\_PLATFORM;
    RELEASED\_FOR\_KEY\_USER\_APPS;
  };
  @Scope:\[[#ELEMENT](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abencds_f1_element_annotation.htm)\]
  @CompatibilityContract.c1.usageAllowed: true
  @CompatibilityContract.c2.usageAllowed: false
  element {    
    @CompatibilityContract.c1.allowedChanges: {annotation: \[#CUSTOM\], value: \[#CUSTOM\]}
    releaseState: String(30) enum {DEPRECATED;};
    @CompatibilityContract.c1.allowedChanges: {annotation: \[#CUSTOM\], value: \[#CUSTOM\]}
    successor: ElementRef;
  };
};

ClientDependent-Annotations

Obsolete annotations for scopes [#VIEW](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abencds_f1_view_entity_annotations.htm), [#TABLE\_FUNCTION](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abencds_f1_view_entity_annotations.htm).

ClientHandling-Annotations

@Scope:\[[#VIEW](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abencds_f1_view_entity_annotations.htm), [#TABLE\_FUNCTION](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abencds_f1_function_annotations.htm)\]
@CompatibilityContract: {
    c1: {
        usageAllowed: true,
        allowedChanges: {
            annotation: \[#NONE\],
            value: \[#NONE\]
        }
    },
    c2: {
        usageAllowed: true,
        allowedChanges: {
            annotation: \[#NONE\],
            value: \[#NONE\]
        }
    }
}  
@API.state: \[#RELEASED\_FOR\_SAP\_CLOUD\_PLATFORM\]
annotation ClientHandling
{
   type : String(20) enum { CLIENT\_DEPENDENT; CLIENT\_INDEPENDENT; INHERITED; } default #INHERITED;
   algorithm : String(20) enum { NONE; AUTOMATED; SESSION\_VARIABLE; };
};

CompatibilityContract-Annotations

@Scope:\[[#ANNOTATION](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abencds_f1_define_anno_annos.htm)\]
define annotation CompatibilityContract {
  c0 {  
    usageAllowed: Boolean default true;
    allowedChanges {
      annotation: array of String(20) enum {ADD; REMOVE; ANY; NONE; CUSTOM;};
      value: array of String(20) enum {ADD; REMOVE; UPDATE; FALSE\_TO\_TRUE; TRUE\_TO\_FALSE; ANY; NONE; CUSTOM;};
    };
  };
  c1 {  
    usageAllowed: Boolean default true;
    allowedChanges {
      annotation: array of String(20) enum {ADD; REMOVE; ANY; NONE; CUSTOM;};
      value: array of String(20) enum {ADD; REMOVE; UPDATE; FALSE\_TO\_TRUE; TRUE\_TO\_FALSE; ANY; NONE; CUSTOM;};
    };
  };
  c2 {  
    usageAllowed: Boolean default true;
    allowedChanges {
      annotation: array of String(20) enum {ADD; REMOVE; ANY; NONE; CUSTOM;};
      value: array of String(20) enum {ADD; REMOVE; UPDATE; FALSE\_TO\_TRUE; TRUE\_TO\_FALSE; ANY; NONE; CUSTOM;};
    };
  };    
}

DataAging-Annotations

@Scope:\[[#VIEW](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abencds_f1_view_entity_annotations.htm), [#TABLE\_FUNCTION](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abencds_f1_function_annotations.htm)\]
@CompatibilityContract: {
    c1: {
        usageAllowed: true,
        allowedChanges: {
            annotation: \[#ADD\],
            value: \[#FALSE\_TO\_TRUE\]
        }
    },
    c2: {
        usageAllowed: true,
        allowedChanges: {
            annotation: \[#ADD\],
            value: \[#FALSE\_TO\_TRUE\]
        }
    }
}  
annotation DataAging
{
   noAgingRestriction : Boolean default true;
};

EndUserText-Annotations

@CompatibilityContract: {
    c1: {
        usageAllowed: true,
        allowedChanges: {
            annotation: \[#ANY\],
            value: \[#ANY\]
        }
    },
    c2: {
        usageAllowed: true,
        allowedChanges: {
            annotation: \[#ANY\],
            value: \[#ANY\]
        }
    }        
}
@API.state: \[#RELEASED\_FOR\_SAP\_CLOUD\_PLATFORM\]
annotation EndUserText
{
   @MetadataExtension.usageAllowed : true
   @LanguageDependency.maxLength : 40
   @Scope:\[[#ENTITY](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abencds_f1_entity_annotations.htm), [#PARAMETER](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abencds_f1_parameter_annotations.htm), [#ELEMENT](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abencds_f1_element_annotation.htm), [#EXTEND\_VIEW](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abencds_f1_extend_view_annotations.htm), [#ROLE](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abencds_f1_dcl_role_annotations.htm), #ASPECT, [#PFCG\_MAPPING](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abencds_f1_define_pfcg_mapping.htm), [#ACCESSPOLICY](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abencds_f1_define_accesspolicy.htm), #SERVICE\]
   label : String(60);
   @MetadataExtension.usageAllowed : true
   @LanguageDependency.maxLength : 67  
   @Scope:\[[#ELEMENT](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abencds_f1_element_annotation.htm), [#PARAMETER](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abencds_f1_parameter_annotations.htm), [#ANNOTATE](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abencds_f1_metadata_ext_annos.htm)\]
   quickInfo : String(100);
   @LanguageDependency.maxLength : 37
   @Scope:\[#SIMPLE\_TYPE\]
   @API.state: \[#NOT\_RELEASED\]
   heading : String(55);
};

Environment-Annotations

@CompatibilityContract: {
    c1: {
        usageAllowed: true,
        allowedChanges: {
            annotation: \[#NONE\],
            value: \[#NONE\]
        }
    },
    c2.usageAllowed: false
}
@API.state: \[#RELEASED\_FOR\_SAP\_CLOUD\_PLATFORM\]
annotation Environment
{
   @Scope:\[[#PARAMETER](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abencds_f1_parameter_annotations.htm)\]
   systemField : String(20) enum { CLIENT; SYSTEM\_LANGUAGE; USER; SYSTEM\_DATE; SYSTEM\_TIME; };
   @Scope:\[[#ELEMENT](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abencds_f1_element_annotation.htm)\]
   sql
   {
      passValue : Boolean default true;
   };
};

LanguageDependency-Annotations

@Scope: \[[#ANNOTATION](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abencds_f1_define_anno_annos.htm)\]
annotation LanguageDependency {
  maxLength : Integer;
};

MappingRole-Annotations

@Scope:\[[#ROLE](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abencds_f1_dcl_role_annotations.htm)\]
@CompatibilityContract: {
   c1: { usageAllowed: true },
   c1: {
      allowedChanges: { annotation: \[#ADD, #REMOVE \],
                        value: \[#FALSE\_TO\_TRUE \] }
       },
   c2: { usageAllowed: true },  
   c2: {
      allowedChanges: { annotation: \[#ADD, #REMOVE \],
                        value: \[#FALSE\_TO\_TRUE \] }
       }
}  
@API.state: \[#RELEASED\_FOR\_SAP\_CLOUD\_PLATFORM\]
annotation MappingRole
: Boolean default true  
;

Metadata-Annotations

annotation Metadata {
  @Scope:\[[#ENTITY](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abencds_f1_entity_annotations.htm)\]
  @CompatibilityContract: {
      c1: {
          usageAllowed: true,
          allowedChanges: {
              annotation: \[#ADD\],
              value: \[#FALSE\_TO\_TRUE\]
          }
      },
      c2.usageAllowed: false
  }
  allowExtensions : Boolean default true;
  @Scope:\[[#VIEW](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abencds_f1_view_entity_annotations.htm)\]
  @CompatibilityContract: {
      c1: {
          usageAllowed: true,
          allowedChanges: {
              annotation: \[#NONE\],
              value: \[#NONE\]
          }
      },
      c2: {
          usageAllowed: true,
          allowedChanges: {
              annotation: \[#NONE\],
              value: \[#NONE\]
          }
      }
  }
  @API.state: \[#RELEASED\_FOR\_SAP\_CLOUD\_PLATFORM\]
  ignorePropagatedAnnotations : Boolean default true;
  @MetadataExtension.usageAllowed : true
  @Scope:\[[#ANNOTATE](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abencds_f1_metadata_ext_annos.htm)\]
  @CompatibilityContract.c1: {
      usageAllowed: true,
      allowedChanges: {
          annotation: \[#NONE\],
          value: \[#NONE\]
      }
  }
  @CompatibilityContract.c2.usageAllowed: false
  layer : Integer  
    enum {
      CORE;      
      LOCALIZATION;
      INDUSTRY;
      PARTNER;
      CUSTOMER;
    };
};

MetadataExtension-Annotations

@Scope: \[[#ANNOTATION](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abencds_f1_define_anno_annos.htm)\]
annotation MetadataExtension {
  usageAllowed : Boolean default true;
};

ObjectModel-Annotations

See [Framework Specific Annotation Definitions](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abencds_annotations_frmwrk_ddla.htm).

Scope\[ \]-Annotations

@Scope: \[[#ANNOTATION](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abencds_f1_define_anno_annos.htm)\]
annotation Scope : array of String(20)  
  enum {  
    ENTITY;                
    VIEW;                  
    TABLE\_FUNCTION;        
    EXTEND\_VIEW;          
    ROLE;                  
    ACCESSPOLICY;          
    ANNOTATION;            
    ANNOTATE;              
    SERVICE;              
    CUSTOM\_ENTITY;        
    HIERARCHY;            
    PARAMETER;            
    ELEMENT;              
    ASPECT;                
    PFCG\_MAPPING;          
    SIMPLE\_TYPE;          
  };

Semantics-Annotations

...
define annotation Semantics
{
  ...
   @API.state: \[ #RELEASED\_FOR\_SAP\_CLOUD\_PLATFORM \]        
   amount      
   {      
       currencyCode    : ElementRef;  
   };      
   @Scope:\[[#ELEMENT](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abencds_f1_element_annotation.htm)\]
   @CompatibilityContract: {
   c1: { usageAllowed: true,
         allowedChanges.annotation: \[ #NONE \],
         allowedChanges.value: \[ #NONE \] },    
   c2: { usageAllowed: true,
         allowedChanges.annotation: \[ #NONE \],
         allowedChanges.value: \[ #NONE \] } }  
   @API.state: \[ #RELEASED\_FOR\_SAP\_CLOUD\_PLATFORM \]          
   quantity      
   {      
       unitOfMeasure   : ElementRef;  
   };      
   @Scope:\[[#ELEMENT](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abencds_f1_element_annotation.htm)\]
   @CompatibilityContract: {
   c1: { usageAllowed: true,
         allowedChanges.annotation: \[ #NONE \],
         allowedChanges.value: \[ #NONE \] },    
   c2: { usageAllowed: true,
         allowedChanges.annotation: \[ #NONE \],
         allowedChanges.value: \[ #NONE \] } }  
   @API.state: \[ #RELEASED\_FOR\_SAP\_CLOUD\_PLATFORM \]          
   currencyCode        : Boolean default true;
   @Scope:\[[#ELEMENT](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abencds_f1_element_annotation.htm)\]
   @CompatibilityContract: {
   c1: { usageAllowed: true,
         allowedChanges.annotation: \[ #NONE \],
         allowedChanges.value: \[ #NONE \] },    
   c2: { usageAllowed: true,
         allowedChanges.annotation: \[ #NONE \],
         allowedChanges.value: \[ #NONE \] } }      
   @API.state: \[ #RELEASED\_FOR\_SAP\_CLOUD\_PLATFORM \]      
   unitOfMeasure       : Boolean default true;  
   @Scope:\[[#ELEMENT](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abencds_f1_element_annotation.htm)\]
   @CompatibilityContract: {
   c1: { usageAllowed: false },    
   c2: { usageAllowed: false } }  
   booleanIndicator    : Boolean default true;
  ...
};



**📖 Source**: [abencds_annotations_abap_ddla.htm](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abencds_annotations_abap_ddla.htm)

### abencds_annotations_abap_tables.htm

> **📖 Official SAP Documentation**: [abencds_annotations_abap_tables.htm](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abencds_annotations_abap_tables.htm)
> **🔍 Direct Link**: This section contains the complete content from the official SAP ABAP documentation page.


  

* * *

AS ABAP Release 754, ©Copyright 2019 SAP SE. All rights reserved.

[ABAP Keyword Documentation](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenabap.htm) →  [ABAP - Dictionary](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenabap_dictionary.htm) →  [ABAP CDS in ABAP Dictionary](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abencds.htm) →  [ABAP CDS - Annotations](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abencds_annotations.htm) →  [ABAP CDS - SAP Annotations](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abencds_annotations_sap.htm) →  [ABAP CDS - ABAP Annotations](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abencds_annotations_abap.htm) → 

ABAP CDS - ABAP Annotation Syntax

The following tables summarize the [annotation syntax](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abencds_annotation_syntax_glosry.htm "Glossary Entry") of all [ABAP annotations](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abencore_annotation_glosry.htm "Glossary Entry") in [CDS DDL](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abencds_ddl_glosry.htm "Glossary Entry") and [CDS DCL](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abencds_dcl_glosry.htm "Glossary Entry") in ABAP CDS. Any specified subannotations are shown using [chainings](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abencds_annotations_syntax_name.htm). If square brackets \[ \] are specified after a name in the column Annotation, this means that the annotation in front of the square brackets is an [annotation array](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenannotation_array_glosry.htm "Glossary Entry"). Any enumeration symbols in an annotation are specified in the column Enums. The column Default shows the default values applied to the evaluation when an annotation is specified without a value. The columns Text and MDE indicate whether the annotation values are translatable texts and whether the annotation can be specified in a [metadata extension](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abencds_metadata_extension_glosry.htm "Glossary Entry"). The API column indicates whether the annotation can be used in CDS entities defined in [ABAP for SAP Cloud Platform](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenabap_for_sap_cloud_glosry.htm "Glossary Entry"). The detailed meanings of each ABAP annotation is documented for the corresponding [scope](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abencds_annotations_scopes.htm) in this documentation.

-   [AbapAnnotation-Annotations](#abencds-annotations-abap-tables-1--------abapcatalog-annotations---@ITOC@@ABENCDS_ANNOTATIONS_ABAP_TABLES_2)

-   [AccessControl-Annotations](#abencds-annotations-abap-tables-3--------api-annotations---@ITOC@@ABENCDS_ANNOTATIONS_ABAP_TABLES_4)

-   [ClientDependent-Annotations](#abencds-annotations-abap-tables-5--------clienthandling-annotations---@ITOC@@ABENCDS_ANNOTATIONS_ABAP_TABLES_6)

-   [CompatibilityContract-Annotations](#abencds-annotations-abap-tables-7--------dataaging-annotations---@ITOC@@ABENCDS_ANNOTATIONS_ABAP_TABLES_8)

-   [EndUserText-Annotations](#abencds-annotations-abap-tables-9--------environment-annotations---@ITOC@@ABENCDS_ANNOTATIONS_ABAP_TABLES_10)

-   [LanguageDependency-Annotations](#abencds-annotations-abap-tables-11--------mappingrole-annotations---@ITOC@@ABENCDS_ANNOTATIONS_ABAP_TABLES_12)

-   [Metadata-Annotations](#abencds-annotations-abap-tables-13--------metadataextension-annotations---@ITOC@@ABENCDS_ANNOTATIONS_ABAP_TABLES_14)

-   [ObjectModel-Annotations](#abencds-annotations-abap-tables-15--------scope------annotations---@ITOC@@ABENCDS_ANNOTATIONS_ABAP_TABLES_16)

-   [Semantics-Annotations](#abencds-annotations-abap-tables-17---note--see-also--abap-annotation-definitions--javascript-call-link---abencds-annotations-abap-ddla-htm-------abapannotation-annotations--annotation--meaning--scope--typ--enums--default--text--mde--api--abapannotation-definitionhidden--annotation-definition--test-annotation-or-demonstration-annotation-that-cannot-be-used-in-production-cds-source-code---annotation-definition--javascript-call-link---abencds-f1-define-anno-annos-htm------boolean------true--------------abapcatalog-annotations--annotation--meaning--scope--typ--enums--default--text--mde--api--abapcatalog-buffering-numberofkeyfields--table-buffering--number-of-key-fields-when-buffering-generic-areas---view--javascript-call-link---abencds-f1-view-entity-annotations-htm------integer------000----------released--for--sap--cloud--platform--abapcatalog-buffering-status--table-buffering--enables-and-disables-buffering---view--javascript-call-link---abencds-f1-view-entity-annotations-htm------string-20----active--not--allowed--switched--off---switched--off----------released--for--sap--cloud--platform--abapcatalog-buffering-type--table-buffering--defines-the-buffering-type---view--javascript-call-link---abencds-f1-view-entity-annotations-htm------string-10----full--generic--none--single---none----------released--for--sap--cloud--platform--abapcatalog-compiler-comparefilter--cds-view--specifies-how-filter-conditions-are-evaluated-in-path-expressions---view--javascript-call-link---abencds-f1-view-entity-annotations-htm------boolean------true----------released--for--sap--cloud--platform--abapcatalog-dbhints------dbsystem--obsolete--replaced-by-consumption-dbhintscalculatedby---view--javascript-call-link---abencds-f1-view-entity-annotations-htm------string-3----ada--all--ase--db2--db4--db6--hdb--inf--mss--ora--------------released--for--sap--cloud--platform--abapcatalog-dbhints------hint--obsolete--replaced-by-consumption-dbhints--------view--javascript-call-link---abencds-f1-view-entity-annotations-htm------string-1298-------------------released--for--sap--cloud--platform--abapcatalog-preservekey--cds-view--specifies-the-definition-of-the-key-fields-in-the-associated-database-view---view--javascript-call-link---abencds-f1-view-entity-annotations-htm------boolean------true----------released--for--sap--cloud--platform--abapcatalog-sqlviewappendname--cds-view-extension--name-of-the-append-view---view-extension--javascript-call-link---abencds-f1-extend-view-annotations-htm------string-16-------------------released--for--sap--cloud--platform--abapcatalog-sqlviewname--cds-view--name-of-the-database-view---view--javascript-call-link---abencds-f1-view-entity-annotations-htm------string-16-------------------released--for--key--user--appsreleased--for--sap--cloud--platform--abapcatalog-viewenhancementcategory-------cds-view--specifies-how-the-view-can-be-extended-using-cds-view-extensions---view--javascript-call-link---abencds-f1-view-entity-annotations-htm------string-20----group--by--none--projection--list--union--------------released--for--sap--cloud--platform--accesscontrol-annotations--annotation--meaning--scope--typ--enums--default--text--mde--api--accesscontrol-authorizationcheck--cds-access-control--specifies-implicit-access-control---hierarchy--javascript-call-link---abencds-f1-hierarchy-annotations-htm------table-function--javascript-call-link---abencds-f1-function-annotations-htm------view--javascript-call-link---abencds-f1-view-entity-annotations-htm------string-20----check--not--allowed--not--required--privileged--only---check----------released--for--sap--cloud--platform--api-annotations--annotation--meaning--scope--typ--enums--default--text--mde--api--api-element-releasestate--element-annotation--release-element---element--javascript-call-link---abencds-f1-element-annotation-htm------string-30----deprecated------------------api-element-successor--element-annotation--successor-of-rejected-element---element--javascript-call-link---abencds-f1-element-annotation-htm------elementref----------------------api-state-------annotation-definition--release-annotation---annotation-definition--javascript-call-link---abencds-f1-define-anno-annos-htm------string-40----not--released--released--for--key--user--apps--released--for--sap--cloud--platform------------------clientdependent-annotations--annotation--meaning--scope--typ--enums--default--text--mde--api--clientdependent--specifies-client-dependency-and-how-clients-are-handled--obsolete----table-function--javascript-call-link---abencds-f1-function-annotations-htm------view--javascript-call-link---abencds-f1-view-entity-annotations-htm------boolean------true--------------clienthandling-annotations--annotation--meaning--scope--typ--enums--default--text--mde--api--clienthandling-algorithm--specifies-client-handling---table-function--javascript-call-link---abencds-f1-function-annotations-htm------view--javascript-call-link---abencds-f1-view-entity-annotations-htm------string-20----automated--none--session--variable--------------released--for--sap--cloud--platform--clienthandling-type--specifies-client-dependency---table-function--javascript-call-link---abencds-f1-function-annotations-htm------view--javascript-call-link---abencds-f1-view-entity-annotations-htm------string-20----client--dependent--client--independent--inherited---inherited----------released--for--sap--cloud--platform--compatibilitycontract-annotations--annotation--meaning--scope--typ--enums--default--text--mde--api--compatibilitycontract-c0-allowedchanges-annotation-------modifiability-of-an-annotation-in-released-cds-entities---annotation-definition--javascript-call-link---abencds-f1-define-anno-annos-htm------string-20----add--any--custom--none--remove------------------compatibilitycontract-c0-allowedchanges-value-------modifiability-of-annotation-values-in-released-cds-entities---annotation-definition--javascript-call-link---abencds-f1-define-anno-annos-htm------string-20----add--any--custom--false--to--true--none--remove--true--to--false--update------------------compatibilitycontract-c0-usageallowed--usability-of-an-annotation-in-released-cds-entities---annotation-definition--javascript-call-link---abencds-f1-define-anno-annos-htm------boolean------true--------------compatibilitycontract-c1-allowedchanges-annotation-------modifiability-of-an-annotation-in-released-cds-entities---annotation-definition--javascript-call-link---abencds-f1-define-anno-annos-htm------string-20----add--any--custom--none--remove------------------compatibilitycontract-c1-allowedchanges-value-------modifiability-of-annotation-values-in-released-cds-entities---annotation-definition--javascript-call-link---abencds-f1-define-anno-annos-htm------string-20----add--any--custom--false--to--true--none--remove--true--to--false--update------------------compatibilitycontract-c1-usageallowed--usability-of-an-annotation-in-released-cds-entities---annotation-definition--javascript-call-link---abencds-f1-define-anno-annos-htm------boolean------true--------------compatibilitycontract-c2-allowedchanges-annotation-------modifiability-of-an-annotation-in-released-cds-entities---annotation-definition--javascript-call-link---abencds-f1-define-anno-annos-htm------string-20----add--any--custom--none--remove------------------compatibilitycontract-c2-allowedchanges-value-------modifiability-of-annotation-values-in-released-cds-entities---annotation-definition--javascript-call-link---abencds-f1-define-anno-annos-htm------string-20----add--any--custom--false--to--true--none--remove--true--to--false--update------------------compatibilitycontract-c2-usageallowed--usability-of-an-annotation-in-released-cds-entities---annotation-definition--javascript-call-link---abencds-f1-define-anno-annos-htm------boolean------true--------------dataaging-annotations--annotation--meaning--scope--typ--enums--default--text--mde--api--dataaging-noagingrestriction--data-aging-on-sap-hana--specifies-how-old-data-is-handled---table-function--javascript-call-link---abencds-f1-function-annotations-htm------view--javascript-call-link---abencds-f1-view-entity-annotations-htm------boolean------true--------------endusertext-annotations--annotation--meaning--scope--typ--enums--default--text--mde--api--endusertext-heading--texts--implicit-annotation-for-data-element-header-----string-55-----------x------not--released--endusertext-label--texts--short-text-connected-to-translation---access-policy--javascript-call-link---abencds-f1-define-accesspolicy-htm------element--javascript-call-link---abencds-f1-element-annotation-htm------entity--javascript-call-link---abencds-f1-entity-annotations-htm------view-extension--javascript-call-link---abencds-f1-extend-view-annotations-htm------parameter--javascript-call-link---abencds-f1-parameter-annotations-htm------pfcg-mapping--javascript-call-link---abencds-f1-define-pfcg-mapping-htm------role--javascript-call-link---abencds-f1-dcl-role-annotations-htm------string-60-----------x--x--released--for--sap--cloud--platform--endusertext-quickinfo--texts--tooltip-connected-to-translation---meta-data-extension--javascript-call-link---abencds-f1-metadata-ext-annos-htm------element--javascript-call-link---abencds-f1-element-annotation-htm------parameter--javascript-call-link---abencds-f1-parameter-annotations-htm------string-100-----------x--x--released--for--sap--cloud--platform--environment-annotations--annotation--meaning--scope--typ--enums--default--text--mde--api--environment-sql-passvalue--defines-pass-by-value-of-host-variables-in-comparisons-in-abap-sql---element--javascript-call-link---abencds-f1-element-annotation-htm------boolean------true----------released--for--sap--cloud--platform--environment-systemfield--environment--assigns-an-abap-system-field---parameter--javascript-call-link---abencds-f1-parameter-annotations-htm------string-20----client--system--date--system--language--system--time--user--------------released--for--sap--cloud--platform--languagedependency-annotations--annotation--meaning--scope--typ--enums--default--text--mde--api--languagedependency-maxlength--annotation-definition--specifies-the-translatibility-of-texts---annotation-definition--javascript-call-link---abencds-f1-define-anno-annos-htm------integer----------------------mappingrole-annotations--annotation--meaning--scope--typ--enums--default--text--mde--api--mappingrole--access-control--specifies-the-assignment-of-a-cds-role-to-users---role--javascript-call-link---abencds-f1-dcl-role-annotations-htm------boolean------true----------released--for--sap--cloud--platform--metadata-annotations--annotation--meaning--scope--typ--enums--default--text--mde--api--metadata-allowextensions--metadata--specifies-extensibility-using-metadata-extensions---entity--javascript-call-link---abencds-f1-entity-annotations-htm------boolean------true--------------metadata-ignorepropagatedannotations--metadata--specifies-how-propagated-annotations-are-evaluated-using-the-class-cl--dd--ddl--annotation--service---view--javascript-call-link---abencds-f1-view-entity-annotations-htm------boolean------true----------released--for--sap--cloud--platform--metadata-layer--metadata--specfies-layer-in-cds-metadata-extension---meta-data-extension--javascript-call-link---abencds-f1-metadata-ext-annos-htm------integer---core--customer--industry--localization--partner----------x------metadataextension-annotations--annotation--meaning--scope--typ--enums--default--text--mde--api--metadataextension-usageallowed--annotation-definition--specifies-the-distribution-of-the-annotation-in-cds-metadata-extensions---annotation-definition--javascript-call-link---abencds-f1-define-anno-annos-htm------boolean------true--------------objectmodel-annotations--annotation--meaning--scope--typ--enums--default--text--mde--api--objectmodel-usagetype-dataclass--undocumented---table-function--javascript-call-link---abencds-f1-function-annotations-htm------view--javascript-call-link---abencds-f1-view-entity-annotations-htm------string-30----customizing--master--meta--mixed--organizational--transactional---mixed--------------objectmodel-usagetype-servicequality--undocumented---table-function--javascript-call-link---abencds-f1-function-annotations-htm------view--javascript-call-link---abencds-f1-view-entity-annotations-htm------string-30----a--b--c--d--p--x---x--------------objectmodel-usagetype-sizecategory--undocumented---table-function--javascript-call-link---abencds-f1-function-annotations-htm------view--javascript-call-link---abencds-f1-view-entity-annotations-htm------string-3----l--m--s--xl--xxl---s--------------scope------annotations--annotation--meaning--scope--typ--enums--default--text--mde--api--scope-------annotation-definition--defines-the-range-of-validity-of-the-annotation----annotation-definition--javascript-call-link---abencds-f1-define-anno-annos-htm------string-20----accesspolicy--annotate--annotation--aspect--custom--entity--element--entity--extend--view--hierarchy--parameter--pfcg--mapping--role--service--simple--type--table--function--view------------------semantics-annotations--annotation--meaning--scope--typ--enums--default--text--mde--api--semantics-amount-currencycode--currency-field---element--javascript-call-link---abencds-f1-element-annotation-htm------elementref------------------released--for--sap--cloud--platform--semantics-currencycode--currency-key---element--javascript-call-link---abencds-f1-element-annotation-htm------boolean------true----------released--for--sap--cloud--platform--semantics-quantity-unitofmeasure--quantity-field---element--javascript-call-link---abencds-f1-element-annotation-htm------elementref------------------released--for--sap--cloud--platform--semantics-unitofmeasure--unit-key---element--javascript-call-link---abencds-f1-element-annotation-htm------boolean------true----------released--for--sap--cloud--platform------------abap-keyword-documentation---abap---dictionary---abap-cds-in-abap-dictionary---abap-cds---annotations---abap-cds---specifying-annotations---abap-cds-metadata-extensions----files----10-----difficulty----advanced----abap-keyword-documentation---abap---dictionary---abap-cds-in-abap-dictionary---abap-cds---annotations---abap-cds---sap-annotations---abap-cds---abap-annotations--included-pages--3---------source-----abencds-annotations-abap-tables-htm--https---help-sap-com-doc-abapdocu-754-index-htm-7-54-en-us-abencds-annotations-abap-tables-htm-------abencds-annotations-abap-htm-------------as-abap-release-754---copyright-2019-sap-se--all-rights-reserved----abap-keyword-documentation--javascript-call-link---abenabap-htm---------abap---dictionary--javascript-call-link---abenabap-dictionary-htm---------abap-cds-in-abap-dictionary--javascript-call-link---abencds-htm---------abap-cds---annotations--javascript-call-link---abencds-annotations-htm---------abap-cds---sap-annotations--javascript-call-link---abencds-annotations-sap-htm---------abap-cds---abap-annotations--abap-annotations-are--sap-annotations--javascript-call-link---abensap-annotation-glosry-htm-----glossary-entry---that-are-evaluated-by-the-abap-runtime-environment--the-following-sections-show-the-associated--annotation-definitions--javascript-call-link---abencds-anno-definition-glosry-htm-----glossary-entry---and-the--annotation-syntax--javascript-call-link---abencds-annotation-syntax-glosry-htm-----glossary-entry----------abap-annotation-definitions--javascript-call-link---abencds-annotations-abap-ddla-htm-----------abap-annotation-syntax--javascript-call-link---abencds-annotations-abap-tables-htm------the-detailed-meanings-of-the-abap-annotations-is-documented-for-the-corresponding--scope--javascript-call-link---abencds-annotations-scopes-htm-----in-this-documentation---note--an-abap-annotation-can-also-be-evaluated-by-frameworks-of-other-software-components---continue--abap-cds---abap-annotation-definitions--javascript-call-link---abencds-annotations-abap-ddla-htm------abap-cds---abap-annotation-syntax--javascript-call-link---abencds-annotations-abap-tables-htm-------------source-----abencds-annotations-abap-htm--https---help-sap-com-doc-abapdocu-754-index-htm-7-54-en-us-abencds-annotations-abap-htm-------abencds-annotations-abap-ddla-htm-------------as-abap-release-754---copyright-2019-sap-se--all-rights-reserved----abap-keyword-documentation--javascript-call-link---abenabap-htm---------abap---dictionary--javascript-call-link---abenabap-dictionary-htm---------abap-cds-in-abap-dictionary--javascript-call-link---abencds-htm---------abap-cds---annotations--javascript-call-link---abencds-annotations-htm---------abap-cds---sap-annotations--javascript-call-link---abencds-annotations-sap-htm---------abap-cds---abap-annotations--javascript-call-link---abencds-annotations-abap-htm---------abap-cds---abap-annotation-definitions--the-following--ddla-source-code--javascript-call-link---abenddla-source-code-glosry-htm-----glossary-entry---shows-the--cds-annotation-definitions--javascript-call-link---abencds-anno-definition-glosry-htm-----glossary-entry---in-all--abap-annotations--javascript-call-link---abencore-annotation-glosry-htm-----glossary-entry---in--cds-ddl--javascript-call-link---abencds-ddl-glosry-htm-----glossary-entry---and--cds-dcl--javascript-call-link---abencds-dcl-glosry-htm-----glossary-entry---in-abap-cds-------the-meaning-of-the--ddla-source-code--javascript-call-link---abenddla-source-code-glosry-htm-----glossary-entry---shown-here-can-be-found-in-the-documentation-for--define-annotation--javascript-call-link---abencds-f1-define-annotation-htm-----------the-semantics-of-the-annotations-can-be-found-in-the-links-in-the-ddla-source-code---the-detailed-meanings-of-these-abap-annotations-are-described-under-the-relevant--scope--javascript-call-link---abencds-annotations-scopes-htm-----defined-after--Scope](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abencds_f1_define_anno_annos.htm) in the documentation.

-   [AbapAnnotation-Annotations](#abencds-annotations-abap-ddla-1--------abapcatalog-annotations---@ITOC@@ABENCDS_ANNOTATIONS_ABAP_DDLA_2)

-   [AccessControl-Annotations](#abencds-annotations-abap-ddla-3--------api-annotations---@ITOC@@ABENCDS_ANNOTATIONS_ABAP_DDLA_4)

-   [ClientDependent-Annotations](#abencds-annotations-abap-ddla-5--------clienthandling-annotations---@ITOC@@ABENCDS_ANNOTATIONS_ABAP_DDLA_6)

-   [CompatibilityContract-Annotations](#abencds-annotations-abap-ddla-7--------dataaging-annotations---@ITOC@@ABENCDS_ANNOTATIONS_ABAP_DDLA_8)

-   [EndUserText-Annotations](#abencds-annotations-abap-ddla-9--------environment-annotations---@ITOC@@ABENCDS_ANNOTATIONS_ABAP_DDLA_10)

-   [LanguageDependency-Annotations](#abencds-annotations-abap-ddla-11--------mappingrole-annotations---@ITOC@@ABENCDS_ANNOTATIONS_ABAP_DDLA_12)

-   [Metadata-Annotations](#abencds-annotations-abap-ddla-13--------metadataextension-annotations---@ITOC@@ABENCDS_ANNOTATIONS_ABAP_DDLA_14)

-   [ObjectModel-Annotations](#abencds-annotations-abap-ddla-15--------scope------annotations---@ITOC@@ABENCDS_ANNOTATIONS_ABAP_DDLA_16)

-   [Semantics-Annotations](#abencds-annotations-abap-ddla-17---note--see-also--abap-annotation-syntax--javascript-call-link---abencds-annotations-abap-tables-htm-------abapannotation-annotations--Scope: \[[#ANNOTATION](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abencds_f1_define_anno_annos.htm)\]
annotation AbapAnnotation {
  definitionHidden : Boolean default true;
};

AbapCatalog-Annotations

@Scope:\[[#VIEW](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abencds_f1_view_entity_annotations.htm)\]
@CompatibilityContract.c2.usageAllowed: false
@API.state: \[#RELEASED\_FOR\_SAP\_CLOUD\_PLATFORM\]
annotation AbapCatalog
{
   @CompatibilityContract.c1: {
       usageAllowed: true,
       allowedChanges: {
           annotation: \[#NONE\],
           value: \[#NONE\]
       }
   }
   buffering
   {
      status : String(20) enum { NOT\_ALLOWED; ACTIVE; SWITCHED\_OFF; } default #SWITCHED\_OFF;
      type : String(10) enum { SINGLE; GENERIC; FULL; NONE; } default #NONE;
      numberOfKeyFields : Integer default 000;
   };
   @CompatibilityContract.c1: {
       usageAllowed: true,
       allowedChanges: {
           annotation: \[#ANY\],
           value: \[#ANY\]
       }
   }
   dbHints : array of
   {
      dbSystem : String(3) enum
      {
         ADA;
         DB2;
         DB4;
         DB6;
         INF;
         MSS;
         ORA;
         HDB;
         ASE;
         ALL;
      };
      hint : String(1298);
   };
   @CompatibilityContract.c1: {
       usageAllowed: true,
       allowedChanges: {
           annotation: \[#NONE\],
           value: \[#NONE\]
       }
   }
   viewEnhancementCategory : array of String(20) enum
   {
      NONE;
      PROJECTION\_LIST;
      GROUP\_BY;
      UNION;
   };
   @CompatibilityContract: {
       c1: {
           usageAllowed: true,
           allowedChanges: {
               annotation: \[#NONE\],
               value: \[#NONE\]
           }
       },
       c2: {
           usageAllowed: true,
           allowedChanges: {
               annotation: \[#NONE\],
               value: \[#NONE\]
           }
       }
   }
   @API.state: \[#RELEASED\_FOR\_SAP\_CLOUD\_PLATFORM, #RELEASED\_FOR\_KEY\_USER\_APPS\]    
   sqlViewName : String(16);
   @CompatibilityContract.c1: {
       usageAllowed: true,
       allowedChanges: {
           annotation: \[#ADD\],
           value: \[#FALSE\_TO\_TRUE\]
       }
   }
   @CompatibilityContract.c2: {
       usageAllowed: true,
       allowedChanges: {
           annotation: \[#ADD\],
           value: \[#FALSE\_TO\_TRUE\]
       }
   }    
   preserveKey : Boolean default true;
   @CompatibilityContract: {
       c1: {
           usageAllowed: true,
           allowedChanges: {
               annotation: \[#NONE\],
               value: \[#NONE\]
           }
       },
       c2: {
           usageAllowed: true,
           allowedChanges: {
               annotation: \[#NONE\],
               value: \[#NONE\]
           }
       }
   }
   compiler
   {
      compareFilter : Boolean default true;
      @Scope:\[[#ELEMENT](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abencds_f1_element_annotation.htm)\]
      @AbapAnnotation.definitionHidden: true
      @CompatibilityContract: {
        c1: {
            usageAllowed: true,
            allowedChanges: {
                annotation: \[#ANY\],
                value: \[#ANY\]
            }
        },
        c2: {
            usageAllowed: true,
            allowedChanges: {
                annotation: \[#ANY\],
                value: \[#ANY\]
            }
        }
      }
      @API.state: \[#NOT\_RELEASED\]        
      caseJoin : Boolean default true;
   };
   @AbapAnnotation.definitionHidden: true
   @CompatibilityContract.c1.usageAllowed: false
   @API.state: \[#NOT\_RELEASED\]
   internal
   {  
      @Scope:\[[#ELEMENT](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abencds_f1_element_annotation.htm)\]
      isMandt : Boolean default true;
      @Scope: \[[#VIEW](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abencds_f1_view_entity_annotations.htm), [#EXTEND\_VIEW](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abencds_f1_extend_view_annotations.htm)\]
      @CompatibilityContract: {
        c1: {
            usageAllowed: true,
            allowedChanges: {
                annotation: \[#ANY\],
                value: \[#ANY\]
            }
        },
        c2: {
            usageAllowed: true,
            allowedChanges: {
                annotation: \[#ANY\],
                value: \[#ANY\]
            }
        }
      }      
      setChange : String(30);  
      inheritedType : Boolean default true;    
   };
   @Scope:\[[#EXTEND\_VIEW](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abencds_f1_extend_view_annotations.htm)\]
   @CompatibilityContract.c1.usageAllowed: false
   sqlViewAppendName : String(16);
   @Scope:\[[#ENTITY](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abencds_f1_entity_annotations.htm)\]
   @MetadataExtension.usageAllowed: false
   @AbapAnnotation.definitionHidden: true
   @CompatibilityContract.c1.usageAllowed: false
   @API.state: \[#NOT\_RELEASED\]    
   sqlName : String(256);    
};

AccessControl-Annotations

See [Framework Specific Annotation Definitions](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abencds_annotations_frmwrk_ddla.htm).

API-Annotations

define annotation API
{
  @Scope:\[[#ANNOTATION](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abencds_f1_define_anno_annos.htm)\]
  state: array of String(40) enum {
    NOT\_RELEASED;
    RELEASED\_FOR\_SAP\_CLOUD\_PLATFORM;
    RELEASED\_FOR\_KEY\_USER\_APPS;
  };
  @Scope:\[[#ELEMENT](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abencds_f1_element_annotation.htm)\]
  @CompatibilityContract.c1.usageAllowed: true
  @CompatibilityContract.c2.usageAllowed: false
  element {    
    @CompatibilityContract.c1.allowedChanges: {annotation: \[#CUSTOM\], value: \[#CUSTOM\]}
    releaseState: String(30) enum {DEPRECATED;};
    @CompatibilityContract.c1.allowedChanges: {annotation: \[#CUSTOM\], value: \[#CUSTOM\]}
    successor: ElementRef;
  };
};

ClientDependent-Annotations

Obsolete annotations for scopes [#VIEW](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abencds_f1_view_entity_annotations.htm), [#TABLE\_FUNCTION](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abencds_f1_view_entity_annotations.htm).

ClientHandling-Annotations

@Scope:\[[#VIEW](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abencds_f1_view_entity_annotations.htm), [#TABLE\_FUNCTION](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abencds_f1_function_annotations.htm)\]
@CompatibilityContract: {
    c1: {
        usageAllowed: true,
        allowedChanges: {
            annotation: \[#NONE\],
            value: \[#NONE\]
        }
    },
    c2: {
        usageAllowed: true,
        allowedChanges: {
            annotation: \[#NONE\],
            value: \[#NONE\]
        }
    }
}  
@API.state: \[#RELEASED\_FOR\_SAP\_CLOUD\_PLATFORM\]
annotation ClientHandling
{
   type : String(20) enum { CLIENT\_DEPENDENT; CLIENT\_INDEPENDENT; INHERITED; } default #INHERITED;
   algorithm : String(20) enum { NONE; AUTOMATED; SESSION\_VARIABLE; };
};

CompatibilityContract-Annotations

@Scope:\[[#ANNOTATION](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abencds_f1_define_anno_annos.htm)\]
define annotation CompatibilityContract {
  c0 {  
    usageAllowed: Boolean default true;
    allowedChanges {
      annotation: array of String(20) enum {ADD; REMOVE; ANY; NONE; CUSTOM;};
      value: array of String(20) enum {ADD; REMOVE; UPDATE; FALSE\_TO\_TRUE; TRUE\_TO\_FALSE; ANY; NONE; CUSTOM;};
    };
  };
  c1 {  
    usageAllowed: Boolean default true;
    allowedChanges {
      annotation: array of String(20) enum {ADD; REMOVE; ANY; NONE; CUSTOM;};
      value: array of String(20) enum {ADD; REMOVE; UPDATE; FALSE\_TO\_TRUE; TRUE\_TO\_FALSE; ANY; NONE; CUSTOM;};
    };
  };
  c2 {  
    usageAllowed: Boolean default true;
    allowedChanges {
      annotation: array of String(20) enum {ADD; REMOVE; ANY; NONE; CUSTOM;};
      value: array of String(20) enum {ADD; REMOVE; UPDATE; FALSE\_TO\_TRUE; TRUE\_TO\_FALSE; ANY; NONE; CUSTOM;};
    };
  };    
}

DataAging-Annotations

@Scope:\[[#VIEW](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abencds_f1_view_entity_annotations.htm), [#TABLE\_FUNCTION](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abencds_f1_function_annotations.htm)\]
@CompatibilityContract: {
    c1: {
        usageAllowed: true,
        allowedChanges: {
            annotation: \[#ADD\],
            value: \[#FALSE\_TO\_TRUE\]
        }
    },
    c2: {
        usageAllowed: true,
        allowedChanges: {
            annotation: \[#ADD\],
            value: \[#FALSE\_TO\_TRUE\]
        }
    }
}  
annotation DataAging
{
   noAgingRestriction : Boolean default true;
};

EndUserText-Annotations

@CompatibilityContract: {
    c1: {
        usageAllowed: true,
        allowedChanges: {
            annotation: \[#ANY\],
            value: \[#ANY\]
        }
    },
    c2: {
        usageAllowed: true,
        allowedChanges: {
            annotation: \[#ANY\],
            value: \[#ANY\]
        }
    }        
}
@API.state: \[#RELEASED\_FOR\_SAP\_CLOUD\_PLATFORM\]
annotation EndUserText
{
   @MetadataExtension.usageAllowed : true
   @LanguageDependency.maxLength : 40
   @Scope:\[[#ENTITY](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abencds_f1_entity_annotations.htm), [#PARAMETER](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abencds_f1_parameter_annotations.htm), [#ELEMENT](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abencds_f1_element_annotation.htm), [#EXTEND\_VIEW](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abencds_f1_extend_view_annotations.htm), [#ROLE](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abencds_f1_dcl_role_annotations.htm), #ASPECT, [#PFCG\_MAPPING](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abencds_f1_define_pfcg_mapping.htm), [#ACCESSPOLICY](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abencds_f1_define_accesspolicy.htm), #SERVICE\]
   label : String(60);
   @MetadataExtension.usageAllowed : true
   @LanguageDependency.maxLength : 67  
   @Scope:\[[#ELEMENT](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abencds_f1_element_annotation.htm), [#PARAMETER](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abencds_f1_parameter_annotations.htm), [#ANNOTATE](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abencds_f1_metadata_ext_annos.htm)\]
   quickInfo : String(100);
   @LanguageDependency.maxLength : 37
   @Scope:\[#SIMPLE\_TYPE\]
   @API.state: \[#NOT\_RELEASED\]
   heading : String(55);
};

Environment-Annotations

@CompatibilityContract: {
    c1: {
        usageAllowed: true,
        allowedChanges: {
            annotation: \[#NONE\],
            value: \[#NONE\]
        }
    },
    c2.usageAllowed: false
}
@API.state: \[#RELEASED\_FOR\_SAP\_CLOUD\_PLATFORM\]
annotation Environment
{
   @Scope:\[[#PARAMETER](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abencds_f1_parameter_annotations.htm)\]
   systemField : String(20) enum { CLIENT; SYSTEM\_LANGUAGE; USER; SYSTEM\_DATE; SYSTEM\_TIME; };
   @Scope:\[[#ELEMENT](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abencds_f1_element_annotation.htm)\]
   sql
   {
      passValue : Boolean default true;
   };
};

LanguageDependency-Annotations

@Scope: \[[#ANNOTATION](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abencds_f1_define_anno_annos.htm)\]
annotation LanguageDependency {
  maxLength : Integer;
};

MappingRole-Annotations

@Scope:\[[#ROLE](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abencds_f1_dcl_role_annotations.htm)\]
@CompatibilityContract: {
   c1: { usageAllowed: true },
   c1: {
      allowedChanges: { annotation: \[#ADD, #REMOVE \],
                        value: \[#FALSE\_TO\_TRUE \] }
       },
   c2: { usageAllowed: true },  
   c2: {
      allowedChanges: { annotation: \[#ADD, #REMOVE \],
                        value: \[#FALSE\_TO\_TRUE \] }
       }
}  
@API.state: \[#RELEASED\_FOR\_SAP\_CLOUD\_PLATFORM\]
annotation MappingRole
: Boolean default true  
;

Metadata-Annotations

annotation Metadata {
  @Scope:\[[#ENTITY](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abencds_f1_entity_annotations.htm)\]
  @CompatibilityContract: {
      c1: {
          usageAllowed: true,
          allowedChanges: {
              annotation: \[#ADD\],
              value: \[#FALSE\_TO\_TRUE\]
          }
      },
      c2.usageAllowed: false
  }
  allowExtensions : Boolean default true;
  @Scope:\[[#VIEW](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abencds_f1_view_entity_annotations.htm)\]
  @CompatibilityContract: {
      c1: {
          usageAllowed: true,
          allowedChanges: {
              annotation: \[#NONE\],
              value: \[#NONE\]
          }
      },
      c2: {
          usageAllowed: true,
          allowedChanges: {
              annotation: \[#NONE\],
              value: \[#NONE\]
          }
      }
  }
  @API.state: \[#RELEASED\_FOR\_SAP\_CLOUD\_PLATFORM\]
  ignorePropagatedAnnotations : Boolean default true;
  @MetadataExtension.usageAllowed : true
  @Scope:\[[#ANNOTATE](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abencds_f1_metadata_ext_annos.htm)\]
  @CompatibilityContract.c1: {
      usageAllowed: true,
      allowedChanges: {
          annotation: \[#NONE\],
          value: \[#NONE\]
      }
  }
  @CompatibilityContract.c2.usageAllowed: false
  layer : Integer  
    enum {
      CORE;      
      LOCALIZATION;
      INDUSTRY;
      PARTNER;
      CUSTOMER;
    };
};

MetadataExtension-Annotations

@Scope: \[[#ANNOTATION](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abencds_f1_define_anno_annos.htm)\]
annotation MetadataExtension {
  usageAllowed : Boolean default true;
};

ObjectModel-Annotations

See [Framework Specific Annotation Definitions](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abencds_annotations_frmwrk_ddla.htm).

Scope\[ \]-Annotations

@Scope: \[[#ANNOTATION](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abencds_f1_define_anno_annos.htm)\]
annotation Scope : array of String(20)  
  enum {  
    ENTITY;                
    VIEW;                  
    TABLE\_FUNCTION;        
    EXTEND\_VIEW;          
    ROLE;                  
    ACCESSPOLICY;          
    ANNOTATION;            
    ANNOTATE;              
    SERVICE;              
    CUSTOM\_ENTITY;        
    HIERARCHY;            
    PARAMETER;            
    ELEMENT;              
    ASPECT;                
    PFCG\_MAPPING;          
    SIMPLE\_TYPE;          
  };

Semantics-Annotations

...
define annotation Semantics
{
  ...
   @API.state: \[ #RELEASED\_FOR\_SAP\_CLOUD\_PLATFORM \]        
   amount      
   {      
       currencyCode    : ElementRef;  
   };      
   @Scope:\[[#ELEMENT](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abencds_f1_element_annotation.htm)\]
   @CompatibilityContract: {
   c1: { usageAllowed: true,
         allowedChanges.annotation: \[ #NONE \],
         allowedChanges.value: \[ #NONE \] },    
   c2: { usageAllowed: true,
         allowedChanges.annotation: \[ #NONE \],
         allowedChanges.value: \[ #NONE \] } }  
   @API.state: \[ #RELEASED\_FOR\_SAP\_CLOUD\_PLATFORM \]          
   quantity      
   {      
       unitOfMeasure   : ElementRef;  
   };      
   @Scope:\[[#ELEMENT](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abencds_f1_element_annotation.htm)\]
   @CompatibilityContract: {
   c1: { usageAllowed: true,
         allowedChanges.annotation: \[ #NONE \],
         allowedChanges.value: \[ #NONE \] },    
   c2: { usageAllowed: true,
         allowedChanges.annotation: \[ #NONE \],
         allowedChanges.value: \[ #NONE \] } }  
   @API.state: \[ #RELEASED\_FOR\_SAP\_CLOUD\_PLATFORM \]          
   currencyCode        : Boolean default true;
   @Scope:\[[#ELEMENT](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abencds_f1_element_annotation.htm)\]
   @CompatibilityContract: {
   c1: { usageAllowed: true,
         allowedChanges.annotation: \[ #NONE \],
         allowedChanges.value: \[ #NONE \] },    
   c2: { usageAllowed: true,
         allowedChanges.annotation: \[ #NONE \],
         allowedChanges.value: \[ #NONE \] } }      
   @API.state: \[ #RELEASED\_FOR\_SAP\_CLOUD\_PLATFORM \]      
   unitOfMeasure       : Boolean default true;  
   @Scope:\[[#ELEMENT](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abencds_f1_element_annotation.htm)\]
   @CompatibilityContract: {
   c1: { usageAllowed: false },    
   c2: { usageAllowed: false } }  
   booleanIndicator    : Boolean default true;
  ...
};



**📖 Source**: [abencds_annotations_abap_ddla.htm](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abencds_annotations_abap_ddla.htm)

### abencds_annotations_abap_tables.htm

> **📖 Official SAP Documentation**: [abencds_annotations_abap_tables.htm](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abencds_annotations_abap_tables.htm)
> **🔍 Direct Link**: This section contains the complete content from the official SAP ABAP documentation page.


  

* * *

AS ABAP Release 754, ©Copyright 2019 SAP SE. All rights reserved.

[ABAP Keyword Documentation](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenabap.htm) →  [ABAP - Dictionary](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenabap_dictionary.htm) →  [ABAP CDS in ABAP Dictionary](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abencds.htm) →  [ABAP CDS - Annotations](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abencds_annotations.htm) →  [ABAP CDS - SAP Annotations](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abencds_annotations_sap.htm) →  [ABAP CDS - ABAP Annotations](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abencds_annotations_abap.htm) → 

ABAP CDS - ABAP Annotation Syntax

The following tables summarize the [annotation syntax](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abencds_annotation_syntax_glosry.htm "Glossary Entry") of all [ABAP annotations](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abencore_annotation_glosry.htm "Glossary Entry") in [CDS DDL](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abencds_ddl_glosry.htm "Glossary Entry") and [CDS DCL](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abencds_dcl_glosry.htm "Glossary Entry") in ABAP CDS. Any specified subannotations are shown using [chainings](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abencds_annotations_syntax_name.htm). If square brackets \[ \] are specified after a name in the column Annotation, this means that the annotation in front of the square brackets is an [annotation array](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenannotation_array_glosry.htm "Glossary Entry"). Any enumeration symbols in an annotation are specified in the column Enums. The column Default shows the default values applied to the evaluation when an annotation is specified without a value. The columns Text and MDE indicate whether the annotation values are translatable texts and whether the annotation can be specified in a [metadata extension](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abencds_metadata_extension_glosry.htm "Glossary Entry"). The API column indicates whether the annotation can be used in CDS entities defined in [ABAP for SAP Cloud Platform](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenabap_for_sap_cloud_glosry.htm "Glossary Entry"). The detailed meanings of each ABAP annotation is documented for the corresponding [scope](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abencds_annotations_scopes.htm) in this documentation.

-   [AbapAnnotation-Annotations](#abencds-annotations-abap-tables-1--------abapcatalog-annotations---@ITOC@@ABENCDS_ANNOTATIONS_ABAP_TABLES_2)

-   [AccessControl-Annotations](#abencds-annotations-abap-tables-3--------api-annotations---@ITOC@@ABENCDS_ANNOTATIONS_ABAP_TABLES_4)

-   [ClientDependent-Annotations](#abencds-annotations-abap-tables-5--------clienthandling-annotations---@ITOC@@ABENCDS_ANNOTATIONS_ABAP_TABLES_6)

-   [CompatibilityContract-Annotations](#abencds-annotations-abap-tables-7--------dataaging-annotations---@ITOC@@ABENCDS_ANNOTATIONS_ABAP_TABLES_8)

-   [EndUserText-Annotations](#abencds-annotations-abap-tables-9--------environment-annotations---@ITOC@@ABENCDS_ANNOTATIONS_ABAP_TABLES_10)

-   [LanguageDependency-Annotations](#abencds-annotations-abap-tables-11--------mappingrole-annotations---@ITOC@@ABENCDS_ANNOTATIONS_ABAP_TABLES_12)

-   [Metadata-Annotations](#abencds-annotations-abap-tables-13--------metadataextension-annotations---@ITOC@@ABENCDS_ANNOTATIONS_ABAP_TABLES_14)

-   [ObjectModel-Annotations](#abencds-annotations-abap-tables-15--------scope------annotations---@ITOC@@ABENCDS_ANNOTATIONS_ABAP_TABLES_16)

-   [Semantics-Annotations](#abencds-annotations-abap-tables-17---note--see-also--abap-annotation-definitions--javascript-call-link---abencds-annotations-abap-ddla-htm-------abapannotation-annotations--annotation--meaning--scope--typ--enums--default--text--mde--api--abapannotation-definitionhidden--annotation-definition--test-annotation-or-demonstration-annotation-that-cannot-be-used-in-production-cds-source-code---annotation-definition--javascript-call-link---abencds-f1-define-anno-annos-htm------boolean------true--------------abapcatalog-annotations--annotation--meaning--scope--typ--enums--default--text--mde--api--abapcatalog-buffering-numberofkeyfields--table-buffering--number-of-key-fields-when-buffering-generic-areas---view--javascript-call-link---abencds-f1-view-entity-annotations-htm------integer------000----------released--for--sap--cloud--platform--abapcatalog-buffering-status--table-buffering--enables-and-disables-buffering---view--javascript-call-link---abencds-f1-view-entity-annotations-htm------string-20----active--not--allowed--switched--off---switched--off----------released--for--sap--cloud--platform--abapcatalog-buffering-type--table-buffering--defines-the-buffering-type---view--javascript-call-link---abencds-f1-view-entity-annotations-htm------string-10----full--generic--none--single---none----------released--for--sap--cloud--platform--abapcatalog-compiler-comparefilter--cds-view--specifies-how-filter-conditions-are-evaluated-in-path-expressions---view--javascript-call-link---abencds-f1-view-entity-annotations-htm------boolean------true----------released--for--sap--cloud--platform--abapcatalog-dbhints------dbsystem--obsolete--replaced-by-consumption-dbhintscalculatedby---view--javascript-call-link---abencds-f1-view-entity-annotations-htm------string-3----ada--all--ase--db2--db4--db6--hdb--inf--mss--ora--------------released--for--sap--cloud--platform--abapcatalog-dbhints------hint--obsolete--replaced-by-consumption-dbhints--------view--javascript-call-link---abencds-f1-view-entity-annotations-htm------string-1298-------------------released--for--sap--cloud--platform--abapcatalog-preservekey--cds-view--specifies-the-definition-of-the-key-fields-in-the-associated-database-view---view--javascript-call-link---abencds-f1-view-entity-annotations-htm------boolean------true----------released--for--sap--cloud--platform--abapcatalog-sqlviewappendname--cds-view-extension--name-of-the-append-view---view-extension--javascript-call-link---abencds-f1-extend-view-annotations-htm------string-16-------------------released--for--sap--cloud--platform--abapcatalog-sqlviewname--cds-view--name-of-the-database-view---view--javascript-call-link---abencds-f1-view-entity-annotations-htm------string-16-------------------released--for--key--user--appsreleased--for--sap--cloud--platform--abapcatalog-viewenhancementcategory-------cds-view--specifies-how-the-view-can-be-extended-using-cds-view-extensions---view--javascript-call-link---abencds-f1-view-entity-annotations-htm------string-20----group--by--none--projection--list--union--------------released--for--sap--cloud--platform--accesscontrol-annotations--annotation--meaning--scope--typ--enums--default--text--mde--api--accesscontrol-authorizationcheck--cds-access-control--specifies-implicit-access-control---hierarchy--javascript-call-link---abencds-f1-hierarchy-annotations-htm------table-function--javascript-call-link---abencds-f1-function-annotations-htm------view--javascript-call-link---abencds-f1-view-entity-annotations-htm------string-20----check--not--allowed--not--required--privileged--only---check----------released--for--sap--cloud--platform--api-annotations--annotation--meaning--scope--typ--enums--default--text--mde--api--api-element-releasestate--element-annotation--release-element---element--javascript-call-link---abencds-f1-element-annotation-htm------string-30----deprecated------------------api-element-successor--element-annotation--successor-of-rejected-element---element--javascript-call-link---abencds-f1-element-annotation-htm------elementref----------------------api-state-------annotation-definition--release-annotation---annotation-definition--javascript-call-link---abencds-f1-define-anno-annos-htm------string-40----not--released--released--for--key--user--apps--released--for--sap--cloud--platform------------------clientdependent-annotations--annotation--meaning--scope--typ--enums--default--text--mde--api--clientdependent--specifies-client-dependency-and-how-clients-are-handled--obsolete----table-function--javascript-call-link---abencds-f1-function-annotations-htm------view--javascript-call-link---abencds-f1-view-entity-annotations-htm------boolean------true--------------clienthandling-annotations--annotation--meaning--scope--typ--enums--default--text--mde--api--clienthandling-algorithm--specifies-client-handling---table-function--javascript-call-link---abencds-f1-function-annotations-htm------view--javascript-call-link---abencds-f1-view-entity-annotations-htm------string-20----automated--none--session--variable--------------released--for--sap--cloud--platform--clienthandling-type--specifies-client-dependency---table-function--javascript-call-link---abencds-f1-function-annotations-htm------view--javascript-call-link---abencds-f1-view-entity-annotations-htm------string-20----client--dependent--client--independent--inherited---inherited----------released--for--sap--cloud--platform--compatibilitycontract-annotations--annotation--meaning--scope--typ--enums--default--text--mde--api--compatibilitycontract-c0-allowedchanges-annotation-------modifiability-of-an-annotation-in-released-cds-entities---annotation-definition--javascript-call-link---abencds-f1-define-anno-annos-htm------string-20----add--any--custom--none--remove------------------compatibilitycontract-c0-allowedchanges-value-------modifiability-of-annotation-values-in-released-cds-entities---annotation-definition--javascript-call-link---abencds-f1-define-anno-annos-htm------string-20----add--any--custom--false--to--true--none--remove--true--to--false--update------------------compatibilitycontract-c0-usageallowed--usability-of-an-annotation-in-released-cds-entities---annotation-definition--javascript-call-link---abencds-f1-define-anno-annos-htm------boolean------true--------------compatibilitycontract-c1-allowedchanges-annotation-------modifiability-of-an-annotation-in-released-cds-entities---annotation-definition--javascript-call-link---abencds-f1-define-anno-annos-htm------string-20----add--any--custom--none--remove------------------compatibilitycontract-c1-allowedchanges-value-------modifiability-of-annotation-values-in-released-cds-entities---annotation-definition--javascript-call-link---abencds-f1-define-anno-annos-htm------string-20----add--any--custom--false--to--true--none--remove--true--to--false--update------------------compatibilitycontract-c1-usageallowed--usability-of-an-annotation-in-released-cds-entities---annotation-definition--javascript-call-link---abencds-f1-define-anno-annos-htm------boolean------true--------------compatibilitycontract-c2-allowedchanges-annotation-------modifiability-of-an-annotation-in-released-cds-entities---annotation-definition--javascript-call-link---abencds-f1-define-anno-annos-htm------string-20----add--any--custom--none--remove------------------compatibilitycontract-c2-allowedchanges-value-------modifiability-of-annotation-values-in-released-cds-entities---annotation-definition--javascript-call-link---abencds-f1-define-anno-annos-htm------string-20----add--any--custom--false--to--true--none--remove--true--to--false--update------------------compatibilitycontract-c2-usageallowed--usability-of-an-annotation-in-released-cds-entities---annotation-definition--javascript-call-link---abencds-f1-define-anno-annos-htm------boolean------true--------------dataaging-annotations--annotation--meaning--scope--typ--enums--default--text--mde--api--dataaging-noagingrestriction--data-aging-on-sap-hana--specifies-how-old-data-is-handled---table-function--javascript-call-link---abencds-f1-function-annotations-htm------view--javascript-call-link---abencds-f1-view-entity-annotations-htm------boolean------true--------------endusertext-annotations--annotation--meaning--scope--typ--enums--default--text--mde--api--endusertext-heading--texts--implicit-annotation-for-data-element-header-----string-55-----------x------not--released--endusertext-label--texts--short-text-connected-to-translation---access-policy--javascript-call-link---abencds-f1-define-accesspolicy-htm------element--javascript-call-link---abencds-f1-element-annotation-htm------entity--javascript-call-link---abencds-f1-entity-annotations-htm------view-extension--javascript-call-link---abencds-f1-extend-view-annotations-htm------parameter--javascript-call-link---abencds-f1-parameter-annotations-htm------pfcg-mapping--javascript-call-link---abencds-f1-define-pfcg-mapping-htm------role--javascript-call-link---abencds-f1-dcl-role-annotations-htm------string-60-----------x--x--released--for--sap--cloud--platform--endusertext-quickinfo--texts--tooltip-connected-to-translation---meta-data-extension--javascript-call-link---abencds-f1-metadata-ext-annos-htm------element--javascript-call-link---abencds-f1-element-annotation-htm------parameter--javascript-call-link---abencds-f1-parameter-annotations-htm------string-100-----------x--x--released--for--sap--cloud--platform--environment-annotations--annotation--meaning--scope--typ--enums--default--text--mde--api--environment-sql-passvalue--defines-pass-by-value-of-host-variables-in-comparisons-in-abap-sql---element--javascript-call-link---abencds-f1-element-annotation-htm------boolean------true----------released--for--sap--cloud--platform--environment-systemfield--environment--assigns-an-abap-system-field---parameter--javascript-call-link---abencds-f1-parameter-annotations-htm------string-20----client--system--date--system--language--system--time--user--------------released--for--sap--cloud--platform--languagedependency-annotations--annotation--meaning--scope--typ--enums--default--text--mde--api--languagedependency-maxlength--annotation-definition--specifies-the-translatibility-of-texts---annotation-definition--javascript-call-link---abencds-f1-define-anno-annos-htm------integer----------------------mappingrole-annotations--annotation--meaning--scope--typ--enums--default--text--mde--api--mappingrole--access-control--specifies-the-assignment-of-a-cds-role-to-users---role--javascript-call-link---abencds-f1-dcl-role-annotations-htm------boolean------true----------released--for--sap--cloud--platform--metadata-annotations--annotation--meaning--scope--typ--enums--default--text--mde--api--metadata-allowextensions--metadata--specifies-extensibility-using-metadata-extensions---entity--javascript-call-link---abencds-f1-entity-annotations-htm------boolean------true--------------metadata-ignorepropagatedannotations--metadata--specifies-how-propagated-annotations-are-evaluated-using-the-class-cl--dd--ddl--annotation--service---view--javascript-call-link---abencds-f1-view-entity-annotations-htm------boolean------true----------released--for--sap--cloud--platform--metadata-layer--metadata--specfies-layer-in-cds-metadata-extension---meta-data-extension--javascript-call-link---abencds-f1-metadata-ext-annos-htm------integer---core--customer--industry--localization--partner----------x------metadataextension-annotations--annotation--meaning--scope--typ--enums--default--text--mde--api--metadataextension-usageallowed--annotation-definition--specifies-the-distribution-of-the-annotation-in-cds-metadata-extensions---annotation-definition--javascript-call-link---abencds-f1-define-anno-annos-htm------boolean------true--------------objectmodel-annotations--annotation--meaning--scope--typ--enums--default--text--mde--api--objectmodel-usagetype-dataclass--undocumented---table-function--javascript-call-link---abencds-f1-function-annotations-htm------view--javascript-call-link---abencds-f1-view-entity-annotations-htm------string-30----customizing--master--meta--mixed--organizational--transactional---mixed--------------objectmodel-usagetype-servicequality--undocumented---table-function--javascript-call-link---abencds-f1-function-annotations-htm------view--javascript-call-link---abencds-f1-view-entity-annotations-htm------string-30----a--b--c--d--p--x---x--------------objectmodel-usagetype-sizecategory--undocumented---table-function--javascript-call-link---abencds-f1-function-annotations-htm------view--javascript-call-link---abencds-f1-view-entity-annotations-htm------string-3----l--m--s--xl--xxl---s--------------scope------annotations--annotation--meaning--scope--typ--enums--default--text--mde--api--scope-------annotation-definition--defines-the-range-of-validity-of-the-annotation----annotation-definition--javascript-call-link---abencds-f1-define-anno-annos-htm------string-20----accesspolicy--annotate--annotation--aspect--custom--entity--element--entity--extend--view--hierarchy--parameter--pfcg--mapping--role--service--simple--type--table--function--view------------------semantics-annotations--annotation--meaning--scope--typ--enums--default--text--mde--api--semantics-amount-currencycode--currency-field---element--javascript-call-link---abencds-f1-element-annotation-htm------elementref------------------released--for--sap--cloud--platform--semantics-currencycode--currency-key---element--javascript-call-link---abencds-f1-element-annotation-htm------boolean------true----------released--for--sap--cloud--platform--semantics-quantity-unitofmeasure--quantity-field---element--javascript-call-link---abencds-f1-element-annotation-htm------elementref------------------released--for--sap--cloud--platform--semantics-unitofmeasure--unit-key---element--javascript-call-link---abencds-f1-element-annotation-htm------boolean------true----------released--for--sap--cloud--platform------------abap-keyword-documentation---abap---dictionary---abap-cds-in-abap-dictionary---abap-cds---annotations---abap-cds---evaluation-of-annotations----files----2-----difficulty----advanced----abap-keyword-documentation---abap---dictionary---abap-cds-in-abap-dictionary---abap-cds---annotations---abap-cds---sap-annotations---abap-cds---abap-annotations--included-pages--3---------source-----abencds-annotations-abap-tables-htm--https---help-sap-com-doc-abapdocu-754-index-htm-7-54-en-us-abencds-annotations-abap-tables-htm-------abencds-annotations-abap-htm-------------as-abap-release-754---copyright-2019-sap-se--all-rights-reserved----abap-keyword-documentation--javascript-call-link---abenabap-htm---------abap---dictionary--javascript-call-link---abenabap-dictionary-htm---------abap-cds-in-abap-dictionary--javascript-call-link---abencds-htm---------abap-cds---annotations--javascript-call-link---abencds-annotations-htm---------abap-cds---sap-annotations--javascript-call-link---abencds-annotations-sap-htm---------abap-cds---abap-annotations--abap-annotations-are--sap-annotations--javascript-call-link---abensap-annotation-glosry-htm-----glossary-entry---that-are-evaluated-by-the-abap-runtime-environment--the-following-sections-show-the-associated--annotation-definitions--javascript-call-link---abencds-anno-definition-glosry-htm-----glossary-entry---and-the--annotation-syntax--javascript-call-link---abencds-annotation-syntax-glosry-htm-----glossary-entry----------abap-annotation-definitions--javascript-call-link---abencds-annotations-abap-ddla-htm-----------abap-annotation-syntax--javascript-call-link---abencds-annotations-abap-tables-htm------the-detailed-meanings-of-the-abap-annotations-is-documented-for-the-corresponding--scope--javascript-call-link---abencds-annotations-scopes-htm-----in-this-documentation---note--an-abap-annotation-can-also-be-evaluated-by-frameworks-of-other-software-components---continue--abap-cds---abap-annotation-definitions--javascript-call-link---abencds-annotations-abap-ddla-htm------abap-cds---abap-annotation-syntax--javascript-call-link---abencds-annotations-abap-tables-htm-------------source-----abencds-annotations-abap-htm--https---help-sap-com-doc-abapdocu-754-index-htm-7-54-en-us-abencds-annotations-abap-htm-------abencds-annotations-abap-ddla-htm-------------as-abap-release-754---copyright-2019-sap-se--all-rights-reserved----abap-keyword-documentation--javascript-call-link---abenabap-htm---------abap---dictionary--javascript-call-link---abenabap-dictionary-htm---------abap-cds-in-abap-dictionary--javascript-call-link---abencds-htm---------abap-cds---annotations--javascript-call-link---abencds-annotations-htm---------abap-cds---sap-annotations--javascript-call-link---abencds-annotations-sap-htm---------abap-cds---abap-annotations--javascript-call-link---abencds-annotations-abap-htm---------abap-cds---abap-annotation-definitions--the-following--ddla-source-code--javascript-call-link---abenddla-source-code-glosry-htm-----glossary-entry---shows-the--cds-annotation-definitions--javascript-call-link---abencds-anno-definition-glosry-htm-----glossary-entry---in-all--abap-annotations--javascript-call-link---abencore-annotation-glosry-htm-----glossary-entry---in--cds-ddl--javascript-call-link---abencds-ddl-glosry-htm-----glossary-entry---and--cds-dcl--javascript-call-link---abencds-dcl-glosry-htm-----glossary-entry---in-abap-cds-------the-meaning-of-the--ddla-source-code--javascript-call-link---abenddla-source-code-glosry-htm-----glossary-entry---shown-here-can-be-found-in-the-documentation-for--define-annotation--javascript-call-link---abencds-f1-define-annotation-htm-----------the-semantics-of-the-annotations-can-be-found-in-the-links-in-the-ddla-source-code---the-detailed-meanings-of-these-abap-annotations-are-described-under-the-relevant--scope--javascript-call-link---abencds-annotations-scopes-htm-----defined-after--Scope](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abencds_f1_define_anno_annos.htm) in the documentation.

-   [AbapAnnotation-Annotations](#abencds-annotations-abap-ddla-1--------abapcatalog-annotations---@ITOC@@ABENCDS_ANNOTATIONS_ABAP_DDLA_2)

-   [AccessControl-Annotations](#abencds-annotations-abap-ddla-3--------api-annotations---@ITOC@@ABENCDS_ANNOTATIONS_ABAP_DDLA_4)

-   [ClientDependent-Annotations](#abencds-annotations-abap-ddla-5--------clienthandling-annotations---@ITOC@@ABENCDS_ANNOTATIONS_ABAP_DDLA_6)

-   [CompatibilityContract-Annotations](#abencds-annotations-abap-ddla-7--------dataaging-annotations---@ITOC@@ABENCDS_ANNOTATIONS_ABAP_DDLA_8)

-   [EndUserText-Annotations](#abencds-annotations-abap-ddla-9--------environment-annotations---@ITOC@@ABENCDS_ANNOTATIONS_ABAP_DDLA_10)

-   [LanguageDependency-Annotations](#abencds-annotations-abap-ddla-11--------mappingrole-annotations---@ITOC@@ABENCDS_ANNOTATIONS_ABAP_DDLA_12)

-   [Metadata-Annotations](#abencds-annotations-abap-ddla-13--------metadataextension-annotations---@ITOC@@ABENCDS_ANNOTATIONS_ABAP_DDLA_14)

-   [ObjectModel-Annotations](#abencds-annotations-abap-ddla-15--------scope------annotations---@ITOC@@ABENCDS_ANNOTATIONS_ABAP_DDLA_16)

-   [Semantics-Annotations](#abencds-annotations-abap-ddla-17---note--see-also--abap-annotation-syntax--javascript-call-link---abencds-annotations-abap-tables-htm-------abapannotation-annotations--Scope: \[[#ANNOTATION](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abencds_f1_define_anno_annos.htm)\]
annotation AbapAnnotation {
  definitionHidden : Boolean default true;
};

AbapCatalog-Annotations

@Scope:\[[#VIEW](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abencds_f1_view_entity_annotations.htm)\]
@CompatibilityContract.c2.usageAllowed: false
@API.state: \[#RELEASED\_FOR\_SAP\_CLOUD\_PLATFORM\]
annotation AbapCatalog
{
   @CompatibilityContract.c1: {
       usageAllowed: true,
       allowedChanges: {
           annotation: \[#NONE\],
           value: \[#NONE\]
       }
   }
   buffering
   {
      status : String(20) enum { NOT\_ALLOWED; ACTIVE; SWITCHED\_OFF; } default #SWITCHED\_OFF;
      type : String(10) enum { SINGLE; GENERIC; FULL; NONE; } default #NONE;
      numberOfKeyFields : Integer default 000;
   };
   @CompatibilityContract.c1: {
       usageAllowed: true,
       allowedChanges: {
           annotation: \[#ANY\],
           value: \[#ANY\]
       }
   }
   dbHints : array of
   {
      dbSystem : String(3) enum
      {
         ADA;
         DB2;
         DB4;
         DB6;
         INF;
         MSS;
         ORA;
         HDB;
         ASE;
         ALL;
      };
      hint : String(1298);
   };
   @CompatibilityContract.c1: {
       usageAllowed: true,
       allowedChanges: {
           annotation: \[#NONE\],
           value: \[#NONE\]
       }
   }
   viewEnhancementCategory : array of String(20) enum
   {
      NONE;
      PROJECTION\_LIST;
      GROUP\_BY;
      UNION;
   };
   @CompatibilityContract: {
       c1: {
           usageAllowed: true,
           allowedChanges: {
               annotation: \[#NONE\],
               value: \[#NONE\]
           }
       },
       c2: {
           usageAllowed: true,
           allowedChanges: {
               annotation: \[#NONE\],
               value: \[#NONE\]
           }
       }
   }
   @API.state: \[#RELEASED\_FOR\_SAP\_CLOUD\_PLATFORM, #RELEASED\_FOR\_KEY\_USER\_APPS\]    
   sqlViewName : String(16);
   @CompatibilityContract.c1: {
       usageAllowed: true,
       allowedChanges: {
           annotation: \[#ADD\],
           value: \[#FALSE\_TO\_TRUE\]
       }
   }
   @CompatibilityContract.c2: {
       usageAllowed: true,
       allowedChanges: {
           annotation: \[#ADD\],
           value: \[#FALSE\_TO\_TRUE\]
       }
   }    
   preserveKey : Boolean default true;
   @CompatibilityContract: {
       c1: {
           usageAllowed: true,
           allowedChanges: {
               annotation: \[#NONE\],
               value: \[#NONE\]
           }
       },
       c2: {
           usageAllowed: true,
           allowedChanges: {
               annotation: \[#NONE\],
               value: \[#NONE\]
           }
       }
   }
   compiler
   {
      compareFilter : Boolean default true;
      @Scope:\[[#ELEMENT](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abencds_f1_element_annotation.htm)\]
      @AbapAnnotation.definitionHidden: true
      @CompatibilityContract: {
        c1: {
            usageAllowed: true,
            allowedChanges: {
                annotation: \[#ANY\],
                value: \[#ANY\]
            }
        },
        c2: {
            usageAllowed: true,
            allowedChanges: {
                annotation: \[#ANY\],
                value: \[#ANY\]
            }
        }
      }
      @API.state: \[#NOT\_RELEASED\]        
      caseJoin : Boolean default true;
   };
   @AbapAnnotation.definitionHidden: true
   @CompatibilityContract.c1.usageAllowed: false
   @API.state: \[#NOT\_RELEASED\]
   internal
   {  
      @Scope:\[[#ELEMENT](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abencds_f1_element_annotation.htm)\]
      isMandt : Boolean default true;
      @Scope: \[[#VIEW](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abencds_f1_view_entity_annotations.htm), [#EXTEND\_VIEW](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abencds_f1_extend_view_annotations.htm)\]
      @CompatibilityContract: {
        c1: {
            usageAllowed: true,
            allowedChanges: {
                annotation: \[#ANY\],
                value: \[#ANY\]
            }
        },
        c2: {
            usageAllowed: true,
            allowedChanges: {
                annotation: \[#ANY\],
                value: \[#ANY\]
            }
        }
      }      
      setChange : String(30);  
      inheritedType : Boolean default true;    
   };
   @Scope:\[[#EXTEND\_VIEW](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abencds_f1_extend_view_annotations.htm)\]
   @CompatibilityContract.c1.usageAllowed: false
   sqlViewAppendName : String(16);
   @Scope:\[[#ENTITY](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abencds_f1_entity_annotations.htm)\]
   @MetadataExtension.usageAllowed: false
   @AbapAnnotation.definitionHidden: true
   @CompatibilityContract.c1.usageAllowed: false
   @API.state: \[#NOT\_RELEASED\]    
   sqlName : String(256);    
};

AccessControl-Annotations

See [Framework Specific Annotation Definitions](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abencds_annotations_frmwrk_ddla.htm).

API-Annotations

define annotation API
{
  @Scope:\[[#ANNOTATION](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abencds_f1_define_anno_annos.htm)\]
  state: array of String(40) enum {
    NOT\_RELEASED;
    RELEASED\_FOR\_SAP\_CLOUD\_PLATFORM;
    RELEASED\_FOR\_KEY\_USER\_APPS;
  };
  @Scope:\[[#ELEMENT](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abencds_f1_element_annotation.htm)\]
  @CompatibilityContract.c1.usageAllowed: true
  @CompatibilityContract.c2.usageAllowed: false
  element {    
    @CompatibilityContract.c1.allowedChanges: {annotation: \[#CUSTOM\], value: \[#CUSTOM\]}
    releaseState: String(30) enum {DEPRECATED;};
    @CompatibilityContract.c1.allowedChanges: {annotation: \[#CUSTOM\], value: \[#CUSTOM\]}
    successor: ElementRef;
  };
};

ClientDependent-Annotations

Obsolete annotations for scopes [#VIEW](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abencds_f1_view_entity_annotations.htm), [#TABLE\_FUNCTION](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abencds_f1_view_entity_annotations.htm).

ClientHandling-Annotations

@Scope:\[[#VIEW](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abencds_f1_view_entity_annotations.htm), [#TABLE\_FUNCTION](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abencds_f1_function_annotations.htm)\]
@CompatibilityContract: {
    c1: {
        usageAllowed: true,
        allowedChanges: {
            annotation: \[#NONE\],
            value: \[#NONE\]
        }
    },
    c2: {
        usageAllowed: true,
        allowedChanges: {
            annotation: \[#NONE\],
            value: \[#NONE\]
        }
    }
}  
@API.state: \[#RELEASED\_FOR\_SAP\_CLOUD\_PLATFORM\]
annotation ClientHandling
{
   type : String(20) enum { CLIENT\_DEPENDENT; CLIENT\_INDEPENDENT; INHERITED; } default #INHERITED;
   algorithm : String(20) enum { NONE; AUTOMATED; SESSION\_VARIABLE; };
};

CompatibilityContract-Annotations

@Scope:\[[#ANNOTATION](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abencds_f1_define_anno_annos.htm)\]
define annotation CompatibilityContract {
  c0 {  
    usageAllowed: Boolean default true;
    allowedChanges {
      annotation: array of String(20) enum {ADD; REMOVE; ANY; NONE; CUSTOM;};
      value: array of String(20) enum {ADD; REMOVE; UPDATE; FALSE\_TO\_TRUE; TRUE\_TO\_FALSE; ANY; NONE; CUSTOM;};
    };
  };
  c1 {  
    usageAllowed: Boolean default true;
    allowedChanges {
      annotation: array of String(20) enum {ADD; REMOVE; ANY; NONE; CUSTOM;};
      value: array of String(20) enum {ADD; REMOVE; UPDATE; FALSE\_TO\_TRUE; TRUE\_TO\_FALSE; ANY; NONE; CUSTOM;};
    };
  };
  c2 {  
    usageAllowed: Boolean default true;
    allowedChanges {
      annotation: array of String(20) enum {ADD; REMOVE; ANY; NONE; CUSTOM;};
      value: array of String(20) enum {ADD; REMOVE; UPDATE; FALSE\_TO\_TRUE; TRUE\_TO\_FALSE; ANY; NONE; CUSTOM;};
    };
  };    
}

DataAging-Annotations

@Scope:\[[#VIEW](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abencds_f1_view_entity_annotations.htm), [#TABLE\_FUNCTION](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abencds_f1_function_annotations.htm)\]
@CompatibilityContract: {
    c1: {
        usageAllowed: true,
        allowedChanges: {
            annotation: \[#ADD\],
            value: \[#FALSE\_TO\_TRUE\]
        }
    },
    c2: {
        usageAllowed: true,
        allowedChanges: {
            annotation: \[#ADD\],
            value: \[#FALSE\_TO\_TRUE\]
        }
    }
}  
annotation DataAging
{
   noAgingRestriction : Boolean default true;
};

EndUserText-Annotations

@CompatibilityContract: {
    c1: {
        usageAllowed: true,
        allowedChanges: {
            annotation: \[#ANY\],
            value: \[#ANY\]
        }
    },
    c2: {
        usageAllowed: true,
        allowedChanges: {
            annotation: \[#ANY\],
            value: \[#ANY\]
        }
    }        
}
@API.state: \[#RELEASED\_FOR\_SAP\_CLOUD\_PLATFORM\]
annotation EndUserText
{
   @MetadataExtension.usageAllowed : true
   @LanguageDependency.maxLength : 40
   @Scope:\[[#ENTITY](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abencds_f1_entity_annotations.htm), [#PARAMETER](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abencds_f1_parameter_annotations.htm), [#ELEMENT](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abencds_f1_element_annotation.htm), [#EXTEND\_VIEW](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abencds_f1_extend_view_annotations.htm), [#ROLE](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abencds_f1_dcl_role_annotations.htm), #ASPECT, [#PFCG\_MAPPING](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abencds_f1_define_pfcg_mapping.htm), [#ACCESSPOLICY](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abencds_f1_define_accesspolicy.htm), #SERVICE\]
   label : String(60);
   @MetadataExtension.usageAllowed : true
   @LanguageDependency.maxLength : 67  
   @Scope:\[[#ELEMENT](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abencds_f1_element_annotation.htm), [#PARAMETER](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abencds_f1_parameter_annotations.htm), [#ANNOTATE](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abencds_f1_metadata_ext_annos.htm)\]
   quickInfo : String(100);
   @LanguageDependency.maxLength : 37
   @Scope:\[#SIMPLE\_TYPE\]
   @API.state: \[#NOT\_RELEASED\]
   heading : String(55);
};

Environment-Annotations

@CompatibilityContract: {
    c1: {
        usageAllowed: true,
        allowedChanges: {
            annotation: \[#NONE\],
            value: \[#NONE\]
        }
    },
    c2.usageAllowed: false
}
@API.state: \[#RELEASED\_FOR\_SAP\_CLOUD\_PLATFORM\]
annotation Environment
{
   @Scope:\[[#PARAMETER](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abencds_f1_parameter_annotations.htm)\]
   systemField : String(20) enum { CLIENT; SYSTEM\_LANGUAGE; USER; SYSTEM\_DATE; SYSTEM\_TIME; };
   @Scope:\[[#ELEMENT](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abencds_f1_element_annotation.htm)\]
   sql
   {
      passValue : Boolean default true;
   };
};

LanguageDependency-Annotations

@Scope: \[[#ANNOTATION](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abencds_f1_define_anno_annos.htm)\]
annotation LanguageDependency {
  maxLength : Integer;
};

MappingRole-Annotations

@Scope:\[[#ROLE](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abencds_f1_dcl_role_annotations.htm)\]
@CompatibilityContract: {
   c1: { usageAllowed: true },
   c1: {
      allowedChanges: { annotation: \[#ADD, #REMOVE \],
                        value: \[#FALSE\_TO\_TRUE \] }
       },
   c2: { usageAllowed: true },  
   c2: {
      allowedChanges: { annotation: \[#ADD, #REMOVE \],
                        value: \[#FALSE\_TO\_TRUE \] }
       }
}  
@API.state: \[#RELEASED\_FOR\_SAP\_CLOUD\_PLATFORM\]
annotation MappingRole
: Boolean default true  
;

Metadata-Annotations

annotation Metadata {
  @Scope:\[[#ENTITY](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abencds_f1_entity_annotations.htm)\]
  @CompatibilityContract: {
      c1: {
          usageAllowed: true,
          allowedChanges: {
              annotation: \[#ADD\],
              value: \[#FALSE\_TO\_TRUE\]
          }
      },
      c2.usageAllowed: false
  }
  allowExtensions : Boolean default true;
  @Scope:\[[#VIEW](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abencds_f1_view_entity_annotations.htm)\]
  @CompatibilityContract: {
      c1: {
          usageAllowed: true,
          allowedChanges: {
              annotation: \[#NONE\],
              value: \[#NONE\]
          }
      },
      c2: {
          usageAllowed: true,
          allowedChanges: {
              annotation: \[#NONE\],
              value: \[#NONE\]
          }
      }
  }
  @API.state: \[#RELEASED\_FOR\_SAP\_CLOUD\_PLATFORM\]
  ignorePropagatedAnnotations : Boolean default true;
  @MetadataExtension.usageAllowed : true
  @Scope:\[[#ANNOTATE](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abencds_f1_metadata_ext_annos.htm)\]
  @CompatibilityContract.c1: {
      usageAllowed: true,
      allowedChanges: {
          annotation: \[#NONE\],
          value: \[#NONE\]
      }
  }
  @CompatibilityContract.c2.usageAllowed: false
  layer : Integer  
    enum {
      CORE;      
      LOCALIZATION;
      INDUSTRY;
      PARTNER;
      CUSTOMER;
    };
};

MetadataExtension-Annotations

@Scope: \[[#ANNOTATION](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abencds_f1_define_anno_annos.htm)\]
annotation MetadataExtension {
  usageAllowed : Boolean default true;
};

ObjectModel-Annotations

See [Framework Specific Annotation Definitions](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abencds_annotations_frmwrk_ddla.htm).

Scope\[ \]-Annotations

@Scope: \[[#ANNOTATION](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abencds_f1_define_anno_annos.htm)\]
annotation Scope : array of String(20)  
  enum {  
    ENTITY;                
    VIEW;                  
    TABLE\_FUNCTION;        
    EXTEND\_VIEW;          
    ROLE;                  
    ACCESSPOLICY;          
    ANNOTATION;            
    ANNOTATE;              
    SERVICE;              
    CUSTOM\_ENTITY;        
    HIERARCHY;            
    PARAMETER;            
    ELEMENT;              
    ASPECT;                
    PFCG\_MAPPING;          
    SIMPLE\_TYPE;          
  };

Semantics-Annotations

...
define annotation Semantics
{
  ...
   @API.state: \[ #RELEASED\_FOR\_SAP\_CLOUD\_PLATFORM \]        
   amount      
   {      
       currencyCode    : ElementRef;  
   };      
   @Scope:\[[#ELEMENT](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abencds_f1_element_annotation.htm)\]
   @CompatibilityContract: {
   c1: { usageAllowed: true,
         allowedChanges.annotation: \[ #NONE \],
         allowedChanges.value: \[ #NONE \] },    
   c2: { usageAllowed: true,
         allowedChanges.annotation: \[ #NONE \],
         allowedChanges.value: \[ #NONE \] } }  
   @API.state: \[ #RELEASED\_FOR\_SAP\_CLOUD\_PLATFORM \]          
   quantity      
   {      
       unitOfMeasure   : ElementRef;  
   };      
   @Scope:\[[#ELEMENT](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abencds_f1_element_annotation.htm)\]
   @CompatibilityContract: {
   c1: { usageAllowed: true,
         allowedChanges.annotation: \[ #NONE \],
         allowedChanges.value: \[ #NONE \] },    
   c2: { usageAllowed: true,
         allowedChanges.annotation: \[ #NONE \],
         allowedChanges.value: \[ #NONE \] } }  
   @API.state: \[ #RELEASED\_FOR\_SAP\_CLOUD\_PLATFORM \]          
   currencyCode        : Boolean default true;
   @Scope:\[[#ELEMENT](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abencds_f1_element_annotation.htm)\]
   @CompatibilityContract: {
   c1: { usageAllowed: true,
         allowedChanges.annotation: \[ #NONE \],
         allowedChanges.value: \[ #NONE \] },    
   c2: { usageAllowed: true,
         allowedChanges.annotation: \[ #NONE \],
         allowedChanges.value: \[ #NONE \] } }      
   @API.state: \[ #RELEASED\_FOR\_SAP\_CLOUD\_PLATFORM \]      
   unitOfMeasure       : Boolean default true;  
   @Scope:\[[#ELEMENT](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abencds_f1_element_annotation.htm)\]
   @CompatibilityContract: {
   c1: { usageAllowed: false },    
   c2: { usageAllowed: false } }  
   booleanIndicator    : Boolean default true;
  ...
};



**📖 Source**: [abencds_annotations_abap_ddla.htm](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abencds_annotations_abap_ddla.htm)

### abencds_annotations_abap_tables.htm

> **📖 Official SAP Documentation**: [abencds_annotations_abap_tables.htm](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abencds_annotations_abap_tables.htm)
> **🔍 Direct Link**: This section contains the complete content from the official SAP ABAP documentation page.


  

* * *

AS ABAP Release 754, ©Copyright 2019 SAP SE. All rights reserved.

[ABAP Keyword Documentation](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenabap.htm) →  [ABAP - Dictionary](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenabap_dictionary.htm) →  [ABAP CDS in ABAP Dictionary](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abencds.htm) →  [ABAP CDS - Annotations](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abencds_annotations.htm) →  [ABAP CDS - SAP Annotations](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abencds_annotations_sap.htm) →  [ABAP CDS - ABAP Annotations](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abencds_annotations_abap.htm) → 

ABAP CDS - ABAP Annotation Syntax

The following tables summarize the [annotation syntax](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abencds_annotation_syntax_glosry.htm "Glossary Entry") of all [ABAP annotations](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abencore_annotation_glosry.htm "Glossary Entry") in [CDS DDL](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abencds_ddl_glosry.htm "Glossary Entry") and [CDS DCL](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abencds_dcl_glosry.htm "Glossary Entry") in ABAP CDS. Any specified subannotations are shown using [chainings](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abencds_annotations_syntax_name.htm). If square brackets \[ \] are specified after a name in the column Annotation, this means that the annotation in front of the square brackets is an [annotation array](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenannotation_array_glosry.htm "Glossary Entry"). Any enumeration symbols in an annotation are specified in the column Enums. The column Default shows the default values applied to the evaluation when an annotation is specified without a value. The columns Text and MDE indicate whether the annotation values are translatable texts and whether the annotation can be specified in a [metadata extension](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abencds_metadata_extension_glosry.htm "Glossary Entry"). The API column indicates whether the annotation can be used in CDS entities defined in [ABAP for SAP Cloud Platform](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenabap_for_sap_cloud_glosry.htm "Glossary Entry"). The detailed meanings of each ABAP annotation is documented for the corresponding [scope](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abencds_annotations_scopes.htm) in this documentation.

-   [AbapAnnotation-Annotations](#abencds-annotations-abap-tables-1--------abapcatalog-annotations---@ITOC@@ABENCDS_ANNOTATIONS_ABAP_TABLES_2)

-   [AccessControl-Annotations](#abencds-annotations-abap-tables-3--------api-annotations---@ITOC@@ABENCDS_ANNOTATIONS_ABAP_TABLES_4)

-   [ClientDependent-Annotations](#abencds-annotations-abap-tables-5--------clienthandling-annotations---@ITOC@@ABENCDS_ANNOTATIONS_ABAP_TABLES_6)

-   [CompatibilityContract-Annotations](#abencds-annotations-abap-tables-7--------dataaging-annotations---@ITOC@@ABENCDS_ANNOTATIONS_ABAP_TABLES_8)

-   [EndUserText-Annotations](#abencds-annotations-abap-tables-9--------environment-annotations---@ITOC@@ABENCDS_ANNOTATIONS_ABAP_TABLES_10)

-   [LanguageDependency-Annotations](#abencds-annotations-abap-tables-11--------mappingrole-annotations---@ITOC@@ABENCDS_ANNOTATIONS_ABAP_TABLES_12)

-   [Metadata-Annotations](#abencds-annotations-abap-tables-13--------metadataextension-annotations---@ITOC@@ABENCDS_ANNOTATIONS_ABAP_TABLES_14)

-   [ObjectModel-Annotations](#abencds-annotations-abap-tables-15--------scope------annotations---@ITOC@@ABENCDS_ANNOTATIONS_ABAP_TABLES_16)

-   [Semantics-Annotations](#abencds-annotations-abap-tables-17---note--see-also--abap-annotation-definitions--javascript-call-link---abencds-annotations-abap-ddla-htm-------abapannotation-annotations--annotation--meaning--scope--typ--enums--default--text--mde--api--abapannotation-definitionhidden--annotation-definition--test-annotation-or-demonstration-annotation-that-cannot-be-used-in-production-cds-source-code---annotation-definition--javascript-call-link---abencds-f1-define-anno-annos-htm------boolean------true--------------abapcatalog-annotations--annotation--meaning--scope--typ--enums--default--text--mde--api--abapcatalog-buffering-numberofkeyfields--table-buffering--number-of-key-fields-when-buffering-generic-areas---view--javascript-call-link---abencds-f1-view-entity-annotations-htm------integer------000----------released--for--sap--cloud--platform--abapcatalog-buffering-status--table-buffering--enables-and-disables-buffering---view--javascript-call-link---abencds-f1-view-entity-annotations-htm------string-20----active--not--allowed--switched--off---switched--off----------released--for--sap--cloud--platform--abapcatalog-buffering-type--table-buffering--defines-the-buffering-type---view--javascript-call-link---abencds-f1-view-entity-annotations-htm------string-10----full--generic--none--single---none----------released--for--sap--cloud--platform--abapcatalog-compiler-comparefilter--cds-view--specifies-how-filter-conditions-are-evaluated-in-path-expressions---view--javascript-call-link---abencds-f1-view-entity-annotations-htm------boolean------true----------released--for--sap--cloud--platform--abapcatalog-dbhints------dbsystem--obsolete--replaced-by-consumption-dbhintscalculatedby---view--javascript-call-link---abencds-f1-view-entity-annotations-htm------string-3----ada--all--ase--db2--db4--db6--hdb--inf--mss--ora--------------released--for--sap--cloud--platform--abapcatalog-dbhints------hint--obsolete--replaced-by-consumption-dbhints--------view--javascript-call-link---abencds-f1-view-entity-annotations-htm------string-1298-------------------released--for--sap--cloud--platform--abapcatalog-preservekey--cds-view--specifies-the-definition-of-the-key-fields-in-the-associated-database-view---view--javascript-call-link---abencds-f1-view-entity-annotations-htm------boolean------true----------released--for--sap--cloud--platform--abapcatalog-sqlviewappendname--cds-view-extension--name-of-the-append-view---view-extension--javascript-call-link---abencds-f1-extend-view-annotations-htm------string-16-------------------released--for--sap--cloud--platform--abapcatalog-sqlviewname--cds-view--name-of-the-database-view---view--javascript-call-link---abencds-f1-view-entity-annotations-htm------string-16-------------------released--for--key--user--appsreleased--for--sap--cloud--platform--abapcatalog-viewenhancementcategory-------cds-view--specifies-how-the-view-can-be-extended-using-cds-view-extensions---view--javascript-call-link---abencds-f1-view-entity-annotations-htm------string-20----group--by--none--projection--list--union--------------released--for--sap--cloud--platform--accesscontrol-annotations--annotation--meaning--scope--typ--enums--default--text--mde--api--accesscontrol-authorizationcheck--cds-access-control--specifies-implicit-access-control---hierarchy--javascript-call-link---abencds-f1-hierarchy-annotations-htm------table-function--javascript-call-link---abencds-f1-function-annotations-htm------view--javascript-call-link---abencds-f1-view-entity-annotations-htm------string-20----check--not--allowed--not--required--privileged--only---check----------released--for--sap--cloud--platform--api-annotations--annotation--meaning--scope--typ--enums--default--text--mde--api--api-element-releasestate--element-annotation--release-element---element--javascript-call-link---abencds-f1-element-annotation-htm------string-30----deprecated------------------api-element-successor--element-annotation--successor-of-rejected-element---element--javascript-call-link---abencds-f1-element-annotation-htm------elementref----------------------api-state-------annotation-definition--release-annotation---annotation-definition--javascript-call-link---abencds-f1-define-anno-annos-htm------string-40----not--released--released--for--key--user--apps--released--for--sap--cloud--platform------------------clientdependent-annotations--annotation--meaning--scope--typ--enums--default--text--mde--api--clientdependent--specifies-client-dependency-and-how-clients-are-handled--obsolete----table-function--javascript-call-link---abencds-f1-function-annotations-htm------view--javascript-call-link---abencds-f1-view-entity-annotations-htm------boolean------true--------------clienthandling-annotations--annotation--meaning--scope--typ--enums--default--text--mde--api--clienthandling-algorithm--specifies-client-handling---table-function--javascript-call-link---abencds-f1-function-annotations-htm------view--javascript-call-link---abencds-f1-view-entity-annotations-htm------string-20----automated--none--session--variable--------------released--for--sap--cloud--platform--clienthandling-type--specifies-client-dependency---table-function--javascript-call-link---abencds-f1-function-annotations-htm------view--javascript-call-link---abencds-f1-view-entity-annotations-htm------string-20----client--dependent--client--independent--inherited---inherited----------released--for--sap--cloud--platform--compatibilitycontract-annotations--annotation--meaning--scope--typ--enums--default--text--mde--api--compatibilitycontract-c0-allowedchanges-annotation-------modifiability-of-an-annotation-in-released-cds-entities---annotation-definition--javascript-call-link---abencds-f1-define-anno-annos-htm------string-20----add--any--custom--none--remove------------------compatibilitycontract-c0-allowedchanges-value-------modifiability-of-annotation-values-in-released-cds-entities---annotation-definition--javascript-call-link---abencds-f1-define-anno-annos-htm------string-20----add--any--custom--false--to--true--none--remove--true--to--false--update------------------compatibilitycontract-c0-usageallowed--usability-of-an-annotation-in-released-cds-entities---annotation-definition--javascript-call-link---abencds-f1-define-anno-annos-htm------boolean------true--------------compatibilitycontract-c1-allowedchanges-annotation-------modifiability-of-an-annotation-in-released-cds-entities---annotation-definition--javascript-call-link---abencds-f1-define-anno-annos-htm------string-20----add--any--custom--none--remove------------------compatibilitycontract-c1-allowedchanges-value-------modifiability-of-annotation-values-in-released-cds-entities---annotation-definition--javascript-call-link---abencds-f1-define-anno-annos-htm------string-20----add--any--custom--false--to--true--none--remove--true--to--false--update------------------compatibilitycontract-c1-usageallowed--usability-of-an-annotation-in-released-cds-entities---annotation-definition--javascript-call-link---abencds-f1-define-anno-annos-htm------boolean------true--------------compatibilitycontract-c2-allowedchanges-annotation-------modifiability-of-an-annotation-in-released-cds-entities---annotation-definition--javascript-call-link---abencds-f1-define-anno-annos-htm------string-20----add--any--custom--none--remove------------------compatibilitycontract-c2-allowedchanges-value-------modifiability-of-annotation-values-in-released-cds-entities---annotation-definition--javascript-call-link---abencds-f1-define-anno-annos-htm------string-20----add--any--custom--false--to--true--none--remove--true--to--false--update------------------compatibilitycontract-c2-usageallowed--usability-of-an-annotation-in-released-cds-entities---annotation-definition--javascript-call-link---abencds-f1-define-anno-annos-htm------boolean------true--------------dataaging-annotations--annotation--meaning--scope--typ--enums--default--text--mde--api--dataaging-noagingrestriction--data-aging-on-sap-hana--specifies-how-old-data-is-handled---table-function--javascript-call-link---abencds-f1-function-annotations-htm------view--javascript-call-link---abencds-f1-view-entity-annotations-htm------boolean------true--------------endusertext-annotations--annotation--meaning--scope--typ--enums--default--text--mde--api--endusertext-heading--texts--implicit-annotation-for-data-element-header-----string-55-----------x------not--released--endusertext-label--texts--short-text-connected-to-translation---access-policy--javascript-call-link---abencds-f1-define-accesspolicy-htm------element--javascript-call-link---abencds-f1-element-annotation-htm------entity--javascript-call-link---abencds-f1-entity-annotations-htm------view-extension--javascript-call-link---abencds-f1-extend-view-annotations-htm------parameter--javascript-call-link---abencds-f1-parameter-annotations-htm------pfcg-mapping--javascript-call-link---abencds-f1-define-pfcg-mapping-htm------role--javascript-call-link---abencds-f1-dcl-role-annotations-htm------string-60-----------x--x--released--for--sap--cloud--platform--endusertext-quickinfo--texts--tooltip-connected-to-translation---meta-data-extension--javascript-call-link---abencds-f1-metadata-ext-annos-htm------element--javascript-call-link---abencds-f1-element-annotation-htm------parameter--javascript-call-link---abencds-f1-parameter-annotations-htm------string-100-----------x--x--released--for--sap--cloud--platform--environment-annotations--annotation--meaning--scope--typ--enums--default--text--mde--api--environment-sql-passvalue--defines-pass-by-value-of-host-variables-in-comparisons-in-abap-sql---element--javascript-call-link---abencds-f1-element-annotation-htm------boolean------true----------released--for--sap--cloud--platform--environment-systemfield--environment--assigns-an-abap-system-field---parameter--javascript-call-link---abencds-f1-parameter-annotations-htm------string-20----client--system--date--system--language--system--time--user--------------released--for--sap--cloud--platform--languagedependency-annotations--annotation--meaning--scope--typ--enums--default--text--mde--api--languagedependency-maxlength--annotation-definition--specifies-the-translatibility-of-texts---annotation-definition--javascript-call-link---abencds-f1-define-anno-annos-htm------integer----------------------mappingrole-annotations--annotation--meaning--scope--typ--enums--default--text--mde--api--mappingrole--access-control--specifies-the-assignment-of-a-cds-role-to-users---role--javascript-call-link---abencds-f1-dcl-role-annotations-htm------boolean------true----------released--for--sap--cloud--platform--metadata-annotations--annotation--meaning--scope--typ--enums--default--text--mde--api--metadata-allowextensions--metadata--specifies-extensibility-using-metadata-extensions---entity--javascript-call-link---abencds-f1-entity-annotations-htm------boolean------true--------------metadata-ignorepropagatedannotations--metadata--specifies-how-propagated-annotations-are-evaluated-using-the-class-cl--dd--ddl--annotation--service---view--javascript-call-link---abencds-f1-view-entity-annotations-htm------boolean------true----------released--for--sap--cloud--platform--metadata-layer--metadata--specfies-layer-in-cds-metadata-extension---meta-data-extension--javascript-call-link---abencds-f1-metadata-ext-annos-htm------integer---core--customer--industry--localization--partner----------x------metadataextension-annotations--annotation--meaning--scope--typ--enums--default--text--mde--api--metadataextension-usageallowed--annotation-definition--specifies-the-distribution-of-the-annotation-in-cds-metadata-extensions---annotation-definition--javascript-call-link---abencds-f1-define-anno-annos-htm------boolean------true--------------objectmodel-annotations--annotation--meaning--scope--typ--enums--default--text--mde--api--objectmodel-usagetype-dataclass--undocumented---table-function--javascript-call-link---abencds-f1-function-annotations-htm------view--javascript-call-link---abencds-f1-view-entity-annotations-htm------string-30----customizing--master--meta--mixed--organizational--transactional---mixed--------------objectmodel-usagetype-servicequality--undocumented---table-function--javascript-call-link---abencds-f1-function-annotations-htm------view--javascript-call-link---abencds-f1-view-entity-annotations-htm------string-30----a--b--c--d--p--x---x--------------objectmodel-usagetype-sizecategory--undocumented---table-function--javascript-call-link---abencds-f1-function-annotations-htm------view--javascript-call-link---abencds-f1-view-entity-annotations-htm------string-3----l--m--s--xl--xxl---s--------------scope------annotations--annotation--meaning--scope--typ--enums--default--text--mde--api--scope-------annotation-definition--defines-the-range-of-validity-of-the-annotation----annotation-definition--javascript-call-link---abencds-f1-define-anno-annos-htm------string-20----accesspolicy--annotate--annotation--aspect--custom--entity--element--entity--extend--view--hierarchy--parameter--pfcg--mapping--role--service--simple--type--table--function--view------------------semantics-annotations--annotation--meaning--scope--typ--enums--default--text--mde--api--semantics-amount-currencycode--currency-field---element--javascript-call-link---abencds-f1-element-annotation-htm------elementref------------------released--for--sap--cloud--platform--semantics-currencycode--currency-key---element--javascript-call-link---abencds-f1-element-annotation-htm------boolean------true----------released--for--sap--cloud--platform--semantics-quantity-unitofmeasure--quantity-field---element--javascript-call-link---abencds-f1-element-annotation-htm------elementref------------------released--for--sap--cloud--platform--semantics-unitofmeasure--unit-key---element--javascript-call-link---abencds-f1-element-annotation-htm------boolean------true----------released--for--sap--cloud--platform------------abap-keyword-documentation---abap---dictionary---abap-cds-in-abap-dictionary---abap-cds---annotations---abap-cds---sap-annotations---abap-cds---abap-annotations----files----3-----difficulty----advanced----abap-keyword-documentation---abap---dictionary---abap-cds-in-abap-dictionary---abap-cds---annotations---abap-cds---sap-annotations---abap-cds---abap-annotations--included-pages--3---------source-----abencds-annotations-abap-tables-htm--https---help-sap-com-doc-abapdocu-754-index-htm-7-54-en-us-abencds-annotations-abap-tables-htm-------abencds-annotations-abap-htm-------------as-abap-release-754---copyright-2019-sap-se--all-rights-reserved----abap-keyword-documentation--javascript-call-link---abenabap-htm---------abap---dictionary--javascript-call-link---abenabap-dictionary-htm---------abap-cds-in-abap-dictionary--javascript-call-link---abencds-htm---------abap-cds---annotations--javascript-call-link---abencds-annotations-htm---------abap-cds---sap-annotations--javascript-call-link---abencds-annotations-sap-htm---------abap-cds---abap-annotations--abap-annotations-are--sap-annotations--javascript-call-link---abensap-annotation-glosry-htm-----glossary-entry---that-are-evaluated-by-the-abap-runtime-environment--the-following-sections-show-the-associated--annotation-definitions--javascript-call-link---abencds-anno-definition-glosry-htm-----glossary-entry---and-the--annotation-syntax--javascript-call-link---abencds-annotation-syntax-glosry-htm-----glossary-entry----------abap-annotation-definitions--javascript-call-link---abencds-annotations-abap-ddla-htm-----------abap-annotation-syntax--javascript-call-link---abencds-annotations-abap-tables-htm------the-detailed-meanings-of-the-abap-annotations-is-documented-for-the-corresponding--scope--javascript-call-link---abencds-annotations-scopes-htm-----in-this-documentation---note--an-abap-annotation-can-also-be-evaluated-by-frameworks-of-other-software-components---continue--abap-cds---abap-annotation-definitions--javascript-call-link---abencds-annotations-abap-ddla-htm------abap-cds---abap-annotation-syntax--javascript-call-link---abencds-annotations-abap-tables-htm-------------source-----abencds-annotations-abap-htm--https---help-sap-com-doc-abapdocu-754-index-htm-7-54-en-us-abencds-annotations-abap-htm-------abencds-annotations-abap-ddla-htm-------------as-abap-release-754---copyright-2019-sap-se--all-rights-reserved----abap-keyword-documentation--javascript-call-link---abenabap-htm---------abap---dictionary--javascript-call-link---abenabap-dictionary-htm---------abap-cds-in-abap-dictionary--javascript-call-link---abencds-htm---------abap-cds---annotations--javascript-call-link---abencds-annotations-htm---------abap-cds---sap-annotations--javascript-call-link---abencds-annotations-sap-htm---------abap-cds---abap-annotations--javascript-call-link---abencds-annotations-abap-htm---------abap-cds---abap-annotation-definitions--the-following--ddla-source-code--javascript-call-link---abenddla-source-code-glosry-htm-----glossary-entry---shows-the--cds-annotation-definitions--javascript-call-link---abencds-anno-definition-glosry-htm-----glossary-entry---in-all--abap-annotations--javascript-call-link---abencore-annotation-glosry-htm-----glossary-entry---in--cds-ddl--javascript-call-link---abencds-ddl-glosry-htm-----glossary-entry---and--cds-dcl--javascript-call-link---abencds-dcl-glosry-htm-----glossary-entry---in-abap-cds-------the-meaning-of-the--ddla-source-code--javascript-call-link---abenddla-source-code-glosry-htm-----glossary-entry---shown-here-can-be-found-in-the-documentation-for--define-annotation--javascript-call-link---abencds-f1-define-annotation-htm-----------the-semantics-of-the-annotations-can-be-found-in-the-links-in-the-ddla-source-code---the-detailed-meanings-of-these-abap-annotations-are-described-under-the-relevant--scope--javascript-call-link---abencds-annotations-scopes-htm-----defined-after--Scope](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abencds_f1_define_anno_annos.htm) in the documentation.

-   [AbapAnnotation-Annotations](#abencds-annotations-abap-ddla-1--------abapcatalog-annotations---@ITOC@@ABENCDS_ANNOTATIONS_ABAP_DDLA_2)

-   [AccessControl-Annotations](#abencds-annotations-abap-ddla-3--------api-annotations---@ITOC@@ABENCDS_ANNOTATIONS_ABAP_DDLA_4)

-   [ClientDependent-Annotations](#abencds-annotations-abap-ddla-5--------clienthandling-annotations---@ITOC@@ABENCDS_ANNOTATIONS_ABAP_DDLA_6)

-   [CompatibilityContract-Annotations](#abencds-annotations-abap-ddla-7--------dataaging-annotations---@ITOC@@ABENCDS_ANNOTATIONS_ABAP_DDLA_8)

-   [EndUserText-Annotations](#abencds-annotations-abap-ddla-9--------environment-annotations---@ITOC@@ABENCDS_ANNOTATIONS_ABAP_DDLA_10)

-   [LanguageDependency-Annotations](#abencds-annotations-abap-ddla-11--------mappingrole-annotations---@ITOC@@ABENCDS_ANNOTATIONS_ABAP_DDLA_12)

-   [Metadata-Annotations](#abencds-annotations-abap-ddla-13--------metadataextension-annotations---@ITOC@@ABENCDS_ANNOTATIONS_ABAP_DDLA_14)

-   [ObjectModel-Annotations](#abencds-annotations-abap-ddla-15--------scope------annotations---@ITOC@@ABENCDS_ANNOTATIONS_ABAP_DDLA_16)

-   [Semantics-Annotations](#abencds-annotations-abap-ddla-17---note--see-also--abap-annotation-syntax--javascript-call-link---abencds-annotations-abap-tables-htm-------abapannotation-annotations--Scope: \[[#ANNOTATION](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abencds_f1_define_anno_annos.htm)\]
annotation AbapAnnotation {
  definitionHidden : Boolean default true;
};

AbapCatalog-Annotations

@Scope:\[[#VIEW](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abencds_f1_view_entity_annotations.htm)\]
@CompatibilityContract.c2.usageAllowed: false
@API.state: \[#RELEASED\_FOR\_SAP\_CLOUD\_PLATFORM\]
annotation AbapCatalog
{
   @CompatibilityContract.c1: {
       usageAllowed: true,
       allowedChanges: {
           annotation: \[#NONE\],
           value: \[#NONE\]
       }
   }
   buffering
   {
      status : String(20) enum { NOT\_ALLOWED; ACTIVE; SWITCHED\_OFF; } default #SWITCHED\_OFF;
      type : String(10) enum { SINGLE; GENERIC; FULL; NONE; } default #NONE;
      numberOfKeyFields : Integer default 000;
   };
   @CompatibilityContract.c1: {
       usageAllowed: true,
       allowedChanges: {
           annotation: \[#ANY\],
           value: \[#ANY\]
       }
   }
   dbHints : array of
   {
      dbSystem : String(3) enum
      {
         ADA;
         DB2;
         DB4;
         DB6;
         INF;
         MSS;
         ORA;
         HDB;
         ASE;
         ALL;
      };
      hint : String(1298);
   };
   @CompatibilityContract.c1: {
       usageAllowed: true,
       allowedChanges: {
           annotation: \[#NONE\],
           value: \[#NONE\]
       }
   }
   viewEnhancementCategory : array of String(20) enum
   {
      NONE;
      PROJECTION\_LIST;
      GROUP\_BY;
      UNION;
   };
   @CompatibilityContract: {
       c1: {
           usageAllowed: true,
           allowedChanges: {
               annotation: \[#NONE\],
               value: \[#NONE\]
           }
       },
       c2: {
           usageAllowed: true,
           allowedChanges: {
               annotation: \[#NONE\],
               value: \[#NONE\]
           }
       }
   }
   @API.state: \[#RELEASED\_FOR\_SAP\_CLOUD\_PLATFORM, #RELEASED\_FOR\_KEY\_USER\_APPS\]    
   sqlViewName : String(16);
   @CompatibilityContract.c1: {
       usageAllowed: true,
       allowedChanges: {
           annotation: \[#ADD\],
           value: \[#FALSE\_TO\_TRUE\]
       }
   }
   @CompatibilityContract.c2: {
       usageAllowed: true,
       allowedChanges: {
           annotation: \[#ADD\],
           value: \[#FALSE\_TO\_TRUE\]
       }
   }    
   preserveKey : Boolean default true;
   @CompatibilityContract: {
       c1: {
           usageAllowed: true,
           allowedChanges: {
               annotation: \[#NONE\],
               value: \[#NONE\]
           }
       },
       c2: {
           usageAllowed: true,
           allowedChanges: {
               annotation: \[#NONE\],
               value: \[#NONE\]
           }
       }
   }
   compiler
   {
      compareFilter : Boolean default true;
      @Scope:\[[#ELEMENT](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abencds_f1_element_annotation.htm)\]
      @AbapAnnotation.definitionHidden: true
      @CompatibilityContract: {
        c1: {
            usageAllowed: true,
            allowedChanges: {
                annotation: \[#ANY\],
                value: \[#ANY\]
            }
        },
        c2: {
            usageAllowed: true,
            allowedChanges: {
                annotation: \[#ANY\],
                value: \[#ANY\]
            }
        }
      }
      @API.state: \[#NOT\_RELEASED\]        
      caseJoin : Boolean default true;
   };
   @AbapAnnotation.definitionHidden: true
   @CompatibilityContract.c1.usageAllowed: false
   @API.state: \[#NOT\_RELEASED\]
   internal
   {  
      @Scope:\[[#ELEMENT](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abencds_f1_element_annotation.htm)\]
      isMandt : Boolean default true;
      @Scope: \[[#VIEW](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abencds_f1_view_entity_annotations.htm), [#EXTEND\_VIEW](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abencds_f1_extend_view_annotations.htm)\]
      @CompatibilityContract: {
        c1: {
            usageAllowed: true,
            allowedChanges: {
                annotation: \[#ANY\],
                value: \[#ANY\]
            }
        },
        c2: {
            usageAllowed: true,
            allowedChanges: {
                annotation: \[#ANY\],
                value: \[#ANY\]
            }
        }
      }      
      setChange : String(30);  
      inheritedType : Boolean default true;    
   };
   @Scope:\[[#EXTEND\_VIEW](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abencds_f1_extend_view_annotations.htm)\]
   @CompatibilityContract.c1.usageAllowed: false
   sqlViewAppendName : String(16);
   @Scope:\[[#ENTITY](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abencds_f1_entity_annotations.htm)\]
   @MetadataExtension.usageAllowed: false
   @AbapAnnotation.definitionHidden: true
   @CompatibilityContract.c1.usageAllowed: false
   @API.state: \[#NOT\_RELEASED\]    
   sqlName : String(256);    
};

AccessControl-Annotations

See [Framework Specific Annotation Definitions](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abencds_annotations_frmwrk_ddla.htm).

API-Annotations

define annotation API
{
  @Scope:\[[#ANNOTATION](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abencds_f1_define_anno_annos.htm)\]
  state: array of String(40) enum {
    NOT\_RELEASED;
    RELEASED\_FOR\_SAP\_CLOUD\_PLATFORM;
    RELEASED\_FOR\_KEY\_USER\_APPS;
  };
  @Scope:\[[#ELEMENT](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abencds_f1_element_annotation.htm)\]
  @CompatibilityContract.c1.usageAllowed: true
  @CompatibilityContract.c2.usageAllowed: false
  element {    
    @CompatibilityContract.c1.allowedChanges: {annotation: \[#CUSTOM\], value: \[#CUSTOM\]}
    releaseState: String(30) enum {DEPRECATED;};
    @CompatibilityContract.c1.allowedChanges: {annotation: \[#CUSTOM\], value: \[#CUSTOM\]}
    successor: ElementRef;
  };
};

ClientDependent-Annotations

Obsolete annotations for scopes [#VIEW](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abencds_f1_view_entity_annotations.htm), [#TABLE\_FUNCTION](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abencds_f1_view_entity_annotations.htm).

ClientHandling-Annotations

@Scope:\[[#VIEW](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abencds_f1_view_entity_annotations.htm), [#TABLE\_FUNCTION](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abencds_f1_function_annotations.htm)\]
@CompatibilityContract: {
    c1: {
        usageAllowed: true,
        allowedChanges: {
            annotation: \[#NONE\],
            value: \[#NONE\]
        }
    },
    c2: {
        usageAllowed: true,
        allowedChanges: {
            annotation: \[#NONE\],
            value: \[#NONE\]
        }
    }
}  
@API.state: \[#RELEASED\_FOR\_SAP\_CLOUD\_PLATFORM\]
annotation ClientHandling
{
   type : String(20) enum { CLIENT\_DEPENDENT; CLIENT\_INDEPENDENT; INHERITED; } default #INHERITED;
   algorithm : String(20) enum { NONE; AUTOMATED; SESSION\_VARIABLE; };
};

CompatibilityContract-Annotations

@Scope:\[[#ANNOTATION](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abencds_f1_define_anno_annos.htm)\]
define annotation CompatibilityContract {
  c0 {  
    usageAllowed: Boolean default true;
    allowedChanges {
      annotation: array of String(20) enum {ADD; REMOVE; ANY; NONE; CUSTOM;};
      value: array of String(20) enum {ADD; REMOVE; UPDATE; FALSE\_TO\_TRUE; TRUE\_TO\_FALSE; ANY; NONE; CUSTOM;};
    };
  };
  c1 {  
    usageAllowed: Boolean default true;
    allowedChanges {
      annotation: array of String(20) enum {ADD; REMOVE; ANY; NONE; CUSTOM;};
      value: array of String(20) enum {ADD; REMOVE; UPDATE; FALSE\_TO\_TRUE; TRUE\_TO\_FALSE; ANY; NONE; CUSTOM;};
    };
  };
  c2 {  
    usageAllowed: Boolean default true;
    allowedChanges {
      annotation: array of String(20) enum {ADD; REMOVE; ANY; NONE; CUSTOM;};
      value: array of String(20) enum {ADD; REMOVE; UPDATE; FALSE\_TO\_TRUE; TRUE\_TO\_FALSE; ANY; NONE; CUSTOM;};
    };
  };    
}

DataAging-Annotations

@Scope:\[[#VIEW](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abencds_f1_view_entity_annotations.htm), [#TABLE\_FUNCTION](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abencds_f1_function_annotations.htm)\]
@CompatibilityContract: {
    c1: {
        usageAllowed: true,
        allowedChanges: {
            annotation: \[#ADD\],
            value: \[#FALSE\_TO\_TRUE\]
        }
    },
    c2: {
        usageAllowed: true,
        allowedChanges: {
            annotation: \[#ADD\],
            value: \[#FALSE\_TO\_TRUE\]
        }
    }
}  
annotation DataAging
{
   noAgingRestriction : Boolean default true;
};

EndUserText-Annotations

@CompatibilityContract: {
    c1: {
        usageAllowed: true,
        allowedChanges: {
            annotation: \[#ANY\],
            value: \[#ANY\]
        }
    },
    c2: {
        usageAllowed: true,
        allowedChanges: {
            annotation: \[#ANY\],
            value: \[#ANY\]
        }
    }        
}
@API.state: \[#RELEASED\_FOR\_SAP\_CLOUD\_PLATFORM\]
annotation EndUserText
{
   @MetadataExtension.usageAllowed : true
   @LanguageDependency.maxLength : 40
   @Scope:\[[#ENTITY](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abencds_f1_entity_annotations.htm), [#PARAMETER](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abencds_f1_parameter_annotations.htm), [#ELEMENT](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abencds_f1_element_annotation.htm), [#EXTEND\_VIEW](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abencds_f1_extend_view_annotations.htm), [#ROLE](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abencds_f1_dcl_role_annotations.htm), #ASPECT, [#PFCG\_MAPPING](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abencds_f1_define_pfcg_mapping.htm), [#ACCESSPOLICY](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abencds_f1_define_accesspolicy.htm), #SERVICE\]
   label : String(60);
   @MetadataExtension.usageAllowed : true
   @LanguageDependency.maxLength : 67  
   @Scope:\[[#ELEMENT](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abencds_f1_element_annotation.htm), [#PARAMETER](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abencds_f1_parameter_annotations.htm), [#ANNOTATE](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abencds_f1_metadata_ext_annos.htm)\]
   quickInfo : String(100);
   @LanguageDependency.maxLength : 37
   @Scope:\[#SIMPLE\_TYPE\]
   @API.state: \[#NOT\_RELEASED\]
   heading : String(55);
};

Environment-Annotations

@CompatibilityContract: {
    c1: {
        usageAllowed: true,
        allowedChanges: {
            annotation: \[#NONE\],
            value: \[#NONE\]
        }
    },
    c2.usageAllowed: false
}
@API.state: \[#RELEASED\_FOR\_SAP\_CLOUD\_PLATFORM\]
annotation Environment
{
   @Scope:\[[#PARAMETER](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abencds_f1_parameter_annotations.htm)\]
   systemField : String(20) enum { CLIENT; SYSTEM\_LANGUAGE; USER; SYSTEM\_DATE; SYSTEM\_TIME; };
   @Scope:\[[#ELEMENT](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abencds_f1_element_annotation.htm)\]
   sql
   {
      passValue : Boolean default true;
   };
};

LanguageDependency-Annotations

@Scope: \[[#ANNOTATION](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abencds_f1_define_anno_annos.htm)\]
annotation LanguageDependency {
  maxLength : Integer;
};

MappingRole-Annotations

@Scope:\[[#ROLE](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abencds_f1_dcl_role_annotations.htm)\]
@CompatibilityContract: {
   c1: { usageAllowed: true },
   c1: {
      allowedChanges: { annotation: \[#ADD, #REMOVE \],
                        value: \[#FALSE\_TO\_TRUE \] }
       },
   c2: { usageAllowed: true },  
   c2: {
      allowedChanges: { annotation: \[#ADD, #REMOVE \],
                        value: \[#FALSE\_TO\_TRUE \] }
       }
}  
@API.state: \[#RELEASED\_FOR\_SAP\_CLOUD\_PLATFORM\]
annotation MappingRole
: Boolean default true  
;

Metadata-Annotations

annotation Metadata {
  @Scope:\[[#ENTITY](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abencds_f1_entity_annotations.htm)\]
  @CompatibilityContract: {
      c1: {
          usageAllowed: true,
          allowedChanges: {
              annotation: \[#ADD\],
              value: \[#FALSE\_TO\_TRUE\]
          }
      },
      c2.usageAllowed: false
  }
  allowExtensions : Boolean default true;
  @Scope:\[[#VIEW](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abencds_f1_view_entity_annotations.htm)\]
  @CompatibilityContract: {
      c1: {
          usageAllowed: true,
          allowedChanges: {
              annotation: \[#NONE\],
              value: \[#NONE\]
          }
      },
      c2: {
          usageAllowed: true,
          allowedChanges: {
              annotation: \[#NONE\],
              value: \[#NONE\]
          }
      }
  }
  @API.state: \[#RELEASED\_FOR\_SAP\_CLOUD\_PLATFORM\]
  ignorePropagatedAnnotations : Boolean default true;
  @MetadataExtension.usageAllowed : true
  @Scope:\[[#ANNOTATE](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abencds_f1_metadata_ext_annos.htm)\]
  @CompatibilityContract.c1: {
      usageAllowed: true,
      allowedChanges: {
          annotation: \[#NONE\],
          value: \[#NONE\]
      }
  }
  @CompatibilityContract.c2.usageAllowed: false
  layer : Integer  
    enum {
      CORE;      
      LOCALIZATION;
      INDUSTRY;
      PARTNER;
      CUSTOMER;
    };
};

MetadataExtension-Annotations

@Scope: \[[#ANNOTATION](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abencds_f1_define_anno_annos.htm)\]
annotation MetadataExtension {
  usageAllowed : Boolean default true;
};

ObjectModel-Annotations

See [Framework Specific Annotation Definitions](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abencds_annotations_frmwrk_ddla.htm).

Scope\[ \]-Annotations

@Scope: \[[#ANNOTATION](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abencds_f1_define_anno_annos.htm)\]
annotation Scope : array of String(20)  
  enum {  
    ENTITY;                
    VIEW;                  
    TABLE\_FUNCTION;        
    EXTEND\_VIEW;          
    ROLE;                  
    ACCESSPOLICY;          
    ANNOTATION;            
    ANNOTATE;              
    SERVICE;              
    CUSTOM\_ENTITY;        
    HIERARCHY;            
    PARAMETER;            
    ELEMENT;              
    ASPECT;                
    PFCG\_MAPPING;          
    SIMPLE\_TYPE;          
  };

Semantics-Annotations

...
define annotation Semantics
{
  ...
   @API.state: \[ #RELEASED\_FOR\_SAP\_CLOUD\_PLATFORM \]        
   amount      
   {      
       currencyCode    : ElementRef;  
   };      
   @Scope:\[[#ELEMENT](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abencds_f1_element_annotation.htm)\]
   @CompatibilityContract: {
   c1: { usageAllowed: true,
         allowedChanges.annotation: \[ #NONE \],
         allowedChanges.value: \[ #NONE \] },    
   c2: { usageAllowed: true,
         allowedChanges.annotation: \[ #NONE \],
         allowedChanges.value: \[ #NONE \] } }  
   @API.state: \[ #RELEASED\_FOR\_SAP\_CLOUD\_PLATFORM \]          
   quantity      
   {      
       unitOfMeasure   : ElementRef;  
   };      
   @Scope:\[[#ELEMENT](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abencds_f1_element_annotation.htm)\]
   @CompatibilityContract: {
   c1: { usageAllowed: true,
         allowedChanges.annotation: \[ #NONE \],
         allowedChanges.value: \[ #NONE \] },    
   c2: { usageAllowed: true,
         allowedChanges.annotation: \[ #NONE \],
         allowedChanges.value: \[ #NONE \] } }  
   @API.state: \[ #RELEASED\_FOR\_SAP\_CLOUD\_PLATFORM \]          
   currencyCode        : Boolean default true;
   @Scope:\[[#ELEMENT](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abencds_f1_element_annotation.htm)\]
   @CompatibilityContract: {
   c1: { usageAllowed: true,
         allowedChanges.annotation: \[ #NONE \],
         allowedChanges.value: \[ #NONE \] },    
   c2: { usageAllowed: true,
         allowedChanges.annotation: \[ #NONE \],
         allowedChanges.value: \[ #NONE \] } }      
   @API.state: \[ #RELEASED\_FOR\_SAP\_CLOUD\_PLATFORM \]      
   unitOfMeasure       : Boolean default true;  
   @Scope:\[[#ELEMENT](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abencds_f1_element_annotation.htm)\]
   @CompatibilityContract: {
   c1: { usageAllowed: false },    
   c2: { usageAllowed: false } }  
   booleanIndicator    : Boolean default true;
  ...
};



**📖 Source**: [abencds_annotations_abap_ddla.htm](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abencds_annotations_abap_ddla.htm)

### abencds_annotations_abap_tables.htm

> **📖 Official SAP Documentation**: [abencds_annotations_abap_tables.htm](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abencds_annotations_abap_tables.htm)
> **🔍 Direct Link**: This section contains the complete content from the official SAP ABAP documentation page.


  

* * *

AS ABAP Release 754, ©Copyright 2019 SAP SE. All rights reserved.

[ABAP Keyword Documentation](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenabap.htm) →  [ABAP - Dictionary](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenabap_dictionary.htm) →  [ABAP CDS in ABAP Dictionary](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abencds.htm) →  [ABAP CDS - Annotations](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abencds_annotations.htm) →  [ABAP CDS - SAP Annotations](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abencds_annotations_sap.htm) →  [ABAP CDS - ABAP Annotations](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abencds_annotations_abap.htm) → 

ABAP CDS - ABAP Annotation Syntax

The following tables summarize the [annotation syntax](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abencds_annotation_syntax_glosry.htm "Glossary Entry") of all [ABAP annotations](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abencore_annotation_glosry.htm "Glossary Entry") in [CDS DDL](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abencds_ddl_glosry.htm "Glossary Entry") and [CDS DCL](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abencds_dcl_glosry.htm "Glossary Entry") in ABAP CDS. Any specified subannotations are shown using [chainings](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abencds_annotations_syntax_name.htm). If square brackets \[ \] are specified after a name in the column Annotation, this means that the annotation in front of the square brackets is an [annotation array](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenannotation_array_glosry.htm "Glossary Entry"). Any enumeration symbols in an annotation are specified in the column Enums. The column Default shows the default values applied to the evaluation when an annotation is specified without a value. The columns Text and MDE indicate whether the annotation values are translatable texts and whether the annotation can be specified in a [metadata extension](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abencds_metadata_extension_glosry.htm "Glossary Entry"). The API column indicates whether the annotation can be used in CDS entities defined in [ABAP for SAP Cloud Platform](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenabap_for_sap_cloud_glosry.htm "Glossary Entry"). The detailed meanings of each ABAP annotation is documented for the corresponding [scope](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abencds_annotations_scopes.htm) in this documentation.

-   [AbapAnnotation-Annotations](#abencds-annotations-abap-tables-1--------abapcatalog-annotations---@ITOC@@ABENCDS_ANNOTATIONS_ABAP_TABLES_2)

-   [AccessControl-Annotations](#abencds-annotations-abap-tables-3--------api-annotations---@ITOC@@ABENCDS_ANNOTATIONS_ABAP_TABLES_4)

-   [ClientDependent-Annotations](#abencds-annotations-abap-tables-5--------clienthandling-annotations---@ITOC@@ABENCDS_ANNOTATIONS_ABAP_TABLES_6)

-   [CompatibilityContract-Annotations](#abencds-annotations-abap-tables-7--------dataaging-annotations---@ITOC@@ABENCDS_ANNOTATIONS_ABAP_TABLES_8)

-   [EndUserText-Annotations](#abencds-annotations-abap-tables-9--------environment-annotations---@ITOC@@ABENCDS_ANNOTATIONS_ABAP_TABLES_10)

-   [LanguageDependency-Annotations](#abencds-annotations-abap-tables-11--------mappingrole-annotations---@ITOC@@ABENCDS_ANNOTATIONS_ABAP_TABLES_12)

-   [Metadata-Annotations](#abencds-annotations-abap-tables-13--------metadataextension-annotations---@ITOC@@ABENCDS_ANNOTATIONS_ABAP_TABLES_14)

-   [ObjectModel-Annotations](#abencds-annotations-abap-tables-15--------scope------annotations---@ITOC@@ABENCDS_ANNOTATIONS_ABAP_TABLES_16)

-   [Semantics-Annotations](#abencds-annotations-abap-tables-17---note--see-also--abap-annotation-definitions--javascript-call-link---abencds-annotations-abap-ddla-htm-------abapannotation-annotations--annotation--meaning--scope--typ--enums--default--text--mde--api--abapannotation-definitionhidden--annotation-definition--test-annotation-or-demonstration-annotation-that-cannot-be-used-in-production-cds-source-code---annotation-definition--javascript-call-link---abencds-f1-define-anno-annos-htm------boolean------true--------------abapcatalog-annotations--annotation--meaning--scope--typ--enums--default--text--mde--api--abapcatalog-buffering-numberofkeyfields--table-buffering--number-of-key-fields-when-buffering-generic-areas---view--javascript-call-link---abencds-f1-view-entity-annotations-htm------integer------000----------released--for--sap--cloud--platform--abapcatalog-buffering-status--table-buffering--enables-and-disables-buffering---view--javascript-call-link---abencds-f1-view-entity-annotations-htm------string-20----active--not--allowed--switched--off---switched--off----------released--for--sap--cloud--platform--abapcatalog-buffering-type--table-buffering--defines-the-buffering-type---view--javascript-call-link---abencds-f1-view-entity-annotations-htm------string-10----full--generic--none--single---none----------released--for--sap--cloud--platform--abapcatalog-compiler-comparefilter--cds-view--specifies-how-filter-conditions-are-evaluated-in-path-expressions---view--javascript-call-link---abencds-f1-view-entity-annotations-htm------boolean------true----------released--for--sap--cloud--platform--abapcatalog-dbhints------dbsystem--obsolete--replaced-by-consumption-dbhintscalculatedby---view--javascript-call-link---abencds-f1-view-entity-annotations-htm------string-3----ada--all--ase--db2--db4--db6--hdb--inf--mss--ora--------------released--for--sap--cloud--platform--abapcatalog-dbhints------hint--obsolete--replaced-by-consumption-dbhints--------view--javascript-call-link---abencds-f1-view-entity-annotations-htm------string-1298-------------------released--for--sap--cloud--platform--abapcatalog-preservekey--cds-view--specifies-the-definition-of-the-key-fields-in-the-associated-database-view---view--javascript-call-link---abencds-f1-view-entity-annotations-htm------boolean------true----------released--for--sap--cloud--platform--abapcatalog-sqlviewappendname--cds-view-extension--name-of-the-append-view---view-extension--javascript-call-link---abencds-f1-extend-view-annotations-htm------string-16-------------------released--for--sap--cloud--platform--abapcatalog-sqlviewname--cds-view--name-of-the-database-view---view--javascript-call-link---abencds-f1-view-entity-annotations-htm------string-16-------------------released--for--key--user--appsreleased--for--sap--cloud--platform--abapcatalog-viewenhancementcategory-------cds-view--specifies-how-the-view-can-be-extended-using-cds-view-extensions---view--javascript-call-link---abencds-f1-view-entity-annotations-htm------string-20----group--by--none--projection--list--union--------------released--for--sap--cloud--platform--accesscontrol-annotations--annotation--meaning--scope--typ--enums--default--text--mde--api--accesscontrol-authorizationcheck--cds-access-control--specifies-implicit-access-control---hierarchy--javascript-call-link---abencds-f1-hierarchy-annotations-htm------table-function--javascript-call-link---abencds-f1-function-annotations-htm------view--javascript-call-link---abencds-f1-view-entity-annotations-htm------string-20----check--not--allowed--not--required--privileged--only---check----------released--for--sap--cloud--platform--api-annotations--annotation--meaning--scope--typ--enums--default--text--mde--api--api-element-releasestate--element-annotation--release-element---element--javascript-call-link---abencds-f1-element-annotation-htm------string-30----deprecated------------------api-element-successor--element-annotation--successor-of-rejected-element---element--javascript-call-link---abencds-f1-element-annotation-htm------elementref----------------------api-state-------annotation-definition--release-annotation---annotation-definition--javascript-call-link---abencds-f1-define-anno-annos-htm------string-40----not--released--released--for--key--user--apps--released--for--sap--cloud--platform------------------clientdependent-annotations--annotation--meaning--scope--typ--enums--default--text--mde--api--clientdependent--specifies-client-dependency-and-how-clients-are-handled--obsolete----table-function--javascript-call-link---abencds-f1-function-annotations-htm------view--javascript-call-link---abencds-f1-view-entity-annotations-htm------boolean------true--------------clienthandling-annotations--annotation--meaning--scope--typ--enums--default--text--mde--api--clienthandling-algorithm--specifies-client-handling---table-function--javascript-call-link---abencds-f1-function-annotations-htm------view--javascript-call-link---abencds-f1-view-entity-annotations-htm------string-20----automated--none--session--variable--------------released--for--sap--cloud--platform--clienthandling-type--specifies-client-dependency---table-function--javascript-call-link---abencds-f1-function-annotations-htm------view--javascript-call-link---abencds-f1-view-entity-annotations-htm------string-20----client--dependent--client--independent--inherited---inherited----------released--for--sap--cloud--platform--compatibilitycontract-annotations--annotation--meaning--scope--typ--enums--default--text--mde--api--compatibilitycontract-c0-allowedchanges-annotation-------modifiability-of-an-annotation-in-released-cds-entities---annotation-definition--javascript-call-link---abencds-f1-define-anno-annos-htm------string-20----add--any--custom--none--remove------------------compatibilitycontract-c0-allowedchanges-value-------modifiability-of-annotation-values-in-released-cds-entities---annotation-definition--javascript-call-link---abencds-f1-define-anno-annos-htm------string-20----add--any--custom--false--to--true--none--remove--true--to--false--update------------------compatibilitycontract-c0-usageallowed--usability-of-an-annotation-in-released-cds-entities---annotation-definition--javascript-call-link---abencds-f1-define-anno-annos-htm------boolean------true--------------compatibilitycontract-c1-allowedchanges-annotation-------modifiability-of-an-annotation-in-released-cds-entities---annotation-definition--javascript-call-link---abencds-f1-define-anno-annos-htm------string-20----add--any--custom--none--remove------------------compatibilitycontract-c1-allowedchanges-value-------modifiability-of-annotation-values-in-released-cds-entities---annotation-definition--javascript-call-link---abencds-f1-define-anno-annos-htm------string-20----add--any--custom--false--to--true--none--remove--true--to--false--update------------------compatibilitycontract-c1-usageallowed--usability-of-an-annotation-in-released-cds-entities---annotation-definition--javascript-call-link---abencds-f1-define-anno-annos-htm------boolean------true--------------compatibilitycontract-c2-allowedchanges-annotation-------modifiability-of-an-annotation-in-released-cds-entities---annotation-definition--javascript-call-link---abencds-f1-define-anno-annos-htm------string-20----add--any--custom--none--remove------------------compatibilitycontract-c2-allowedchanges-value-------modifiability-of-annotation-values-in-released-cds-entities---annotation-definition--javascript-call-link---abencds-f1-define-anno-annos-htm------string-20----add--any--custom--false--to--true--none--remove--true--to--false--update------------------compatibilitycontract-c2-usageallowed--usability-of-an-annotation-in-released-cds-entities---annotation-definition--javascript-call-link---abencds-f1-define-anno-annos-htm------boolean------true--------------dataaging-annotations--annotation--meaning--scope--typ--enums--default--text--mde--api--dataaging-noagingrestriction--data-aging-on-sap-hana--specifies-how-old-data-is-handled---table-function--javascript-call-link---abencds-f1-function-annotations-htm------view--javascript-call-link---abencds-f1-view-entity-annotations-htm------boolean------true--------------endusertext-annotations--annotation--meaning--scope--typ--enums--default--text--mde--api--endusertext-heading--texts--implicit-annotation-for-data-element-header-----string-55-----------x------not--released--endusertext-label--texts--short-text-connected-to-translation---access-policy--javascript-call-link---abencds-f1-define-accesspolicy-htm------element--javascript-call-link---abencds-f1-element-annotation-htm------entity--javascript-call-link---abencds-f1-entity-annotations-htm------view-extension--javascript-call-link---abencds-f1-extend-view-annotations-htm------parameter--javascript-call-link---abencds-f1-parameter-annotations-htm------pfcg-mapping--javascript-call-link---abencds-f1-define-pfcg-mapping-htm------role--javascript-call-link---abencds-f1-dcl-role-annotations-htm------string-60-----------x--x--released--for--sap--cloud--platform--endusertext-quickinfo--texts--tooltip-connected-to-translation---meta-data-extension--javascript-call-link---abencds-f1-metadata-ext-annos-htm------element--javascript-call-link---abencds-f1-element-annotation-htm------parameter--javascript-call-link---abencds-f1-parameter-annotations-htm------string-100-----------x--x--released--for--sap--cloud--platform--environment-annotations--annotation--meaning--scope--typ--enums--default--text--mde--api--environment-sql-passvalue--defines-pass-by-value-of-host-variables-in-comparisons-in-abap-sql---element--javascript-call-link---abencds-f1-element-annotation-htm------boolean------true----------released--for--sap--cloud--platform--environment-systemfield--environment--assigns-an-abap-system-field---parameter--javascript-call-link---abencds-f1-parameter-annotations-htm------string-20----client--system--date--system--language--system--time--user--------------released--for--sap--cloud--platform--languagedependency-annotations--annotation--meaning--scope--typ--enums--default--text--mde--api--languagedependency-maxlength--annotation-definition--specifies-the-translatibility-of-texts---annotation-definition--javascript-call-link---abencds-f1-define-anno-annos-htm------integer----------------------mappingrole-annotations--annotation--meaning--scope--typ--enums--default--text--mde--api--mappingrole--access-control--specifies-the-assignment-of-a-cds-role-to-users---role--javascript-call-link---abencds-f1-dcl-role-annotations-htm------boolean------true----------released--for--sap--cloud--platform--metadata-annotations--annotation--meaning--scope--typ--enums--default--text--mde--api--metadata-allowextensions--metadata--specifies-extensibility-using-metadata-extensions---entity--javascript-call-link---abencds-f1-entity-annotations-htm------boolean------true--------------metadata-ignorepropagatedannotations--metadata--specifies-how-propagated-annotations-are-evaluated-using-the-class-cl--dd--ddl--annotation--service---view--javascript-call-link---abencds-f1-view-entity-annotations-htm------boolean------true----------released--for--sap--cloud--platform--metadata-layer--metadata--specfies-layer-in-cds-metadata-extension---meta-data-extension--javascript-call-link---abencds-f1-metadata-ext-annos-htm------integer---core--customer--industry--localization--partner----------x------metadataextension-annotations--annotation--meaning--scope--typ--enums--default--text--mde--api--metadataextension-usageallowed--annotation-definition--specifies-the-distribution-of-the-annotation-in-cds-metadata-extensions---annotation-definition--javascript-call-link---abencds-f1-define-anno-annos-htm------boolean------true--------------objectmodel-annotations--annotation--meaning--scope--typ--enums--default--text--mde--api--objectmodel-usagetype-dataclass--undocumented---table-function--javascript-call-link---abencds-f1-function-annotations-htm------view--javascript-call-link---abencds-f1-view-entity-annotations-htm------string-30----customizing--master--meta--mixed--organizational--transactional---mixed--------------objectmodel-usagetype-servicequality--undocumented---table-function--javascript-call-link---abencds-f1-function-annotations-htm------view--javascript-call-link---abencds-f1-view-entity-annotations-htm------string-30----a--b--c--d--p--x---x--------------objectmodel-usagetype-sizecategory--undocumented---table-function--javascript-call-link---abencds-f1-function-annotations-htm------view--javascript-call-link---abencds-f1-view-entity-annotations-htm------string-3----l--m--s--xl--xxl---s--------------scope------annotations--annotation--meaning--scope--typ--enums--default--text--mde--api--scope-------annotation-definition--defines-the-range-of-validity-of-the-annotation----annotation-definition--javascript-call-link---abencds-f1-define-anno-annos-htm------string-20----accesspolicy--annotate--annotation--aspect--custom--entity--element--entity--extend--view--hierarchy--parameter--pfcg--mapping--role--service--simple--type--table--function--view------------------semantics-annotations--annotation--meaning--scope--typ--enums--default--text--mde--api--semantics-amount-currencycode--currency-field---element--javascript-call-link---abencds-f1-element-annotation-htm------elementref------------------released--for--sap--cloud--platform--semantics-currencycode--currency-key---element--javascript-call-link---abencds-f1-element-annotation-htm------boolean------true----------released--for--sap--cloud--platform--semantics-quantity-unitofmeasure--quantity-field---element--javascript-call-link---abencds-f1-element-annotation-htm------elementref------------------released--for--sap--cloud--platform--semantics-unitofmeasure--unit-key---element--javascript-call-link---abencds-f1-element-annotation-htm------boolean------true----------released--for--sap--cloud--platform------------abap-keyword-documentation---abap---dictionary---abap-cds-in-abap-dictionary---abap-cds---data-definitions---abap-cds---views---abap-cds---client-handling-in-cds-views----files----4-----difficulty----advanced----abap-keyword-documentation---abap---dictionary---abap-cds-in-abap-dictionary---abap-cds---data-definitions---abap-cds---ddl-for-data-definitions---abap-cds---parameter--included-pages--2---------source-----abencds-annotations-abap-tables-htm--https---help-sap-com-doc-abapdocu-754-index-htm-7-54-en-us-abencds-annotations-abap-tables-htm-------abencds-f1-param-htm-------------as-abap-release-754---copyright-2019-sap-se--all-rights-reserved----abap-keyword-documentation--javascript-call-link---abenabap-htm---------abap---dictionary--javascript-call-link---abenabap-dictionary-htm---------abap-cds-in-abap-dictionary--javascript-call-link---abencds-htm---------abap-cds---data-definitions--javascript-call-link---abenddic-cds-entities-htm---------abap-cds---ddl-for-data-definitions--javascript-call-link---abencds-f1-ddl-syntax-htm---------abap-cds---parameter--syntax-----------parameter\_annot1](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abencds_f1_parameter_annotations.htm)*\]*
    *\[*[@parameter\_annot2](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abencds_f1_parameter_annotations.htm)*\]*
    ...
    pname : [typing](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abencds_typing.htm)
    *\[*[@<parameter\_annot1](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abencds_f1_parameter_annotations.htm)*\]*
    *\[*[@<parameter\_annot2](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abencds_f1_parameter_annotations.htm)*\]*
    ...

Addition:

[... @parameter\_annot ... @<parameter\_annot](#!ABAP_ONE_ADD@1@)

Effect

Defines a CDS parameter called pname in one of the following:

-   [Parameter list](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abencds_f1_parameter_list.htm) of a [CDS view](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abencds_view_glosry.htm "Glossary Entry")

-   [Parameter list](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abencds_f1_func_parameter_list.htm) of a [CDS table function](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abencds_table_function_glosry.htm "Glossary Entry")

-   [Parameter list](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abencds_f1_hiera_parameter_list.htm) of a [CDS hierarchy](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abencds_hierarchy_glosry.htm "Glossary Entry")

-   [Parameter list](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abencds_f1_entity_parameter_list.htm) of an [abstract CDS entity](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenabstract_entity_glosry.htm "Glossary Entry")

The name pname must comply with the naming rules for [names](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abencds_general_syntax_rules.htm). Furthermore, pname cannot contain any slash (/) characters and cannot be a reserved name in ABAP Dictionary. The name pname must be unique and be located in the namespace of the elements and [published](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abencds_f1_select_list_association.htm) CDS associations of the current CDS entity. Also, the reserved name connection cannot be used in table functions. The reserved names that cannot be used are specified in the database table TRESE. They are not case-sensitive. The blanks in the comma-separated list are ignored and can be omitted. Each parameter must be typed with an elementary data type [typing](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abencds_typing.htm).

A non-abstract CDS entity for which CDS parameters are defined as input parameters can be used as

-   A [data source](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abencds_f1_data_source.htm) or in a [path expression](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abencds_f1_path_expression.htm) of a different CDS view

-   A [data source](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abapselect_data_source.htm) of a [SELECT](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abapselect.htm) statement from ABAP SQL in ABAP

In these cases, each input parameter must be assigned a suitable actual parameter whose value is then used in the operand positions in which the parameter is specified. The actual parameters are assigned using a parenthesized comma-separated list as follows:

[... cds\_entity( pname1 : act1, pname2 : act2, ...) ...](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abencds_f1_select_parameters.htm),

This list must be specified directly after the name of the view when using an entity with parameters (both within the CDS DDL in ABAP CDS and in ABAP SQL). In ABAP SQL, an equals sign (\=) is used instead of a colon (:).

Note

It is not currently possible to define optional input parameters or replacement parameters for input parameters. The annotation [@Environment.systemField](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abencds_f1_parameter_annotations.htm) can be used, however, to make ABAP SQL pass ABAP system fields to an input parameter implicitly.

Addition

... @parameter\_annot ... @<parameter\_annot

Effect

Specifies annotations for the parameter. The annotations can be specified before the parameter using [@parameter\_annot](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abencds_f1_parameter_annotations.htm) or after the parameter using [@parameter\_annot](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abencds_f1_parameter_annotations.htm). The latter is possible only for [CDS views](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abencds_view_glosry.htm "Glossary Entry"), [CDS table functions](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abencds_table_function_glosry.htm "Glossary Entry"), and [CDS hierarchies](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abencds_hierarchy_glosry.htm "Glossary Entry") and not for [abstract CDS entities](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenabstract_entity_glosry.htm "Glossary Entry").

Continue
[ABAP CDS - parameter\_annot](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abencds_f1_parameter_annotations.htm)



**📖 Source**: [abencds_f1_param.htm](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abencds_f1_param.htm)

### abencds_f1_parameter_annotations.htm

> **📖 Official SAP Documentation**: [abencds_f1_parameter_annotations.htm](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abencds_f1_parameter_annotations.htm)
> **🔍 Direct Link**: This section contains the complete content from the official SAP ABAP documentation page.


  

* * *

AS ABAP Release 754, ©Copyright 2019 SAP SE. All rights reserved.

[ABAP Keyword Documentation](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenabap.htm) →  [ABAP - Dictionary](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenabap_dictionary.htm) →  [ABAP CDS in ABAP Dictionary](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abencds.htm) →  [ABAP CDS - Data Definitions](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenddic_cds_entities.htm) →  [ABAP CDS - DDL for Data Definitions](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abencds_f1_ddl_syntax.htm) →  [ABAP CDS - parameter](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abencds_f1_param.htm) → 

ABAP CDS - parameter\_annot

Syntax

... @[annotation](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abencds_annotations_syntax.htm) ...
... @<[annotation](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abencds_annotations_syntax.htm) ...

Effect

Specifies an [annotation](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abencds_annotation_glosry.htm "Glossary Entry") [annotation](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abencds_annotations_syntax.htm) as a parameter annotation in the definition of an [CDS parameter](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abencds_parameter_glosry.htm "Glossary Entry") [parameter](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abencds_f1_param.htm) of one of the following:

-   [CDS view](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abencds_view_glosry.htm "Glossary Entry")

-   [CDS table function](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abencds_table_function_glosry.htm "Glossary Entry")

-   [A CDS hierarchy](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abencds_hierarchy_glosry.htm "Glossary Entry")

-   [An abstract CSD entity](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenabstract_entity_glosry.htm "Glossary Entry")

Parameter annotations can be specified before and after the parameter: The annotation should be defined as a CDS object in a [CDS annotation definition](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abencds_anno_definition_glosry.htm "Glossary Entry") and the annotation definition annotation [@Scope](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abencds_f1_define_anno_annos.htm) should be specified here using the value #PARAMETER.

-   In front of the parameter, the character @ must be placed before the name annotation of the annotation.

-   Following the parameter, the characters @< must be placed before the name annotation of the annotation.

The following tables show the possible [ABAP annotations](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abencore_annotation_glosry.htm "Glossary Entry") that can be specified and their meanings. The ABAP annotations are evaluated by the ABAP runtime environment for every CDS entity. Annotations with other identifiers are usually [framework-specific annotations](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abencds_annotations_frmwrk.htm). These are not evaluated by the ABAP runtime environment but by other SAP frameworks instead.

-   [EndUserText Annotations](#abencds-f1-parameter-annotations-1--------environment-annotations---@ITOC@@ABENCDS_F1_PARAMETER_ANNOTATIONS_2)

The first column of the table displays the (possibly structured) name annotation of an ABAP annotation and the second column displays its meaning. The third column shows the possible [annotation values](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenannotation_value_glosry.htm "Glossary Entry"). The fourth column shows the value set implicitly for the annotation value if the annotation is not used explicitly. The fifth column displays the default value set implicitly for value in accordance with the [annotation definition](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abencds_anno_definition_glosry.htm "Glossary Entry") if the annotation is specified without a value. If nothing is specified for the annotation value, the annotation should be specified without a value.

EndUserText Annotations

Translatable texts of the parameter.

Annotation

Meaning

Annotation Values

Default Value if Not Used

Default Value if Used Without Value

EndUserText.label

Translatable short text of the parameter

Character string with maximum 60 characters

\-

\-

EndUserText.quickInfo

Translatable tooltip of the parameter

String

\-

\-

Note

ABAP annotations introduced using EndUserText are used to define translatable semantic texts for a [CDS object](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abencds_object_glosry.htm "Glossary Entry"). The value of an annotation like this is saved in special tables that have a language key and that are translatable. The value specified in the source code should consist of text in the original language of the CDS source code and is translated into the required languages. The methods of the class CL\_DD\_DDL\_ANNOTATION\_SERVICE read these texts as specified by an input parameter for the language. If no language is passed to the input parameter, the [text environment language](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abentext_env_langu_glosry.htm "Glossary Entry") is used as the default. If no text is found for the language, the [secondary language](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abensecondary_language_glosry.htm "Glossary Entry") in AS ABAP is used.

Environment Annotations

Defines parameter passing to a CDS view.

Annotation

Meaning

Annotation Values

Default Value if Not Used

Default Value if Used Without Value

Environment.systemField

Assigns an [ABAP system field](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abensystem_field_glosry.htm "Glossary Entry") to the input parameter for implicit parameter passing in ABAP SQL.

#CLIENT:
[sy-mandt](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abensystem_fields.htm)
#SYSTEM\_DATE:
[sy-datum](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abensystem_fields.htm)
#SYSTEM\_TIME:
[sy-uzeit](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abensystem_fields.htm)
#SYSTEM\_LANGUAGE:
[sy-langu](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abensystem_fields.htm)
#USER:
[sy-uname](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abensystem_fields.htm)

\-

\-

An input parameter can be annotated strictly once with the annotation Environment.systemField. If the CDS entity is used as a [data source](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abapselect_data_source.htm) of a [SELECT](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abapselect.htm) statement in [ABAP SQL](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenopen_sql_glosry.htm "Glossary Entry"), this assignment has the following consequences:

-   No explicit actual parameter can be assigned to an input parameter to which the system field sy-mandt was assigned using #CLIENT. ABAP SQL always passes (implicitly) the ID of the current [client](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenclient_glosry.htm "Glossary Entry") in accordance with the nominal value of sy-mandt or from the clients specified using [USING CLIENT](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abapselect_client.htm). The obsolete addition [CLIENT SPECIFIED](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abapselect_client_obsolete.htm) cannot be specified when a CDS entity of this type is accessed.

-   An explicit actual parameter does not need to be assigned to an input parameter to which a system field other than sy-mandt is assigned using #SYSTEM\_.... If no explicit actual parameter is specified, ABAP SQL passes the nominal value of the assigned system field implicitly.

Any other values for value are ignored using an exception. Instead of the value #USER, the value #APPLICATION\_USER can be specified too. This is, however, only offered for reasons of downward compatibility.

Notes

-   The annotation @Environment.systemField is ignored in parameter passing to the CDS entity in other CDS entities. Explicit actual parameters must be specified here, for example input parameters from the current entity or even [session variables](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abencds_f1_session_variable.htm).

-   The value #CLIENT of the annotation @Environment.systemField is particularly significant for [client-specific CDS table functions](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abencds_func_client_handling.htm). If an input parameter is annotated accordingly, it is given the current client ID implicitly by the ABAP SQL statement [SELECT](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abapselect.htm) and can be used to restrict the results set in the platform-dependent implementation of the function. @Environment.systemField: #CLIENT cannot be specified in the case of [cross-client CDS table functions](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abencds_func_client_handling.htm).

Example

The following CDS view associates all input parameters with ABAP system fields and the SELECT list consists only of the input parameters. The ABAP program DEMO\_CDS\_SYSTEM\_FIELDS accesses the CDS view by specifying parameters in full implicitly and explicitly and produces both results.

@AbapCatalog.sqlViewName: 'DEMO\_CDS\_SYST'
@AccessControl.authorizationCheck: #NOT\_REQUIRED
define view demo\_cds\_system\_fields
with parameters
@Environment.systemField : #CLIENT
p\_mandt : syst\_mandt,
@Environment.systemField : #SYSTEM\_DATE
p\_datum : syst\_datum,
@Environment.systemField : #SYSTEM\_TIME
p\_uzeit : syst\_uzeit,
p\_langu : syst\_langu @<Environment.systemField : #SYSTEM\_LANGUAGE,
p\_uname : syst\_uname @<Environment.systemField : #USER
as select from
demo\_expressions
{
:p\_mandt as client,
:p\_datum as datum,
:p\_uzeit as uzeit,
:p\_langu as langu,
:p\_uname as uname
}
where
id = '1';


---


## ABAP Keyword Documentation / ABAP - Dictionary / ABAP CDS in ABAP Dictionary / ABAP CDS - Data Definitions / ABAP CDS - Hierarchies

**Files**: 2 | **Difficulty**: advanced

# ABAP Keyword Documentation / ABAP - Dictionary / ABAP CDS in ABAP Dictionary / ABAP CDS - Data Definitions / ABAP CDS - DDL for Data Definitions / ABAP CDS - parameter

Included pages: 2



**📖 Source**: [abencds_f1_parameter_annotations.htm](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abencds_f1_parameter_annotations.htm)

### abencds_f1_param.htm

> **📖 Official SAP Documentation**: [abencds_f1_param.htm](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abencds_f1_param.htm)
> **🔍 Direct Link**: This section contains the complete content from the official SAP ABAP documentation page.


  

* * *

AS ABAP Release 754, ©Copyright 2019 SAP SE. All rights reserved.

[ABAP Keyword Documentation](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenabap.htm) →  [ABAP - Dictionary](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenabap_dictionary.htm) →  [ABAP CDS in ABAP Dictionary](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abencds.htm) →  [ABAP CDS - Data Definitions](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenddic_cds_entities.htm) →  [ABAP CDS - DDL for Data Definitions](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abencds_f1_ddl_syntax.htm) → 

ABAP CDS - parameter

Syntax

... *\[*[@parameter\_annot1](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abencds_f1_parameter_annotations.htm)*\]*
    *\[*[@parameter\_annot2](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abencds_f1_parameter_annotations.htm)*\]*
    ...
    pname : [typing](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abencds_typing.htm)
    *\[*[@<parameter\_annot1](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abencds_f1_parameter_annotations.htm)*\]*
    *\[*[@<parameter\_annot2](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abencds_f1_parameter_annotations.htm)*\]*
    ...

Addition:

[... @parameter\_annot ... @<parameter\_annot](#!ABAP_ONE_ADD@1@)

Effect

Defines a CDS parameter called pname in one of the following:

-   [Parameter list](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abencds_f1_parameter_list.htm) of a [CDS view](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abencds_view_glosry.htm "Glossary Entry")

-   [Parameter list](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abencds_f1_func_parameter_list.htm) of a [CDS table function](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abencds_table_function_glosry.htm "Glossary Entry")

-   [Parameter list](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abencds_f1_hiera_parameter_list.htm) of a [CDS hierarchy](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abencds_hierarchy_glosry.htm "Glossary Entry")

-   [Parameter list](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abencds_f1_entity_parameter_list.htm) of an [abstract CDS entity](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenabstract_entity_glosry.htm "Glossary Entry")

The name pname must comply with the naming rules for [names](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abencds_general_syntax_rules.htm). Furthermore, pname cannot contain any slash (/) characters and cannot be a reserved name in ABAP Dictionary. The name pname must be unique and be located in the namespace of the elements and [published](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abencds_f1_select_list_association.htm) CDS associations of the current CDS entity. Also, the reserved name connection cannot be used in table functions. The reserved names that cannot be used are specified in the database table TRESE. They are not case-sensitive. The blanks in the comma-separated list are ignored and can be omitted. Each parameter must be typed with an elementary data type [typing](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abencds_typing.htm).

A non-abstract CDS entity for which CDS parameters are defined as input parameters can be used as

-   A [data source](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abencds_f1_data_source.htm) or in a [path expression](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abencds_f1_path_expression.htm) of a different CDS view

-   A [data source](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abapselect_data_source.htm) of a [SELECT](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abapselect.htm) statement from ABAP SQL in ABAP

In these cases, each input parameter must be assigned a suitable actual parameter whose value is then used in the operand positions in which the parameter is specified. The actual parameters are assigned using a parenthesized comma-separated list as follows:

[... cds\_entity( pname1 : act1, pname2 : act2, ...) ...](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abencds_f1_select_parameters.htm),

This list must be specified directly after the name of the view when using an entity with parameters (both within the CDS DDL in ABAP CDS and in ABAP SQL). In ABAP SQL, an equals sign (\=) is used instead of a colon (:).

Note

It is not currently possible to define optional input parameters or replacement parameters for input parameters. The annotation [@Environment.systemField](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abencds_f1_parameter_annotations.htm) can be used, however, to make ABAP SQL pass ABAP system fields to an input parameter implicitly.

Addition

... @parameter\_annot ... @<parameter\_annot

Effect

Specifies annotations for the parameter. The annotations can be specified before the parameter using [@parameter\_annot](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abencds_f1_parameter_annotations.htm) or after the parameter using [@parameter\_annot](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abencds_f1_parameter_annotations.htm). The latter is possible only for [CDS views](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abencds_view_glosry.htm "Glossary Entry"), [CDS table functions](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abencds_table_function_glosry.htm "Glossary Entry"), and [CDS hierarchies](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abencds_hierarchy_glosry.htm "Glossary Entry") and not for [abstract CDS entities](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenabstract_entity_glosry.htm "Glossary Entry").

Continue
[ABAP CDS - parameter\_annot](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abencds_f1_parameter_annotations.htm)



**📖 Source**: [abencds_f1_param.htm](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abencds_f1_param.htm)

### abencds_f1_parameter_annotations.htm

> **📖 Official SAP Documentation**: [abencds_f1_parameter_annotations.htm](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abencds_f1_parameter_annotations.htm)
> **🔍 Direct Link**: This section contains the complete content from the official SAP ABAP documentation page.


  

* * *

AS ABAP Release 754, ©Copyright 2019 SAP SE. All rights reserved.

[ABAP Keyword Documentation](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenabap.htm) →  [ABAP - Dictionary](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenabap_dictionary.htm) →  [ABAP CDS in ABAP Dictionary](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abencds.htm) →  [ABAP CDS - Data Definitions](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenddic_cds_entities.htm) →  [ABAP CDS - DDL for Data Definitions](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abencds_f1_ddl_syntax.htm) →  [ABAP CDS - parameter](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abencds_f1_param.htm) → 

ABAP CDS - parameter\_annot

Syntax

... @[annotation](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abencds_annotations_syntax.htm) ...
... @<[annotation](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abencds_annotations_syntax.htm) ...

Effect

Specifies an [annotation](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abencds_annotation_glosry.htm "Glossary Entry") [annotation](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abencds_annotations_syntax.htm) as a parameter annotation in the definition of an [CDS parameter](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abencds_parameter_glosry.htm "Glossary Entry") [parameter](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abencds_f1_param.htm) of one of the following:

-   [CDS view](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abencds_view_glosry.htm "Glossary Entry")

-   [CDS table function](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abencds_table_function_glosry.htm "Glossary Entry")

-   [A CDS hierarchy](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abencds_hierarchy_glosry.htm "Glossary Entry")

-   [An abstract CSD entity](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenabstract_entity_glosry.htm "Glossary Entry")

Parameter annotations can be specified before and after the parameter: The annotation should be defined as a CDS object in a [CDS annotation definition](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abencds_anno_definition_glosry.htm "Glossary Entry") and the annotation definition annotation [@Scope](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abencds_f1_define_anno_annos.htm) should be specified here using the value #PARAMETER.

-   In front of the parameter, the character @ must be placed before the name annotation of the annotation.

-   Following the parameter, the characters @< must be placed before the name annotation of the annotation.

The following tables show the possible [ABAP annotations](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abencore_annotation_glosry.htm "Glossary Entry") that can be specified and their meanings. The ABAP annotations are evaluated by the ABAP runtime environment for every CDS entity. Annotations with other identifiers are usually [framework-specific annotations](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abencds_annotations_frmwrk.htm). These are not evaluated by the ABAP runtime environment but by other SAP frameworks instead.

-   [EndUserText Annotations](#abencds-f1-parameter-annotations-1--------environment-annotations---@ITOC@@ABENCDS_F1_PARAMETER_ANNOTATIONS_2)

The first column of the table displays the (possibly structured) name annotation of an ABAP annotation and the second column displays its meaning. The third column shows the possible [annotation values](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenannotation_value_glosry.htm "Glossary Entry"). The fourth column shows the value set implicitly for the annotation value if the annotation is not used explicitly. The fifth column displays the default value set implicitly for value in accordance with the [annotation definition](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abencds_anno_definition_glosry.htm "Glossary Entry") if the annotation is specified without a value. If nothing is specified for the annotation value, the annotation should be specified without a value.

EndUserText Annotations

Translatable texts of the parameter.

Annotation

Meaning

Annotation Values

Default Value if Not Used

Default Value if Used Without Value

EndUserText.label

Translatable short text of the parameter

Character string with maximum 60 characters

\-

\-

EndUserText.quickInfo

Translatable tooltip of the parameter

String

\-

\-

Note

ABAP annotations introduced using EndUserText are used to define translatable semantic texts for a [CDS object](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abencds_object_glosry.htm "Glossary Entry"). The value of an annotation like this is saved in special tables that have a language key and that are translatable. The value specified in the source code should consist of text in the original language of the CDS source code and is translated into the required languages. The methods of the class CL\_DD\_DDL\_ANNOTATION\_SERVICE read these texts as specified by an input parameter for the language. If no language is passed to the input parameter, the [text environment language](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abentext_env_langu_glosry.htm "Glossary Entry") is used as the default. If no text is found for the language, the [secondary language](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abensecondary_language_glosry.htm "Glossary Entry") in AS ABAP is used.

Environment Annotations

Defines parameter passing to a CDS view.

Annotation

Meaning

Annotation Values

Default Value if Not Used

Default Value if Used Without Value

Environment.systemField

Assigns an [ABAP system field](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abensystem_field_glosry.htm "Glossary Entry") to the input parameter for implicit parameter passing in ABAP SQL.

#CLIENT:
[sy-mandt](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abensystem_fields.htm)
#SYSTEM\_DATE:
[sy-datum](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abensystem_fields.htm)
#SYSTEM\_TIME:
[sy-uzeit](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abensystem_fields.htm)
#SYSTEM\_LANGUAGE:
[sy-langu](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abensystem_fields.htm)
#USER:
[sy-uname](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abensystem_fields.htm)

\-

\-

An input parameter can be annotated strictly once with the annotation Environment.systemField. If the CDS entity is used as a [data source](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abapselect_data_source.htm) of a [SELECT](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abapselect.htm) statement in [ABAP SQL](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenopen_sql_glosry.htm "Glossary Entry"), this assignment has the following consequences:

-   No explicit actual parameter can be assigned to an input parameter to which the system field sy-mandt was assigned using #CLIENT. ABAP SQL always passes (implicitly) the ID of the current [client](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenclient_glosry.htm "Glossary Entry") in accordance with the nominal value of sy-mandt or from the clients specified using [USING CLIENT](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abapselect_client.htm). The obsolete addition [CLIENT SPECIFIED](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abapselect_client_obsolete.htm) cannot be specified when a CDS entity of this type is accessed.

-   An explicit actual parameter does not need to be assigned to an input parameter to which a system field other than sy-mandt is assigned using #SYSTEM\_.... If no explicit actual parameter is specified, ABAP SQL passes the nominal value of the assigned system field implicitly.

Any other values for value are ignored using an exception. Instead of the value #USER, the value #APPLICATION\_USER can be specified too. This is, however, only offered for reasons of downward compatibility.

Notes

-   The annotation @Environment.systemField is ignored in parameter passing to the CDS entity in other CDS entities. Explicit actual parameters must be specified here, for example input parameters from the current entity or even [session variables](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abencds_f1_session_variable.htm).

-   The value #CLIENT of the annotation @Environment.systemField is particularly significant for [client-specific CDS table functions](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abencds_func_client_handling.htm). If an input parameter is annotated accordingly, it is given the current client ID implicitly by the ABAP SQL statement [SELECT](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abapselect.htm) and can be used to restrict the results set in the platform-dependent implementation of the function. @Environment.systemField: #CLIENT cannot be specified in the case of [cross-client CDS table functions](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abencds_func_client_handling.htm).

Example

The following CDS view associates all input parameters with ABAP system fields and the SELECT list consists only of the input parameters. The ABAP program DEMO\_CDS\_SYSTEM\_FIELDS accesses the CDS view by specifying parameters in full implicitly and explicitly and produces both results.

@AbapCatalog.sqlViewName: 'DEMO\_CDS\_SYST'
@AccessControl.authorizationCheck: #NOT\_REQUIRED
define view demo\_cds\_system\_fields
with parameters
@Environment.systemField : #CLIENT
p\_mandt : syst\_mandt,
@Environment.systemField : #SYSTEM\_DATE
p\_datum : syst\_datum,
@Environment.systemField : #SYSTEM\_TIME
p\_uzeit : syst\_uzeit,
p\_langu : syst\_langu @<Environment.systemField : #SYSTEM\_LANGUAGE,
p\_uname : syst\_uname @<Environment.systemField : #USER
as select from
demo\_expressions
{
:p\_mandt as client,
:p\_datum as datum,
:p\_uzeit as uzeit,
:p\_langu as langu,
:p\_uname as uname
}
where
id = '1';


---


## ABAP Keyword Documentation / ABAP - Dictionary / ABAP CDS in ABAP Dictionary / ABAP CDS - Data Definitions / ABAP CDS - DDL for Data Definitions / ABAP CDS - DEFINE VIEW / ABAP CDS - SELECT / ABAP CDS - SELECT, data_source

**Files**: 3 | **Difficulty**: advanced

# ABAP Keyword Documentation / ABAP - Dictionary / ABAP CDS in ABAP Dictionary / ABAP CDS - Data Definitions / ABAP CDS - DDL for Data Definitions / ABAP CDS - parameter

Included pages: 2



**📖 Source**: [abencds_f1_parameter_annotations.htm](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abencds_f1_parameter_annotations.htm)

### abencds_f1_param.htm

> **📖 Official SAP Documentation**: [abencds_f1_param.htm](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abencds_f1_param.htm)
> **🔍 Direct Link**: This section contains the complete content from the official SAP ABAP documentation page.


  

* * *

AS ABAP Release 754, ©Copyright 2019 SAP SE. All rights reserved.

[ABAP Keyword Documentation](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenabap.htm) →  [ABAP - Dictionary](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenabap_dictionary.htm) →  [ABAP CDS in ABAP Dictionary](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abencds.htm) →  [ABAP CDS - Data Definitions](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenddic_cds_entities.htm) →  [ABAP CDS - DDL for Data Definitions](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abencds_f1_ddl_syntax.htm) → 

ABAP CDS - parameter

Syntax

... *\[*[@parameter\_annot1](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abencds_f1_parameter_annotations.htm)*\]*
    *\[*[@parameter\_annot2](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abencds_f1_parameter_annotations.htm)*\]*
    ...
    pname : [typing](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abencds_typing.htm)
    *\[*[@<parameter\_annot1](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abencds_f1_parameter_annotations.htm)*\]*
    *\[*[@<parameter\_annot2](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abencds_f1_parameter_annotations.htm)*\]*
    ...

Addition:

[... @parameter\_annot ... @<parameter\_annot](#!ABAP_ONE_ADD@1@)

Effect

Defines a CDS parameter called pname in one of the following:

-   [Parameter list](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abencds_f1_parameter_list.htm) of a [CDS view](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abencds_view_glosry.htm "Glossary Entry")

-   [Parameter list](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abencds_f1_func_parameter_list.htm) of a [CDS table function](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abencds_table_function_glosry.htm "Glossary Entry")

-   [Parameter list](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abencds_f1_hiera_parameter_list.htm) of a [CDS hierarchy](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abencds_hierarchy_glosry.htm "Glossary Entry")

-   [Parameter list](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abencds_f1_entity_parameter_list.htm) of an [abstract CDS entity](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenabstract_entity_glosry.htm "Glossary Entry")

The name pname must comply with the naming rules for [names](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abencds_general_syntax_rules.htm). Furthermore, pname cannot contain any slash (/) characters and cannot be a reserved name in ABAP Dictionary. The name pname must be unique and be located in the namespace of the elements and [published](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abencds_f1_select_list_association.htm) CDS associations of the current CDS entity. Also, the reserved name connection cannot be used in table functions. The reserved names that cannot be used are specified in the database table TRESE. They are not case-sensitive. The blanks in the comma-separated list are ignored and can be omitted. Each parameter must be typed with an elementary data type [typing](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abencds_typing.htm).

A non-abstract CDS entity for which CDS parameters are defined as input parameters can be used as

-   A [data source](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abencds_f1_data_source.htm) or in a [path expression](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abencds_f1_path_expression.htm) of a different CDS view

-   A [data source](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abapselect_data_source.htm) of a [SELECT](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abapselect.htm) statement from ABAP SQL in ABAP

In these cases, each input parameter must be assigned a suitable actual parameter whose value is then used in the operand positions in which the parameter is specified. The actual parameters are assigned using a parenthesized comma-separated list as follows:

[... cds\_entity( pname1 : act1, pname2 : act2, ...) ...](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abencds_f1_select_parameters.htm),

This list must be specified directly after the name of the view when using an entity with parameters (both within the CDS DDL in ABAP CDS and in ABAP SQL). In ABAP SQL, an equals sign (\=) is used instead of a colon (:).

Note

It is not currently possible to define optional input parameters or replacement parameters for input parameters. The annotation [@Environment.systemField](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abencds_f1_parameter_annotations.htm) can be used, however, to make ABAP SQL pass ABAP system fields to an input parameter implicitly.

Addition

... @parameter\_annot ... @<parameter\_annot

Effect

Specifies annotations for the parameter. The annotations can be specified before the parameter using [@parameter\_annot](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abencds_f1_parameter_annotations.htm) or after the parameter using [@parameter\_annot](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abencds_f1_parameter_annotations.htm). The latter is possible only for [CDS views](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abencds_view_glosry.htm "Glossary Entry"), [CDS table functions](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abencds_table_function_glosry.htm "Glossary Entry"), and [CDS hierarchies](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abencds_hierarchy_glosry.htm "Glossary Entry") and not for [abstract CDS entities](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenabstract_entity_glosry.htm "Glossary Entry").

Continue
[ABAP CDS - parameter\_annot](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abencds_f1_parameter_annotations.htm)



**📖 Source**: [abencds_f1_param.htm](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abencds_f1_param.htm)

### abencds_f1_parameter_annotations.htm

> **📖 Official SAP Documentation**: [abencds_f1_parameter_annotations.htm](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abencds_f1_parameter_annotations.htm)
> **🔍 Direct Link**: This section contains the complete content from the official SAP ABAP documentation page.


  

* * *

AS ABAP Release 754, ©Copyright 2019 SAP SE. All rights reserved.

[ABAP Keyword Documentation](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenabap.htm) →  [ABAP - Dictionary](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenabap_dictionary.htm) →  [ABAP CDS in ABAP Dictionary](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abencds.htm) →  [ABAP CDS - Data Definitions](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenddic_cds_entities.htm) →  [ABAP CDS - DDL for Data Definitions](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abencds_f1_ddl_syntax.htm) →  [ABAP CDS - parameter](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abencds_f1_param.htm) → 

ABAP CDS - parameter\_annot

Syntax

... @[annotation](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abencds_annotations_syntax.htm) ...
... @<[annotation](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abencds_annotations_syntax.htm) ...

Effect

Specifies an [annotation](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abencds_annotation_glosry.htm "Glossary Entry") [annotation](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abencds_annotations_syntax.htm) as a parameter annotation in the definition of an [CDS parameter](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abencds_parameter_glosry.htm "Glossary Entry") [parameter](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abencds_f1_param.htm) of one of the following:

-   [CDS view](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abencds_view_glosry.htm "Glossary Entry")

-   [CDS table function](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abencds_table_function_glosry.htm "Glossary Entry")

-   [A CDS hierarchy](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abencds_hierarchy_glosry.htm "Glossary Entry")

-   [An abstract CSD entity](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenabstract_entity_glosry.htm "Glossary Entry")

Parameter annotations can be specified before and after the parameter: The annotation should be defined as a CDS object in a [CDS annotation definition](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abencds_anno_definition_glosry.htm "Glossary Entry") and the annotation definition annotation [@Scope](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abencds_f1_define_anno_annos.htm) should be specified here using the value #PARAMETER.

-   In front of the parameter, the character @ must be placed before the name annotation of the annotation.

-   Following the parameter, the characters @< must be placed before the name annotation of the annotation.

The following tables show the possible [ABAP annotations](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abencore_annotation_glosry.htm "Glossary Entry") that can be specified and their meanings. The ABAP annotations are evaluated by the ABAP runtime environment for every CDS entity. Annotations with other identifiers are usually [framework-specific annotations](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abencds_annotations_frmwrk.htm). These are not evaluated by the ABAP runtime environment but by other SAP frameworks instead.

-   [EndUserText Annotations](#abencds-f1-parameter-annotations-1--------environment-annotations---@ITOC@@ABENCDS_F1_PARAMETER_ANNOTATIONS_2)

The first column of the table displays the (possibly structured) name annotation of an ABAP annotation and the second column displays its meaning. The third column shows the possible [annotation values](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenannotation_value_glosry.htm "Glossary Entry"). The fourth column shows the value set implicitly for the annotation value if the annotation is not used explicitly. The fifth column displays the default value set implicitly for value in accordance with the [annotation definition](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abencds_anno_definition_glosry.htm "Glossary Entry") if the annotation is specified without a value. If nothing is specified for the annotation value, the annotation should be specified without a value.

EndUserText Annotations

Translatable texts of the parameter.

Annotation

Meaning

Annotation Values

Default Value if Not Used

Default Value if Used Without Value

EndUserText.label

Translatable short text of the parameter

Character string with maximum 60 characters

\-

\-

EndUserText.quickInfo

Translatable tooltip of the parameter

String

\-

\-

Note

ABAP annotations introduced using EndUserText are used to define translatable semantic texts for a [CDS object](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abencds_object_glosry.htm "Glossary Entry"). The value of an annotation like this is saved in special tables that have a language key and that are translatable. The value specified in the source code should consist of text in the original language of the CDS source code and is translated into the required languages. The methods of the class CL\_DD\_DDL\_ANNOTATION\_SERVICE read these texts as specified by an input parameter for the language. If no language is passed to the input parameter, the [text environment language](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abentext_env_langu_glosry.htm "Glossary Entry") is used as the default. If no text is found for the language, the [secondary language](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abensecondary_language_glosry.htm "Glossary Entry") in AS ABAP is used.

Environment Annotations

Defines parameter passing to a CDS view.

Annotation

Meaning

Annotation Values

Default Value if Not Used

Default Value if Used Without Value

Environment.systemField

Assigns an [ABAP system field](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abensystem_field_glosry.htm "Glossary Entry") to the input parameter for implicit parameter passing in ABAP SQL.

#CLIENT:
[sy-mandt](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abensystem_fields.htm)
#SYSTEM\_DATE:
[sy-datum](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abensystem_fields.htm)
#SYSTEM\_TIME:
[sy-uzeit](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abensystem_fields.htm)
#SYSTEM\_LANGUAGE:
[sy-langu](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abensystem_fields.htm)
#USER:
[sy-uname](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abensystem_fields.htm)

\-

\-

An input parameter can be annotated strictly once with the annotation Environment.systemField. If the CDS entity is used as a [data source](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abapselect_data_source.htm) of a [SELECT](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abapselect.htm) statement in [ABAP SQL](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenopen_sql_glosry.htm "Glossary Entry"), this assignment has the following consequences:

-   No explicit actual parameter can be assigned to an input parameter to which the system field sy-mandt was assigned using #CLIENT. ABAP SQL always passes (implicitly) the ID of the current [client](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenclient_glosry.htm "Glossary Entry") in accordance with the nominal value of sy-mandt or from the clients specified using [USING CLIENT](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abapselect_client.htm). The obsolete addition [CLIENT SPECIFIED](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abapselect_client_obsolete.htm) cannot be specified when a CDS entity of this type is accessed.

-   An explicit actual parameter does not need to be assigned to an input parameter to which a system field other than sy-mandt is assigned using #SYSTEM\_.... If no explicit actual parameter is specified, ABAP SQL passes the nominal value of the assigned system field implicitly.

Any other values for value are ignored using an exception. Instead of the value #USER, the value #APPLICATION\_USER can be specified too. This is, however, only offered for reasons of downward compatibility.

Notes

-   The annotation @Environment.systemField is ignored in parameter passing to the CDS entity in other CDS entities. Explicit actual parameters must be specified here, for example input parameters from the current entity or even [session variables](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abencds_f1_session_variable.htm).

-   The value #CLIENT of the annotation @Environment.systemField is particularly significant for [client-specific CDS table functions](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abencds_func_client_handling.htm). If an input parameter is annotated accordingly, it is given the current client ID implicitly by the ABAP SQL statement [SELECT](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abapselect.htm) and can be used to restrict the results set in the platform-dependent implementation of the function. @Environment.systemField: #CLIENT cannot be specified in the case of [cross-client CDS table functions](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abencds_func_client_handling.htm).

Example

The following CDS view associates all input parameters with ABAP system fields and the SELECT list consists only of the input parameters. The ABAP program DEMO\_CDS\_SYSTEM\_FIELDS accesses the CDS view by specifying parameters in full implicitly and explicitly and produces both results.

@AbapCatalog.sqlViewName: 'DEMO\_CDS\_SYST'
@AccessControl.authorizationCheck: #NOT\_REQUIRED
define view demo\_cds\_system\_fields
with parameters
@Environment.systemField : #CLIENT
p\_mandt : syst\_mandt,
@Environment.systemField : #SYSTEM\_DATE
p\_datum : syst\_datum,
@Environment.systemField : #SYSTEM\_TIME
p\_uzeit : syst\_uzeit,
p\_langu : syst\_langu @<Environment.systemField : #SYSTEM\_LANGUAGE,
p\_uname : syst\_uname @<Environment.systemField : #USER
as select from
demo\_expressions
{
:p\_mandt as client,
:p\_datum as datum,
:p\_uzeit as uzeit,
:p\_langu as langu,
:p\_uname as uname
}
where
id = '1';


---


## ABAP Keyword Documentation / ABAP - Dictionary / ABAP CDS in ABAP Dictionary / ABAP CDS - Data Definitions / ABAP CDS - DDL for Data Definitions / ABAP CDS - DEFINE VIEW / ABAP CDS - SELECT / ABAP CDS - SELECT, ASSOCIATION / ABAP CDS - path_expr

**Files**: 3 | **Difficulty**: advanced

# ABAP Keyword Documentation / ABAP - Dictionary / ABAP CDS in ABAP Dictionary / ABAP CDS - Data Definitions / ABAP CDS - DDL for Data Definitions / ABAP CDS - parameter

Included pages: 2



**📖 Source**: [abencds_f1_parameter_annotations.htm](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abencds_f1_parameter_annotations.htm)

### abencds_f1_param.htm

> **📖 Official SAP Documentation**: [abencds_f1_param.htm](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abencds_f1_param.htm)
> **🔍 Direct Link**: This section contains the complete content from the official SAP ABAP documentation page.


  

* * *

AS ABAP Release 754, ©Copyright 2019 SAP SE. All rights reserved.

[ABAP Keyword Documentation](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenabap.htm) →  [ABAP - Dictionary](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenabap_dictionary.htm) →  [ABAP CDS in ABAP Dictionary](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abencds.htm) →  [ABAP CDS - Data Definitions](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenddic_cds_entities.htm) →  [ABAP CDS - DDL for Data Definitions](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abencds_f1_ddl_syntax.htm) → 

ABAP CDS - parameter

Syntax

... *\[*[@parameter\_annot1](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abencds_f1_parameter_annotations.htm)*\]*
    *\[*[@parameter\_annot2](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abencds_f1_parameter_annotations.htm)*\]*
    ...
    pname : [typing](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abencds_typing.htm)
    *\[*[@<parameter\_annot1](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abencds_f1_parameter_annotations.htm)*\]*
    *\[*[@<parameter\_annot2](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abencds_f1_parameter_annotations.htm)*\]*
    ...

Addition:

[... @parameter\_annot ... @<parameter\_annot](#!ABAP_ONE_ADD@1@)

Effect

Defines a CDS parameter called pname in one of the following:

-   [Parameter list](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abencds_f1_parameter_list.htm) of a [CDS view](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abencds_view_glosry.htm "Glossary Entry")

-   [Parameter list](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abencds_f1_func_parameter_list.htm) of a [CDS table function](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abencds_table_function_glosry.htm "Glossary Entry")

-   [Parameter list](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abencds_f1_hiera_parameter_list.htm) of a [CDS hierarchy](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abencds_hierarchy_glosry.htm "Glossary Entry")

-   [Parameter list](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abencds_f1_entity_parameter_list.htm) of an [abstract CDS entity](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenabstract_entity_glosry.htm "Glossary Entry")

The name pname must comply with the naming rules for [names](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abencds_general_syntax_rules.htm). Furthermore, pname cannot contain any slash (/) characters and cannot be a reserved name in ABAP Dictionary. The name pname must be unique and be located in the namespace of the elements and [published](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abencds_f1_select_list_association.htm) CDS associations of the current CDS entity. Also, the reserved name connection cannot be used in table functions. The reserved names that cannot be used are specified in the database table TRESE. They are not case-sensitive. The blanks in the comma-separated list are ignored and can be omitted. Each parameter must be typed with an elementary data type [typing](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abencds_typing.htm).

A non-abstract CDS entity for which CDS parameters are defined as input parameters can be used as

-   A [data source](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abencds_f1_data_source.htm) or in a [path expression](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abencds_f1_path_expression.htm) of a different CDS view

-   A [data source](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abapselect_data_source.htm) of a [SELECT](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abapselect.htm) statement from ABAP SQL in ABAP

In these cases, each input parameter must be assigned a suitable actual parameter whose value is then used in the operand positions in which the parameter is specified. The actual parameters are assigned using a parenthesized comma-separated list as follows:

[... cds\_entity( pname1 : act1, pname2 : act2, ...) ...](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abencds_f1_select_parameters.htm),

This list must be specified directly after the name of the view when using an entity with parameters (both within the CDS DDL in ABAP CDS and in ABAP SQL). In ABAP SQL, an equals sign (\=) is used instead of a colon (:).

Note

It is not currently possible to define optional input parameters or replacement parameters for input parameters. The annotation [@Environment.systemField](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abencds_f1_parameter_annotations.htm) can be used, however, to make ABAP SQL pass ABAP system fields to an input parameter implicitly.

Addition

... @parameter\_annot ... @<parameter\_annot

Effect

Specifies annotations for the parameter. The annotations can be specified before the parameter using [@parameter\_annot](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abencds_f1_parameter_annotations.htm) or after the parameter using [@parameter\_annot](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abencds_f1_parameter_annotations.htm). The latter is possible only for [CDS views](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abencds_view_glosry.htm "Glossary Entry"), [CDS table functions](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abencds_table_function_glosry.htm "Glossary Entry"), and [CDS hierarchies](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abencds_hierarchy_glosry.htm "Glossary Entry") and not for [abstract CDS entities](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenabstract_entity_glosry.htm "Glossary Entry").

Continue
[ABAP CDS - parameter\_annot](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abencds_f1_parameter_annotations.htm)



**📖 Source**: [abencds_f1_param.htm](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abencds_f1_param.htm)

### abencds_f1_parameter_annotations.htm

> **📖 Official SAP Documentation**: [abencds_f1_parameter_annotations.htm](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abencds_f1_parameter_annotations.htm)
> **🔍 Direct Link**: This section contains the complete content from the official SAP ABAP documentation page.


  

* * *

AS ABAP Release 754, ©Copyright 2019 SAP SE. All rights reserved.

[ABAP Keyword Documentation](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenabap.htm) →  [ABAP - Dictionary](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenabap_dictionary.htm) →  [ABAP CDS in ABAP Dictionary](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abencds.htm) →  [ABAP CDS - Data Definitions](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenddic_cds_entities.htm) →  [ABAP CDS - DDL for Data Definitions](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abencds_f1_ddl_syntax.htm) →  [ABAP CDS - parameter](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abencds_f1_param.htm) → 

ABAP CDS - parameter\_annot

Syntax

... @[annotation](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abencds_annotations_syntax.htm) ...
... @<[annotation](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abencds_annotations_syntax.htm) ...

Effect

Specifies an [annotation](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abencds_annotation_glosry.htm "Glossary Entry") [annotation](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abencds_annotations_syntax.htm) as a parameter annotation in the definition of an [CDS parameter](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abencds_parameter_glosry.htm "Glossary Entry") [parameter](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abencds_f1_param.htm) of one of the following:

-   [CDS view](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abencds_view_glosry.htm "Glossary Entry")

-   [CDS table function](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abencds_table_function_glosry.htm "Glossary Entry")

-   [A CDS hierarchy](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abencds_hierarchy_glosry.htm "Glossary Entry")

-   [An abstract CSD entity](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenabstract_entity_glosry.htm "Glossary Entry")

Parameter annotations can be specified before and after the parameter: The annotation should be defined as a CDS object in a [CDS annotation definition](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abencds_anno_definition_glosry.htm "Glossary Entry") and the annotation definition annotation [@Scope](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abencds_f1_define_anno_annos.htm) should be specified here using the value #PARAMETER.

-   In front of the parameter, the character @ must be placed before the name annotation of the annotation.

-   Following the parameter, the characters @< must be placed before the name annotation of the annotation.

The following tables show the possible [ABAP annotations](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abencore_annotation_glosry.htm "Glossary Entry") that can be specified and their meanings. The ABAP annotations are evaluated by the ABAP runtime environment for every CDS entity. Annotations with other identifiers are usually [framework-specific annotations](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abencds_annotations_frmwrk.htm). These are not evaluated by the ABAP runtime environment but by other SAP frameworks instead.

-   [EndUserText Annotations](#abencds-f1-parameter-annotations-1--------environment-annotations---@ITOC@@ABENCDS_F1_PARAMETER_ANNOTATIONS_2)

The first column of the table displays the (possibly structured) name annotation of an ABAP annotation and the second column displays its meaning. The third column shows the possible [annotation values](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenannotation_value_glosry.htm "Glossary Entry"). The fourth column shows the value set implicitly for the annotation value if the annotation is not used explicitly. The fifth column displays the default value set implicitly for value in accordance with the [annotation definition](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abencds_anno_definition_glosry.htm "Glossary Entry") if the annotation is specified without a value. If nothing is specified for the annotation value, the annotation should be specified without a value.

EndUserText Annotations

Translatable texts of the parameter.

Annotation

Meaning

Annotation Values

Default Value if Not Used

Default Value if Used Without Value

EndUserText.label

Translatable short text of the parameter

Character string with maximum 60 characters

\-

\-

EndUserText.quickInfo

Translatable tooltip of the parameter

String

\-

\-

Note

ABAP annotations introduced using EndUserText are used to define translatable semantic texts for a [CDS object](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abencds_object_glosry.htm "Glossary Entry"). The value of an annotation like this is saved in special tables that have a language key and that are translatable. The value specified in the source code should consist of text in the original language of the CDS source code and is translated into the required languages. The methods of the class CL\_DD\_DDL\_ANNOTATION\_SERVICE read these texts as specified by an input parameter for the language. If no language is passed to the input parameter, the [text environment language](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abentext_env_langu_glosry.htm "Glossary Entry") is used as the default. If no text is found for the language, the [secondary language](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abensecondary_language_glosry.htm "Glossary Entry") in AS ABAP is used.

Environment Annotations

Defines parameter passing to a CDS view.

Annotation

Meaning

Annotation Values

Default Value if Not Used

Default Value if Used Without Value

Environment.systemField

Assigns an [ABAP system field](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abensystem_field_glosry.htm "Glossary Entry") to the input parameter for implicit parameter passing in ABAP SQL.

#CLIENT:
[sy-mandt](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abensystem_fields.htm)
#SYSTEM\_DATE:
[sy-datum](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abensystem_fields.htm)
#SYSTEM\_TIME:
[sy-uzeit](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abensystem_fields.htm)
#SYSTEM\_LANGUAGE:
[sy-langu](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abensystem_fields.htm)
#USER:
[sy-uname](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abensystem_fields.htm)

\-

\-

An input parameter can be annotated strictly once with the annotation Environment.systemField. If the CDS entity is used as a [data source](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abapselect_data_source.htm) of a [SELECT](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abapselect.htm) statement in [ABAP SQL](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenopen_sql_glosry.htm "Glossary Entry"), this assignment has the following consequences:

-   No explicit actual parameter can be assigned to an input parameter to which the system field sy-mandt was assigned using #CLIENT. ABAP SQL always passes (implicitly) the ID of the current [client](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenclient_glosry.htm "Glossary Entry") in accordance with the nominal value of sy-mandt or from the clients specified using [USING CLIENT](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abapselect_client.htm). The obsolete addition [CLIENT SPECIFIED](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abapselect_client_obsolete.htm) cannot be specified when a CDS entity of this type is accessed.

-   An explicit actual parameter does not need to be assigned to an input parameter to which a system field other than sy-mandt is assigned using #SYSTEM\_.... If no explicit actual parameter is specified, ABAP SQL passes the nominal value of the assigned system field implicitly.

Any other values for value are ignored using an exception. Instead of the value #USER, the value #APPLICATION\_USER can be specified too. This is, however, only offered for reasons of downward compatibility.

Notes

-   The annotation @Environment.systemField is ignored in parameter passing to the CDS entity in other CDS entities. Explicit actual parameters must be specified here, for example input parameters from the current entity or even [session variables](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abencds_f1_session_variable.htm).

-   The value #CLIENT of the annotation @Environment.systemField is particularly significant for [client-specific CDS table functions](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abencds_func_client_handling.htm). If an input parameter is annotated accordingly, it is given the current client ID implicitly by the ABAP SQL statement [SELECT](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abapselect.htm) and can be used to restrict the results set in the platform-dependent implementation of the function. @Environment.systemField: #CLIENT cannot be specified in the case of [cross-client CDS table functions](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abencds_func_client_handling.htm).

Example

The following CDS view associates all input parameters with ABAP system fields and the SELECT list consists only of the input parameters. The ABAP program DEMO\_CDS\_SYSTEM\_FIELDS accesses the CDS view by specifying parameters in full implicitly and explicitly and produces both results.

@AbapCatalog.sqlViewName: 'DEMO\_CDS\_SYST'
@AccessControl.authorizationCheck: #NOT\_REQUIRED
define view demo\_cds\_system\_fields
with parameters
@Environment.systemField : #CLIENT
p\_mandt : syst\_mandt,
@Environment.systemField : #SYSTEM\_DATE
p\_datum : syst\_datum,
@Environment.systemField : #SYSTEM\_TIME
p\_uzeit : syst\_uzeit,
p\_langu : syst\_langu @<Environment.systemField : #SYSTEM\_LANGUAGE,
p\_uname : syst\_uname @<Environment.systemField : #USER
as select from
demo\_expressions
{
:p\_mandt as client,
:p\_datum as datum,
:p\_uzeit as uzeit,
:p\_langu as langu,
:p\_uname as uname
}
where
id = '1';


---


## ABAP Keyword Documentation / ABAP - Dictionary / ABAP CDS in ABAP Dictionary / ABAP CDS - Data Definitions / ABAP CDS - DDL for Data Definitions / ABAP CDS - DEFINE VIEW / ABAP CDS - SELECT / ABAP CDS - SELECT, select_list / ABAP CDS - SELECT, element

**Files**: 5 | **Difficulty**: advanced

# ABAP Keyword Documentation / ABAP - Dictionary / ABAP CDS in ABAP Dictionary / ABAP CDS - Data Definitions / ABAP CDS - DDL for Data Definitions / ABAP CDS - parameter

Included pages: 2



**📖 Source**: [abencds_f1_parameter_annotations.htm](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abencds_f1_parameter_annotations.htm)

### abencds_f1_param.htm

> **📖 Official SAP Documentation**: [abencds_f1_param.htm](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abencds_f1_param.htm)
> **🔍 Direct Link**: This section contains the complete content from the official SAP ABAP documentation page.


  

* * *

AS ABAP Release 754, ©Copyright 2019 SAP SE. All rights reserved.

[ABAP Keyword Documentation](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenabap.htm) →  [ABAP - Dictionary](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenabap_dictionary.htm) →  [ABAP CDS in ABAP Dictionary](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abencds.htm) →  [ABAP CDS - Data Definitions](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenddic_cds_entities.htm) →  [ABAP CDS - DDL for Data Definitions](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abencds_f1_ddl_syntax.htm) → 

ABAP CDS - parameter

Syntax

... *\[*[@parameter\_annot1](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abencds_f1_parameter_annotations.htm)*\]*
    *\[*[@parameter\_annot2](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abencds_f1_parameter_annotations.htm)*\]*
    ...
    pname : [typing](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abencds_typing.htm)
    *\[*[@<parameter\_annot1](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abencds_f1_parameter_annotations.htm)*\]*
    *\[*[@<parameter\_annot2](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abencds_f1_parameter_annotations.htm)*\]*
    ...

Addition:

[... @parameter\_annot ... @<parameter\_annot](#!ABAP_ONE_ADD@1@)

Effect

Defines a CDS parameter called pname in one of the following:

-   [Parameter list](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abencds_f1_parameter_list.htm) of a [CDS view](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abencds_view_glosry.htm "Glossary Entry")

-   [Parameter list](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abencds_f1_func_parameter_list.htm) of a [CDS table function](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abencds_table_function_glosry.htm "Glossary Entry")

-   [Parameter list](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abencds_f1_hiera_parameter_list.htm) of a [CDS hierarchy](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abencds_hierarchy_glosry.htm "Glossary Entry")

-   [Parameter list](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abencds_f1_entity_parameter_list.htm) of an [abstract CDS entity](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenabstract_entity_glosry.htm "Glossary Entry")

The name pname must comply with the naming rules for [names](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abencds_general_syntax_rules.htm). Furthermore, pname cannot contain any slash (/) characters and cannot be a reserved name in ABAP Dictionary. The name pname must be unique and be located in the namespace of the elements and [published](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abencds_f1_select_list_association.htm) CDS associations of the current CDS entity. Also, the reserved name connection cannot be used in table functions. The reserved names that cannot be used are specified in the database table TRESE. They are not case-sensitive. The blanks in the comma-separated list are ignored and can be omitted. Each parameter must be typed with an elementary data type [typing](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abencds_typing.htm).

A non-abstract CDS entity for which CDS parameters are defined as input parameters can be used as

-   A [data source](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abencds_f1_data_source.htm) or in a [path expression](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abencds_f1_path_expression.htm) of a different CDS view

-   A [data source](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abapselect_data_source.htm) of a [SELECT](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abapselect.htm) statement from ABAP SQL in ABAP

In these cases, each input parameter must be assigned a suitable actual parameter whose value is then used in the operand positions in which the parameter is specified. The actual parameters are assigned using a parenthesized comma-separated list as follows:

[... cds\_entity( pname1 : act1, pname2 : act2, ...) ...](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abencds_f1_select_parameters.htm),

This list must be specified directly after the name of the view when using an entity with parameters (both within the CDS DDL in ABAP CDS and in ABAP SQL). In ABAP SQL, an equals sign (\=) is used instead of a colon (:).

Note

It is not currently possible to define optional input parameters or replacement parameters for input parameters. The annotation [@Environment.systemField](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abencds_f1_parameter_annotations.htm) can be used, however, to make ABAP SQL pass ABAP system fields to an input parameter implicitly.

Addition

... @parameter\_annot ... @<parameter\_annot

Effect

Specifies annotations for the parameter. The annotations can be specified before the parameter using [@parameter\_annot](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abencds_f1_parameter_annotations.htm) or after the parameter using [@parameter\_annot](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abencds_f1_parameter_annotations.htm). The latter is possible only for [CDS views](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abencds_view_glosry.htm "Glossary Entry"), [CDS table functions](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abencds_table_function_glosry.htm "Glossary Entry"), and [CDS hierarchies](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abencds_hierarchy_glosry.htm "Glossary Entry") and not for [abstract CDS entities](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenabstract_entity_glosry.htm "Glossary Entry").

Continue
[ABAP CDS - parameter\_annot](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abencds_f1_parameter_annotations.htm)



**📖 Source**: [abencds_f1_param.htm](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abencds_f1_param.htm)

### abencds_f1_parameter_annotations.htm

> **📖 Official SAP Documentation**: [abencds_f1_parameter_annotations.htm](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abencds_f1_parameter_annotations.htm)
> **🔍 Direct Link**: This section contains the complete content from the official SAP ABAP documentation page.


  

* * *

AS ABAP Release 754, ©Copyright 2019 SAP SE. All rights reserved.

[ABAP Keyword Documentation](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenabap.htm) →  [ABAP - Dictionary](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenabap_dictionary.htm) →  [ABAP CDS in ABAP Dictionary](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abencds.htm) →  [ABAP CDS - Data Definitions](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenddic_cds_entities.htm) →  [ABAP CDS - DDL for Data Definitions](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abencds_f1_ddl_syntax.htm) →  [ABAP CDS - parameter](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abencds_f1_param.htm) → 

ABAP CDS - parameter\_annot

Syntax

... @[annotation](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abencds_annotations_syntax.htm) ...
... @<[annotation](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abencds_annotations_syntax.htm) ...

Effect

Specifies an [annotation](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abencds_annotation_glosry.htm "Glossary Entry") [annotation](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abencds_annotations_syntax.htm) as a parameter annotation in the definition of an [CDS parameter](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abencds_parameter_glosry.htm "Glossary Entry") [parameter](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abencds_f1_param.htm) of one of the following:

-   [CDS view](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abencds_view_glosry.htm "Glossary Entry")

-   [CDS table function](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abencds_table_function_glosry.htm "Glossary Entry")

-   [A CDS hierarchy](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abencds_hierarchy_glosry.htm "Glossary Entry")

-   [An abstract CSD entity](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenabstract_entity_glosry.htm "Glossary Entry")

Parameter annotations can be specified before and after the parameter: The annotation should be defined as a CDS object in a [CDS annotation definition](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abencds_anno_definition_glosry.htm "Glossary Entry") and the annotation definition annotation [@Scope](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abencds_f1_define_anno_annos.htm) should be specified here using the value #PARAMETER.

-   In front of the parameter, the character @ must be placed before the name annotation of the annotation.

-   Following the parameter, the characters @< must be placed before the name annotation of the annotation.

The following tables show the possible [ABAP annotations](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abencore_annotation_glosry.htm "Glossary Entry") that can be specified and their meanings. The ABAP annotations are evaluated by the ABAP runtime environment for every CDS entity. Annotations with other identifiers are usually [framework-specific annotations](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abencds_annotations_frmwrk.htm). These are not evaluated by the ABAP runtime environment but by other SAP frameworks instead.

-   [EndUserText Annotations](#abencds-f1-parameter-annotations-1--------environment-annotations---@ITOC@@ABENCDS_F1_PARAMETER_ANNOTATIONS_2)

The first column of the table displays the (possibly structured) name annotation of an ABAP annotation and the second column displays its meaning. The third column shows the possible [annotation values](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenannotation_value_glosry.htm "Glossary Entry"). The fourth column shows the value set implicitly for the annotation value if the annotation is not used explicitly. The fifth column displays the default value set implicitly for value in accordance with the [annotation definition](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abencds_anno_definition_glosry.htm "Glossary Entry") if the annotation is specified without a value. If nothing is specified for the annotation value, the annotation should be specified without a value.

EndUserText Annotations

Translatable texts of the parameter.

Annotation

Meaning

Annotation Values

Default Value if Not Used

Default Value if Used Without Value

EndUserText.label

Translatable short text of the parameter

Character string with maximum 60 characters

\-

\-

EndUserText.quickInfo

Translatable tooltip of the parameter

String

\-

\-

Note

ABAP annotations introduced using EndUserText are used to define translatable semantic texts for a [CDS object](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abencds_object_glosry.htm "Glossary Entry"). The value of an annotation like this is saved in special tables that have a language key and that are translatable. The value specified in the source code should consist of text in the original language of the CDS source code and is translated into the required languages. The methods of the class CL\_DD\_DDL\_ANNOTATION\_SERVICE read these texts as specified by an input parameter for the language. If no language is passed to the input parameter, the [text environment language](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abentext_env_langu_glosry.htm "Glossary Entry") is used as the default. If no text is found for the language, the [secondary language](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abensecondary_language_glosry.htm "Glossary Entry") in AS ABAP is used.

Environment Annotations

Defines parameter passing to a CDS view.

Annotation

Meaning

Annotation Values

Default Value if Not Used

Default Value if Used Without Value

Environment.systemField

Assigns an [ABAP system field](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abensystem_field_glosry.htm "Glossary Entry") to the input parameter for implicit parameter passing in ABAP SQL.

#CLIENT:
[sy-mandt](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abensystem_fields.htm)
#SYSTEM\_DATE:
[sy-datum](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abensystem_fields.htm)
#SYSTEM\_TIME:
[sy-uzeit](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abensystem_fields.htm)
#SYSTEM\_LANGUAGE:
[sy-langu](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abensystem_fields.htm)
#USER:
[sy-uname](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abensystem_fields.htm)

\-

\-

An input parameter can be annotated strictly once with the annotation Environment.systemField. If the CDS entity is used as a [data source](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abapselect_data_source.htm) of a [SELECT](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abapselect.htm) statement in [ABAP SQL](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenopen_sql_glosry.htm "Glossary Entry"), this assignment has the following consequences:

-   No explicit actual parameter can be assigned to an input parameter to which the system field sy-mandt was assigned using #CLIENT. ABAP SQL always passes (implicitly) the ID of the current [client](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenclient_glosry.htm "Glossary Entry") in accordance with the nominal value of sy-mandt or from the clients specified using [USING CLIENT](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abapselect_client.htm). The obsolete addition [CLIENT SPECIFIED](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abapselect_client_obsolete.htm) cannot be specified when a CDS entity of this type is accessed.

-   An explicit actual parameter does not need to be assigned to an input parameter to which a system field other than sy-mandt is assigned using #SYSTEM\_.... If no explicit actual parameter is specified, ABAP SQL passes the nominal value of the assigned system field implicitly.

Any other values for value are ignored using an exception. Instead of the value #USER, the value #APPLICATION\_USER can be specified too. This is, however, only offered for reasons of downward compatibility.

Notes

-   The annotation @Environment.systemField is ignored in parameter passing to the CDS entity in other CDS entities. Explicit actual parameters must be specified here, for example input parameters from the current entity or even [session variables](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abencds_f1_session_variable.htm).

-   The value #CLIENT of the annotation @Environment.systemField is particularly significant for [client-specific CDS table functions](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abencds_func_client_handling.htm). If an input parameter is annotated accordingly, it is given the current client ID implicitly by the ABAP SQL statement [SELECT](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abapselect.htm) and can be used to restrict the results set in the platform-dependent implementation of the function. @Environment.systemField: #CLIENT cannot be specified in the case of [cross-client CDS table functions](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abencds_func_client_handling.htm).

Example

The following CDS view associates all input parameters with ABAP system fields and the SELECT list consists only of the input parameters. The ABAP program DEMO\_CDS\_SYSTEM\_FIELDS accesses the CDS view by specifying parameters in full implicitly and explicitly and produces both results.

@AbapCatalog.sqlViewName: 'DEMO\_CDS\_SYST'
@AccessControl.authorizationCheck: #NOT\_REQUIRED
define view demo\_cds\_system\_fields
with parameters
@Environment.systemField : #CLIENT
p\_mandt : syst\_mandt,
@Environment.systemField : #SYSTEM\_DATE
p\_datum : syst\_datum,
@Environment.systemField : #SYSTEM\_TIME
p\_uzeit : syst\_uzeit,
p\_langu : syst\_langu @<Environment.systemField : #SYSTEM\_LANGUAGE,
p\_uname : syst\_uname @<Environment.systemField : #USER
as select from
demo\_expressions
{
:p\_mandt as client,
:p\_datum as datum,
:p\_uzeit as uzeit,
:p\_langu as langu,
:p\_uname as uname
}
where
id = '1';


---


## ABAP Keyword Documentation / ABAP - Dictionary / ABAP CDS in ABAP Dictionary / ABAP CDS - Data Definitions / ABAP CDS - DDL for Data Definitions / ABAP CDS - DEFINE VIEW / ABAP CDS - SELECT / ABAP CDS - SELECT, clauses

**Files**: 5 | **Difficulty**: advanced

# ABAP Keyword Documentation / ABAP - Dictionary / ABAP CDS in ABAP Dictionary / ABAP CDS - Data Definitions / ABAP CDS - DDL for Data Definitions / ABAP CDS - parameter

Included pages: 2



**📖 Source**: [abencds_f1_parameter_annotations.htm](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abencds_f1_parameter_annotations.htm)

### abencds_f1_param.htm

> **📖 Official SAP Documentation**: [abencds_f1_param.htm](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abencds_f1_param.htm)
> **🔍 Direct Link**: This section contains the complete content from the official SAP ABAP documentation page.


  

* * *

AS ABAP Release 754, ©Copyright 2019 SAP SE. All rights reserved.

[ABAP Keyword Documentation](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenabap.htm) →  [ABAP - Dictionary](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenabap_dictionary.htm) →  [ABAP CDS in ABAP Dictionary](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abencds.htm) →  [ABAP CDS - Data Definitions](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenddic_cds_entities.htm) →  [ABAP CDS - DDL for Data Definitions](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abencds_f1_ddl_syntax.htm) → 

ABAP CDS - parameter

Syntax

... *\[*[@parameter\_annot1](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abencds_f1_parameter_annotations.htm)*\]*
    *\[*[@parameter\_annot2](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abencds_f1_parameter_annotations.htm)*\]*
    ...
    pname : [typing](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abencds_typing.htm)
    *\[*[@<parameter\_annot1](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abencds_f1_parameter_annotations.htm)*\]*
    *\[*[@<parameter\_annot2](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abencds_f1_parameter_annotations.htm)*\]*
    ...

Addition:

[... @parameter\_annot ... @<parameter\_annot](#!ABAP_ONE_ADD@1@)

Effect

Defines a CDS parameter called pname in one of the following:

-   [Parameter list](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abencds_f1_parameter_list.htm) of a [CDS view](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abencds_view_glosry.htm "Glossary Entry")

-   [Parameter list](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abencds_f1_func_parameter_list.htm) of a [CDS table function](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abencds_table_function_glosry.htm "Glossary Entry")

-   [Parameter list](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abencds_f1_hiera_parameter_list.htm) of a [CDS hierarchy](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abencds_hierarchy_glosry.htm "Glossary Entry")

-   [Parameter list](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abencds_f1_entity_parameter_list.htm) of an [abstract CDS entity](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenabstract_entity_glosry.htm "Glossary Entry")

The name pname must comply with the naming rules for [names](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abencds_general_syntax_rules.htm). Furthermore, pname cannot contain any slash (/) characters and cannot be a reserved name in ABAP Dictionary. The name pname must be unique and be located in the namespace of the elements and [published](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abencds_f1_select_list_association.htm) CDS associations of the current CDS entity. Also, the reserved name connection cannot be used in table functions. The reserved names that cannot be used are specified in the database table TRESE. They are not case-sensitive. The blanks in the comma-separated list are ignored and can be omitted. Each parameter must be typed with an elementary data type [typing](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abencds_typing.htm).

A non-abstract CDS entity for which CDS parameters are defined as input parameters can be used as

-   A [data source](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abencds_f1_data_source.htm) or in a [path expression](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abencds_f1_path_expression.htm) of a different CDS view

-   A [data source](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abapselect_data_source.htm) of a [SELECT](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abapselect.htm) statement from ABAP SQL in ABAP

In these cases, each input parameter must be assigned a suitable actual parameter whose value is then used in the operand positions in which the parameter is specified. The actual parameters are assigned using a parenthesized comma-separated list as follows:

[... cds\_entity( pname1 : act1, pname2 : act2, ...) ...](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abencds_f1_select_parameters.htm),

This list must be specified directly after the name of the view when using an entity with parameters (both within the CDS DDL in ABAP CDS and in ABAP SQL). In ABAP SQL, an equals sign (\=) is used instead of a colon (:).

Note

It is not currently possible to define optional input parameters or replacement parameters for input parameters. The annotation [@Environment.systemField](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abencds_f1_parameter_annotations.htm) can be used, however, to make ABAP SQL pass ABAP system fields to an input parameter implicitly.

Addition

... @parameter\_annot ... @<parameter\_annot

Effect

Specifies annotations for the parameter. The annotations can be specified before the parameter using [@parameter\_annot](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abencds_f1_parameter_annotations.htm) or after the parameter using [@parameter\_annot](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abencds_f1_parameter_annotations.htm). The latter is possible only for [CDS views](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abencds_view_glosry.htm "Glossary Entry"), [CDS table functions](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abencds_table_function_glosry.htm "Glossary Entry"), and [CDS hierarchies](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abencds_hierarchy_glosry.htm "Glossary Entry") and not for [abstract CDS entities](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenabstract_entity_glosry.htm "Glossary Entry").

Continue
[ABAP CDS - parameter\_annot](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abencds_f1_parameter_annotations.htm)



**📖 Source**: [abencds_f1_param.htm](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abencds_f1_param.htm)

### abencds_f1_parameter_annotations.htm

> **📖 Official SAP Documentation**: [abencds_f1_parameter_annotations.htm](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abencds_f1_parameter_annotations.htm)
> **🔍 Direct Link**: This section contains the complete content from the official SAP ABAP documentation page.


  

* * *

AS ABAP Release 754, ©Copyright 2019 SAP SE. All rights reserved.

[ABAP Keyword Documentation](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenabap.htm) →  [ABAP - Dictionary](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenabap_dictionary.htm) →  [ABAP CDS in ABAP Dictionary](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abencds.htm) →  [ABAP CDS - Data Definitions](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenddic_cds_entities.htm) →  [ABAP CDS - DDL for Data Definitions](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abencds_f1_ddl_syntax.htm) →  [ABAP CDS - parameter](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abencds_f1_param.htm) → 

ABAP CDS - parameter\_annot

Syntax

... @[annotation](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abencds_annotations_syntax.htm) ...
... @<[annotation](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abencds_annotations_syntax.htm) ...

Effect

Specifies an [annotation](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abencds_annotation_glosry.htm "Glossary Entry") [annotation](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abencds_annotations_syntax.htm) as a parameter annotation in the definition of an [CDS parameter](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abencds_parameter_glosry.htm "Glossary Entry") [parameter](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abencds_f1_param.htm) of one of the following:

-   [CDS view](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abencds_view_glosry.htm "Glossary Entry")

-   [CDS table function](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abencds_table_function_glosry.htm "Glossary Entry")

-   [A CDS hierarchy](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abencds_hierarchy_glosry.htm "Glossary Entry")

-   [An abstract CSD entity](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenabstract_entity_glosry.htm "Glossary Entry")

Parameter annotations can be specified before and after the parameter: The annotation should be defined as a CDS object in a [CDS annotation definition](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abencds_anno_definition_glosry.htm "Glossary Entry") and the annotation definition annotation [@Scope](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abencds_f1_define_anno_annos.htm) should be specified here using the value #PARAMETER.

-   In front of the parameter, the character @ must be placed before the name annotation of the annotation.

-   Following the parameter, the characters @< must be placed before the name annotation of the annotation.

The following tables show the possible [ABAP annotations](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abencore_annotation_glosry.htm "Glossary Entry") that can be specified and their meanings. The ABAP annotations are evaluated by the ABAP runtime environment for every CDS entity. Annotations with other identifiers are usually [framework-specific annotations](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abencds_annotations_frmwrk.htm). These are not evaluated by the ABAP runtime environment but by other SAP frameworks instead.

-   [EndUserText Annotations](#abencds-f1-parameter-annotations-1--------environment-annotations---@ITOC@@ABENCDS_F1_PARAMETER_ANNOTATIONS_2)

The first column of the table displays the (possibly structured) name annotation of an ABAP annotation and the second column displays its meaning. The third column shows the possible [annotation values](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenannotation_value_glosry.htm "Glossary Entry"). The fourth column shows the value set implicitly for the annotation value if the annotation is not used explicitly. The fifth column displays the default value set implicitly for value in accordance with the [annotation definition](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abencds_anno_definition_glosry.htm "Glossary Entry") if the annotation is specified without a value. If nothing is specified for the annotation value, the annotation should be specified without a value.

EndUserText Annotations

Translatable texts of the parameter.

Annotation

Meaning

Annotation Values

Default Value if Not Used

Default Value if Used Without Value

EndUserText.label

Translatable short text of the parameter

Character string with maximum 60 characters

\-

\-

EndUserText.quickInfo

Translatable tooltip of the parameter

String

\-

\-

Note

ABAP annotations introduced using EndUserText are used to define translatable semantic texts for a [CDS object](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abencds_object_glosry.htm "Glossary Entry"). The value of an annotation like this is saved in special tables that have a language key and that are translatable. The value specified in the source code should consist of text in the original language of the CDS source code and is translated into the required languages. The methods of the class CL\_DD\_DDL\_ANNOTATION\_SERVICE read these texts as specified by an input parameter for the language. If no language is passed to the input parameter, the [text environment language](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abentext_env_langu_glosry.htm "Glossary Entry") is used as the default. If no text is found for the language, the [secondary language](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abensecondary_language_glosry.htm "Glossary Entry") in AS ABAP is used.

Environment Annotations

Defines parameter passing to a CDS view.

Annotation

Meaning

Annotation Values

Default Value if Not Used

Default Value if Used Without Value

Environment.systemField

Assigns an [ABAP system field](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abensystem_field_glosry.htm "Glossary Entry") to the input parameter for implicit parameter passing in ABAP SQL.

#CLIENT:
[sy-mandt](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abensystem_fields.htm)
#SYSTEM\_DATE:
[sy-datum](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abensystem_fields.htm)
#SYSTEM\_TIME:
[sy-uzeit](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abensystem_fields.htm)
#SYSTEM\_LANGUAGE:
[sy-langu](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abensystem_fields.htm)
#USER:
[sy-uname](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abensystem_fields.htm)

\-

\-

An input parameter can be annotated strictly once with the annotation Environment.systemField. If the CDS entity is used as a [data source](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abapselect_data_source.htm) of a [SELECT](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abapselect.htm) statement in [ABAP SQL](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenopen_sql_glosry.htm "Glossary Entry"), this assignment has the following consequences:

-   No explicit actual parameter can be assigned to an input parameter to which the system field sy-mandt was assigned using #CLIENT. ABAP SQL always passes (implicitly) the ID of the current [client](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenclient_glosry.htm "Glossary Entry") in accordance with the nominal value of sy-mandt or from the clients specified using [USING CLIENT](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abapselect_client.htm). The obsolete addition [CLIENT SPECIFIED](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abapselect_client_obsolete.htm) cannot be specified when a CDS entity of this type is accessed.

-   An explicit actual parameter does not need to be assigned to an input parameter to which a system field other than sy-mandt is assigned using #SYSTEM\_.... If no explicit actual parameter is specified, ABAP SQL passes the nominal value of the assigned system field implicitly.

Any other values for value are ignored using an exception. Instead of the value #USER, the value #APPLICATION\_USER can be specified too. This is, however, only offered for reasons of downward compatibility.

Notes

-   The annotation @Environment.systemField is ignored in parameter passing to the CDS entity in other CDS entities. Explicit actual parameters must be specified here, for example input parameters from the current entity or even [session variables](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abencds_f1_session_variable.htm).

-   The value #CLIENT of the annotation @Environment.systemField is particularly significant for [client-specific CDS table functions](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abencds_func_client_handling.htm). If an input parameter is annotated accordingly, it is given the current client ID implicitly by the ABAP SQL statement [SELECT](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abapselect.htm) and can be used to restrict the results set in the platform-dependent implementation of the function. @Environment.systemField: #CLIENT cannot be specified in the case of [cross-client CDS table functions](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abencds_func_client_handling.htm).

Example

The following CDS view associates all input parameters with ABAP system fields and the SELECT list consists only of the input parameters. The ABAP program DEMO\_CDS\_SYSTEM\_FIELDS accesses the CDS view by specifying parameters in full implicitly and explicitly and produces both results.

@AbapCatalog.sqlViewName: 'DEMO\_CDS\_SYST'
@AccessControl.authorizationCheck: #NOT\_REQUIRED
define view demo\_cds\_system\_fields
with parameters
@Environment.systemField : #CLIENT
p\_mandt : syst\_mandt,
@Environment.systemField : #SYSTEM\_DATE
p\_datum : syst\_datum,
@Environment.systemField : #SYSTEM\_TIME
p\_uzeit : syst\_uzeit,
p\_langu : syst\_langu @<Environment.systemField : #SYSTEM\_LANGUAGE,
p\_uname : syst\_uname @<Environment.systemField : #USER
as select from
demo\_expressions
{
:p\_mandt as client,
:p\_datum as datum,
:p\_uzeit as uzeit,
:p\_langu as langu,
:p\_uname as uname
}
where
id = '1';


---


## ABAP Keyword Documentation / ABAP - Dictionary / ABAP CDS in ABAP Dictionary / ABAP CDS - Data Definitions / ABAP CDS - DDL for Data Definitions / ABAP CDS - DEFINE VIEW / ABAP CDS - SELECT / ABAP CDS - SELECT, Operands and Expressions / ABAP CDS - aggr_expr

**Files**: 2 | **Difficulty**: advanced

# ABAP Keyword Documentation / ABAP - Dictionary / ABAP CDS in ABAP Dictionary / ABAP CDS - Data Definitions / ABAP CDS - DDL for Data Definitions / ABAP CDS - parameter

Included pages: 2



**📖 Source**: [abencds_f1_parameter_annotations.htm](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abencds_f1_parameter_annotations.htm)

### abencds_f1_param.htm

> **📖 Official SAP Documentation**: [abencds_f1_param.htm](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abencds_f1_param.htm)
> **🔍 Direct Link**: This section contains the complete content from the official SAP ABAP documentation page.


  

* * *

AS ABAP Release 754, ©Copyright 2019 SAP SE. All rights reserved.

[ABAP Keyword Documentation](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenabap.htm) →  [ABAP - Dictionary](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenabap_dictionary.htm) →  [ABAP CDS in ABAP Dictionary](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abencds.htm) →  [ABAP CDS - Data Definitions](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenddic_cds_entities.htm) →  [ABAP CDS - DDL for Data Definitions](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abencds_f1_ddl_syntax.htm) → 

ABAP CDS - parameter

Syntax

... *\[*[@parameter\_annot1](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abencds_f1_parameter_annotations.htm)*\]*
    *\[*[@parameter\_annot2](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abencds_f1_parameter_annotations.htm)*\]*
    ...
    pname : [typing](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abencds_typing.htm)
    *\[*[@<parameter\_annot1](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abencds_f1_parameter_annotations.htm)*\]*
    *\[*[@<parameter\_annot2](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abencds_f1_parameter_annotations.htm)*\]*
    ...

Addition:

[... @parameter\_annot ... @<parameter\_annot](#!ABAP_ONE_ADD@1@)

Effect

Defines a CDS parameter called pname in one of the following:

-   [Parameter list](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abencds_f1_parameter_list.htm) of a [CDS view](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abencds_view_glosry.htm "Glossary Entry")

-   [Parameter list](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abencds_f1_func_parameter_list.htm) of a [CDS table function](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abencds_table_function_glosry.htm "Glossary Entry")

-   [Parameter list](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abencds_f1_hiera_parameter_list.htm) of a [CDS hierarchy](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abencds_hierarchy_glosry.htm "Glossary Entry")

-   [Parameter list](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abencds_f1_entity_parameter_list.htm) of an [abstract CDS entity](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenabstract_entity_glosry.htm "Glossary Entry")

The name pname must comply with the naming rules for [names](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abencds_general_syntax_rules.htm). Furthermore, pname cannot contain any slash (/) characters and cannot be a reserved name in ABAP Dictionary. The name pname must be unique and be located in the namespace of the elements and [published](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abencds_f1_select_list_association.htm) CDS associations of the current CDS entity. Also, the reserved name connection cannot be used in table functions. The reserved names that cannot be used are specified in the database table TRESE. They are not case-sensitive. The blanks in the comma-separated list are ignored and can be omitted. Each parameter must be typed with an elementary data type [typing](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abencds_typing.htm).

A non-abstract CDS entity for which CDS parameters are defined as input parameters can be used as

-   A [data source](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abencds_f1_data_source.htm) or in a [path expression](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abencds_f1_path_expression.htm) of a different CDS view

-   A [data source](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abapselect_data_source.htm) of a [SELECT](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abapselect.htm) statement from ABAP SQL in ABAP

In these cases, each input parameter must be assigned a suitable actual parameter whose value is then used in the operand positions in which the parameter is specified. The actual parameters are assigned using a parenthesized comma-separated list as follows:

[... cds\_entity( pname1 : act1, pname2 : act2, ...) ...](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abencds_f1_select_parameters.htm),

This list must be specified directly after the name of the view when using an entity with parameters (both within the CDS DDL in ABAP CDS and in ABAP SQL). In ABAP SQL, an equals sign (\=) is used instead of a colon (:).

Note

It is not currently possible to define optional input parameters or replacement parameters for input parameters. The annotation [@Environment.systemField](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abencds_f1_parameter_annotations.htm) can be used, however, to make ABAP SQL pass ABAP system fields to an input parameter implicitly.

Addition

... @parameter\_annot ... @<parameter\_annot

Effect

Specifies annotations for the parameter. The annotations can be specified before the parameter using [@parameter\_annot](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abencds_f1_parameter_annotations.htm) or after the parameter using [@parameter\_annot](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abencds_f1_parameter_annotations.htm). The latter is possible only for [CDS views](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abencds_view_glosry.htm "Glossary Entry"), [CDS table functions](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abencds_table_function_glosry.htm "Glossary Entry"), and [CDS hierarchies](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abencds_hierarchy_glosry.htm "Glossary Entry") and not for [abstract CDS entities](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenabstract_entity_glosry.htm "Glossary Entry").

Continue
[ABAP CDS - parameter\_annot](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abencds_f1_parameter_annotations.htm)



**📖 Source**: [abencds_f1_param.htm](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abencds_f1_param.htm)

### abencds_f1_parameter_annotations.htm

> **📖 Official SAP Documentation**: [abencds_f1_parameter_annotations.htm](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abencds_f1_parameter_annotations.htm)
> **🔍 Direct Link**: This section contains the complete content from the official SAP ABAP documentation page.


  

* * *

AS ABAP Release 754, ©Copyright 2019 SAP SE. All rights reserved.

[ABAP Keyword Documentation](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenabap.htm) →  [ABAP - Dictionary](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenabap_dictionary.htm) →  [ABAP CDS in ABAP Dictionary](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abencds.htm) →  [ABAP CDS - Data Definitions](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenddic_cds_entities.htm) →  [ABAP CDS - DDL for Data Definitions](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abencds_f1_ddl_syntax.htm) →  [ABAP CDS - parameter](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abencds_f1_param.htm) → 

ABAP CDS - parameter\_annot

Syntax

... @[annotation](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abencds_annotations_syntax.htm) ...
... @<[annotation](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abencds_annotations_syntax.htm) ...

Effect

Specifies an [annotation](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abencds_annotation_glosry.htm "Glossary Entry") [annotation](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abencds_annotations_syntax.htm) as a parameter annotation in the definition of an [CDS parameter](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abencds_parameter_glosry.htm "Glossary Entry") [parameter](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abencds_f1_param.htm) of one of the following:

-   [CDS view](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abencds_view_glosry.htm "Glossary Entry")

-   [CDS table function](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abencds_table_function_glosry.htm "Glossary Entry")

-   [A CDS hierarchy](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abencds_hierarchy_glosry.htm "Glossary Entry")

-   [An abstract CSD entity](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenabstract_entity_glosry.htm "Glossary Entry")

Parameter annotations can be specified before and after the parameter: The annotation should be defined as a CDS object in a [CDS annotation definition](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abencds_anno_definition_glosry.htm "Glossary Entry") and the annotation definition annotation [@Scope](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abencds_f1_define_anno_annos.htm) should be specified here using the value #PARAMETER.

-   In front of the parameter, the character @ must be placed before the name annotation of the annotation.

-   Following the parameter, the characters @< must be placed before the name annotation of the annotation.

The following tables show the possible [ABAP annotations](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abencore_annotation_glosry.htm "Glossary Entry") that can be specified and their meanings. The ABAP annotations are evaluated by the ABAP runtime environment for every CDS entity. Annotations with other identifiers are usually [framework-specific annotations](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abencds_annotations_frmwrk.htm). These are not evaluated by the ABAP runtime environment but by other SAP frameworks instead.

-   [EndUserText Annotations](#abencds-f1-parameter-annotations-1--------environment-annotations---@ITOC@@ABENCDS_F1_PARAMETER_ANNOTATIONS_2)

The first column of the table displays the (possibly structured) name annotation of an ABAP annotation and the second column displays its meaning. The third column shows the possible [annotation values](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenannotation_value_glosry.htm "Glossary Entry"). The fourth column shows the value set implicitly for the annotation value if the annotation is not used explicitly. The fifth column displays the default value set implicitly for value in accordance with the [annotation definition](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abencds_anno_definition_glosry.htm "Glossary Entry") if the annotation is specified without a value. If nothing is specified for the annotation value, the annotation should be specified without a value.

EndUserText Annotations

Translatable texts of the parameter.

Annotation

Meaning

Annotation Values

Default Value if Not Used

Default Value if Used Without Value

EndUserText.label

Translatable short text of the parameter

Character string with maximum 60 characters

\-

\-

EndUserText.quickInfo

Translatable tooltip of the parameter

String

\-

\-

Note

ABAP annotations introduced using EndUserText are used to define translatable semantic texts for a [CDS object](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abencds_object_glosry.htm "Glossary Entry"). The value of an annotation like this is saved in special tables that have a language key and that are translatable. The value specified in the source code should consist of text in the original language of the CDS source code and is translated into the required languages. The methods of the class CL\_DD\_DDL\_ANNOTATION\_SERVICE read these texts as specified by an input parameter for the language. If no language is passed to the input parameter, the [text environment language](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abentext_env_langu_glosry.htm "Glossary Entry") is used as the default. If no text is found for the language, the [secondary language](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abensecondary_language_glosry.htm "Glossary Entry") in AS ABAP is used.

Environment Annotations

Defines parameter passing to a CDS view.

Annotation

Meaning

Annotation Values

Default Value if Not Used

Default Value if Used Without Value

Environment.systemField

Assigns an [ABAP system field](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abensystem_field_glosry.htm "Glossary Entry") to the input parameter for implicit parameter passing in ABAP SQL.

#CLIENT:
[sy-mandt](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abensystem_fields.htm)
#SYSTEM\_DATE:
[sy-datum](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abensystem_fields.htm)
#SYSTEM\_TIME:
[sy-uzeit](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abensystem_fields.htm)
#SYSTEM\_LANGUAGE:
[sy-langu](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abensystem_fields.htm)
#USER:
[sy-uname](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abensystem_fields.htm)

\-

\-

An input parameter can be annotated strictly once with the annotation Environment.systemField. If the CDS entity is used as a [data source](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abapselect_data_source.htm) of a [SELECT](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abapselect.htm) statement in [ABAP SQL](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenopen_sql_glosry.htm "Glossary Entry"), this assignment has the following consequences:

-   No explicit actual parameter can be assigned to an input parameter to which the system field sy-mandt was assigned using #CLIENT. ABAP SQL always passes (implicitly) the ID of the current [client](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenclient_glosry.htm "Glossary Entry") in accordance with the nominal value of sy-mandt or from the clients specified using [USING CLIENT](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abapselect_client.htm). The obsolete addition [CLIENT SPECIFIED](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abapselect_client_obsolete.htm) cannot be specified when a CDS entity of this type is accessed.

-   An explicit actual parameter does not need to be assigned to an input parameter to which a system field other than sy-mandt is assigned using #SYSTEM\_.... If no explicit actual parameter is specified, ABAP SQL passes the nominal value of the assigned system field implicitly.

Any other values for value are ignored using an exception. Instead of the value #USER, the value #APPLICATION\_USER can be specified too. This is, however, only offered for reasons of downward compatibility.

Notes

-   The annotation @Environment.systemField is ignored in parameter passing to the CDS entity in other CDS entities. Explicit actual parameters must be specified here, for example input parameters from the current entity or even [session variables](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abencds_f1_session_variable.htm).

-   The value #CLIENT of the annotation @Environment.systemField is particularly significant for [client-specific CDS table functions](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abencds_func_client_handling.htm). If an input parameter is annotated accordingly, it is given the current client ID implicitly by the ABAP SQL statement [SELECT](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abapselect.htm) and can be used to restrict the results set in the platform-dependent implementation of the function. @Environment.systemField: #CLIENT cannot be specified in the case of [cross-client CDS table functions](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abencds_func_client_handling.htm).

Example

The following CDS view associates all input parameters with ABAP system fields and the SELECT list consists only of the input parameters. The ABAP program DEMO\_CDS\_SYSTEM\_FIELDS accesses the CDS view by specifying parameters in full implicitly and explicitly and produces both results.

@AbapCatalog.sqlViewName: 'DEMO\_CDS\_SYST'
@AccessControl.authorizationCheck: #NOT\_REQUIRED
define view demo\_cds\_system\_fields
with parameters
@Environment.systemField : #CLIENT
p\_mandt : syst\_mandt,
@Environment.systemField : #SYSTEM\_DATE
p\_datum : syst\_datum,
@Environment.systemField : #SYSTEM\_TIME
p\_uzeit : syst\_uzeit,
p\_langu : syst\_langu @<Environment.systemField : #SYSTEM\_LANGUAGE,
p\_uname : syst\_uname @<Environment.systemField : #USER
as select from
demo\_expressions
{
:p\_mandt as client,
:p\_datum as datum,
:p\_uzeit as uzeit,
:p\_langu as langu,
:p\_uname as uname
}
where
id = '1';


---


## ABAP Keyword Documentation / ABAP - Dictionary / ABAP CDS in ABAP Dictionary / ABAP CDS - Data Definitions / ABAP CDS - DDL for Data Definitions / ABAP CDS - DEFINE VIEW / ABAP CDS - SELECT / ABAP CDS - SELECT, Operands and Expressions / ABAP CDS - case_expr

**Files**: 3 | **Difficulty**: advanced

# ABAP Keyword Documentation / ABAP - Dictionary / ABAP CDS in ABAP Dictionary / ABAP CDS - Data Definitions / ABAP CDS - DDL for Data Definitions / ABAP CDS - parameter

Included pages: 2



**📖 Source**: [abencds_f1_parameter_annotations.htm](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abencds_f1_parameter_annotations.htm)

### abencds_f1_param.htm

> **📖 Official SAP Documentation**: [abencds_f1_param.htm](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abencds_f1_param.htm)
> **🔍 Direct Link**: This section contains the complete content from the official SAP ABAP documentation page.


  

* * *

AS ABAP Release 754, ©Copyright 2019 SAP SE. All rights reserved.

[ABAP Keyword Documentation](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenabap.htm) →  [ABAP - Dictionary](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenabap_dictionary.htm) →  [ABAP CDS in ABAP Dictionary](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abencds.htm) →  [ABAP CDS - Data Definitions](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenddic_cds_entities.htm) →  [ABAP CDS - DDL for Data Definitions](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abencds_f1_ddl_syntax.htm) → 

ABAP CDS - parameter

Syntax

... *\[*[@parameter\_annot1](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abencds_f1_parameter_annotations.htm)*\]*
    *\[*[@parameter\_annot2](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abencds_f1_parameter_annotations.htm)*\]*
    ...
    pname : [typing](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abencds_typing.htm)
    *\[*[@<parameter\_annot1](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abencds_f1_parameter_annotations.htm)*\]*
    *\[*[@<parameter\_annot2](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abencds_f1_parameter_annotations.htm)*\]*
    ...

Addition:

[... @parameter\_annot ... @<parameter\_annot](#!ABAP_ONE_ADD@1@)

Effect

Defines a CDS parameter called pname in one of the following:

-   [Parameter list](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abencds_f1_parameter_list.htm) of a [CDS view](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abencds_view_glosry.htm "Glossary Entry")

-   [Parameter list](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abencds_f1_func_parameter_list.htm) of a [CDS table function](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abencds_table_function_glosry.htm "Glossary Entry")

-   [Parameter list](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abencds_f1_hiera_parameter_list.htm) of a [CDS hierarchy](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abencds_hierarchy_glosry.htm "Glossary Entry")

-   [Parameter list](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abencds_f1_entity_parameter_list.htm) of an [abstract CDS entity](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenabstract_entity_glosry.htm "Glossary Entry")

The name pname must comply with the naming rules for [names](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abencds_general_syntax_rules.htm). Furthermore, pname cannot contain any slash (/) characters and cannot be a reserved name in ABAP Dictionary. The name pname must be unique and be located in the namespace of the elements and [published](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abencds_f1_select_list_association.htm) CDS associations of the current CDS entity. Also, the reserved name connection cannot be used in table functions. The reserved names that cannot be used are specified in the database table TRESE. They are not case-sensitive. The blanks in the comma-separated list are ignored and can be omitted. Each parameter must be typed with an elementary data type [typing](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abencds_typing.htm).

A non-abstract CDS entity for which CDS parameters are defined as input parameters can be used as

-   A [data source](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abencds_f1_data_source.htm) or in a [path expression](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abencds_f1_path_expression.htm) of a different CDS view

-   A [data source](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abapselect_data_source.htm) of a [SELECT](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abapselect.htm) statement from ABAP SQL in ABAP

In these cases, each input parameter must be assigned a suitable actual parameter whose value is then used in the operand positions in which the parameter is specified. The actual parameters are assigned using a parenthesized comma-separated list as follows:

[... cds\_entity( pname1 : act1, pname2 : act2, ...) ...](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abencds_f1_select_parameters.htm),

This list must be specified directly after the name of the view when using an entity with parameters (both within the CDS DDL in ABAP CDS and in ABAP SQL). In ABAP SQL, an equals sign (\=) is used instead of a colon (:).

Note

It is not currently possible to define optional input parameters or replacement parameters for input parameters. The annotation [@Environment.systemField](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abencds_f1_parameter_annotations.htm) can be used, however, to make ABAP SQL pass ABAP system fields to an input parameter implicitly.

Addition

... @parameter\_annot ... @<parameter\_annot

Effect

Specifies annotations for the parameter. The annotations can be specified before the parameter using [@parameter\_annot](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abencds_f1_parameter_annotations.htm) or after the parameter using [@parameter\_annot](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abencds_f1_parameter_annotations.htm). The latter is possible only for [CDS views](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abencds_view_glosry.htm "Glossary Entry"), [CDS table functions](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abencds_table_function_glosry.htm "Glossary Entry"), and [CDS hierarchies](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abencds_hierarchy_glosry.htm "Glossary Entry") and not for [abstract CDS entities](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenabstract_entity_glosry.htm "Glossary Entry").

Continue
[ABAP CDS - parameter\_annot](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abencds_f1_parameter_annotations.htm)



**📖 Source**: [abencds_f1_param.htm](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abencds_f1_param.htm)

### abencds_f1_parameter_annotations.htm

> **📖 Official SAP Documentation**: [abencds_f1_parameter_annotations.htm](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abencds_f1_parameter_annotations.htm)
> **🔍 Direct Link**: This section contains the complete content from the official SAP ABAP documentation page.


  

* * *

AS ABAP Release 754, ©Copyright 2019 SAP SE. All rights reserved.

[ABAP Keyword Documentation](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenabap.htm) →  [ABAP - Dictionary](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenabap_dictionary.htm) →  [ABAP CDS in ABAP Dictionary](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abencds.htm) →  [ABAP CDS - Data Definitions](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenddic_cds_entities.htm) →  [ABAP CDS - DDL for Data Definitions](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abencds_f1_ddl_syntax.htm) →  [ABAP CDS - parameter](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abencds_f1_param.htm) → 

ABAP CDS - parameter\_annot

Syntax

... @[annotation](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abencds_annotations_syntax.htm) ...
... @<[annotation](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abencds_annotations_syntax.htm) ...

Effect

Specifies an [annotation](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abencds_annotation_glosry.htm "Glossary Entry") [annotation](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abencds_annotations_syntax.htm) as a parameter annotation in the definition of an [CDS parameter](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abencds_parameter_glosry.htm "Glossary Entry") [parameter](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abencds_f1_param.htm) of one of the following:

-   [CDS view](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abencds_view_glosry.htm "Glossary Entry")

-   [CDS table function](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abencds_table_function_glosry.htm "Glossary Entry")

-   [A CDS hierarchy](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abencds_hierarchy_glosry.htm "Glossary Entry")

-   [An abstract CSD entity](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenabstract_entity_glosry.htm "Glossary Entry")

Parameter annotations can be specified before and after the parameter: The annotation should be defined as a CDS object in a [CDS annotation definition](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abencds_anno_definition_glosry.htm "Glossary Entry") and the annotation definition annotation [@Scope](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abencds_f1_define_anno_annos.htm) should be specified here using the value #PARAMETER.

-   In front of the parameter, the character @ must be placed before the name annotation of the annotation.

-   Following the parameter, the characters @< must be placed before the name annotation of the annotation.

The following tables show the possible [ABAP annotations](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abencore_annotation_glosry.htm "Glossary Entry") that can be specified and their meanings. The ABAP annotations are evaluated by the ABAP runtime environment for every CDS entity. Annotations with other identifiers are usually [framework-specific annotations](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abencds_annotations_frmwrk.htm). These are not evaluated by the ABAP runtime environment but by other SAP frameworks instead.

-   [EndUserText Annotations](#abencds-f1-parameter-annotations-1--------environment-annotations---@ITOC@@ABENCDS_F1_PARAMETER_ANNOTATIONS_2)

The first column of the table displays the (possibly structured) name annotation of an ABAP annotation and the second column displays its meaning. The third column shows the possible [annotation values](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenannotation_value_glosry.htm "Glossary Entry"). The fourth column shows the value set implicitly for the annotation value if the annotation is not used explicitly. The fifth column displays the default value set implicitly for value in accordance with the [annotation definition](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abencds_anno_definition_glosry.htm "Glossary Entry") if the annotation is specified without a value. If nothing is specified for the annotation value, the annotation should be specified without a value.

EndUserText Annotations

Translatable texts of the parameter.

Annotation

Meaning

Annotation Values

Default Value if Not Used

Default Value if Used Without Value

EndUserText.label

Translatable short text of the parameter

Character string with maximum 60 characters

\-

\-

EndUserText.quickInfo

Translatable tooltip of the parameter

String

\-

\-

Note

ABAP annotations introduced using EndUserText are used to define translatable semantic texts for a [CDS object](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abencds_object_glosry.htm "Glossary Entry"). The value of an annotation like this is saved in special tables that have a language key and that are translatable. The value specified in the source code should consist of text in the original language of the CDS source code and is translated into the required languages. The methods of the class CL\_DD\_DDL\_ANNOTATION\_SERVICE read these texts as specified by an input parameter for the language. If no language is passed to the input parameter, the [text environment language](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abentext_env_langu_glosry.htm "Glossary Entry") is used as the default. If no text is found for the language, the [secondary language](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abensecondary_language_glosry.htm "Glossary Entry") in AS ABAP is used.

Environment Annotations

Defines parameter passing to a CDS view.

Annotation

Meaning

Annotation Values

Default Value if Not Used

Default Value if Used Without Value

Environment.systemField

Assigns an [ABAP system field](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abensystem_field_glosry.htm "Glossary Entry") to the input parameter for implicit parameter passing in ABAP SQL.

#CLIENT:
[sy-mandt](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abensystem_fields.htm)
#SYSTEM\_DATE:
[sy-datum](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abensystem_fields.htm)
#SYSTEM\_TIME:
[sy-uzeit](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abensystem_fields.htm)
#SYSTEM\_LANGUAGE:
[sy-langu](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abensystem_fields.htm)
#USER:
[sy-uname](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abensystem_fields.htm)

\-

\-

An input parameter can be annotated strictly once with the annotation Environment.systemField. If the CDS entity is used as a [data source](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abapselect_data_source.htm) of a [SELECT](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abapselect.htm) statement in [ABAP SQL](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenopen_sql_glosry.htm "Glossary Entry"), this assignment has the following consequences:

-   No explicit actual parameter can be assigned to an input parameter to which the system field sy-mandt was assigned using #CLIENT. ABAP SQL always passes (implicitly) the ID of the current [client](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenclient_glosry.htm "Glossary Entry") in accordance with the nominal value of sy-mandt or from the clients specified using [USING CLIENT](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abapselect_client.htm). The obsolete addition [CLIENT SPECIFIED](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abapselect_client_obsolete.htm) cannot be specified when a CDS entity of this type is accessed.

-   An explicit actual parameter does not need to be assigned to an input parameter to which a system field other than sy-mandt is assigned using #SYSTEM\_.... If no explicit actual parameter is specified, ABAP SQL passes the nominal value of the assigned system field implicitly.

Any other values for value are ignored using an exception. Instead of the value #USER, the value #APPLICATION\_USER can be specified too. This is, however, only offered for reasons of downward compatibility.

Notes

-   The annotation @Environment.systemField is ignored in parameter passing to the CDS entity in other CDS entities. Explicit actual parameters must be specified here, for example input parameters from the current entity or even [session variables](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abencds_f1_session_variable.htm).

-   The value #CLIENT of the annotation @Environment.systemField is particularly significant for [client-specific CDS table functions](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abencds_func_client_handling.htm). If an input parameter is annotated accordingly, it is given the current client ID implicitly by the ABAP SQL statement [SELECT](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abapselect.htm) and can be used to restrict the results set in the platform-dependent implementation of the function. @Environment.systemField: #CLIENT cannot be specified in the case of [cross-client CDS table functions](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abencds_func_client_handling.htm).

Example

The following CDS view associates all input parameters with ABAP system fields and the SELECT list consists only of the input parameters. The ABAP program DEMO\_CDS\_SYSTEM\_FIELDS accesses the CDS view by specifying parameters in full implicitly and explicitly and produces both results.

@AbapCatalog.sqlViewName: 'DEMO\_CDS\_SYST'
@AccessControl.authorizationCheck: #NOT\_REQUIRED
define view demo\_cds\_system\_fields
with parameters
@Environment.systemField : #CLIENT
p\_mandt : syst\_mandt,
@Environment.systemField : #SYSTEM\_DATE
p\_datum : syst\_datum,
@Environment.systemField : #SYSTEM\_TIME
p\_uzeit : syst\_uzeit,
p\_langu : syst\_langu @<Environment.systemField : #SYSTEM\_LANGUAGE,
p\_uname : syst\_uname @<Environment.systemField : #USER
as select from
demo\_expressions
{
:p\_mandt as client,
:p\_datum as datum,
:p\_uzeit as uzeit,
:p\_langu as langu,
:p\_uname as uname
}
where
id = '1';


---


## ABAP Keyword Documentation / ABAP - Dictionary / ABAP CDS in ABAP Dictionary / ABAP CDS - Data Definitions / ABAP CDS - DDL for Data Definitions / ABAP CDS - DEFINE VIEW / ABAP CDS - SELECT / ABAP CDS - SELECT, Operands and Expressions / ABAP CDS - cast_expr

**Files**: 2 | **Difficulty**: advanced

# ABAP Keyword Documentation / ABAP - Dictionary / ABAP CDS in ABAP Dictionary / ABAP CDS - Data Definitions / ABAP CDS - DDL for Data Definitions / ABAP CDS - parameter

Included pages: 2



**📖 Source**: [abencds_f1_parameter_annotations.htm](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abencds_f1_parameter_annotations.htm)

### abencds_f1_param.htm

> **📖 Official SAP Documentation**: [abencds_f1_param.htm](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abencds_f1_param.htm)
> **🔍 Direct Link**: This section contains the complete content from the official SAP ABAP documentation page.


  

* * *

AS ABAP Release 754, ©Copyright 2019 SAP SE. All rights reserved.

[ABAP Keyword Documentation](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenabap.htm) →  [ABAP - Dictionary](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenabap_dictionary.htm) →  [ABAP CDS in ABAP Dictionary](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abencds.htm) →  [ABAP CDS - Data Definitions](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenddic_cds_entities.htm) →  [ABAP CDS - DDL for Data Definitions](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abencds_f1_ddl_syntax.htm) → 

ABAP CDS - parameter

Syntax

... *\[*[@parameter\_annot1](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abencds_f1_parameter_annotations.htm)*\]*
    *\[*[@parameter\_annot2](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abencds_f1_parameter_annotations.htm)*\]*
    ...
    pname : [typing](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abencds_typing.htm)
    *\[*[@<parameter\_annot1](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abencds_f1_parameter_annotations.htm)*\]*
    *\[*[@<parameter\_annot2](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abencds_f1_parameter_annotations.htm)*\]*
    ...

Addition:

[... @parameter\_annot ... @<parameter\_annot](#!ABAP_ONE_ADD@1@)

Effect

Defines a CDS parameter called pname in one of the following:

-   [Parameter list](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abencds_f1_parameter_list.htm) of a [CDS view](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abencds_view_glosry.htm "Glossary Entry")

-   [Parameter list](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abencds_f1_func_parameter_list.htm) of a [CDS table function](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abencds_table_function_glosry.htm "Glossary Entry")

-   [Parameter list](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abencds_f1_hiera_parameter_list.htm) of a [CDS hierarchy](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abencds_hierarchy_glosry.htm "Glossary Entry")

-   [Parameter list](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abencds_f1_entity_parameter_list.htm) of an [abstract CDS entity](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenabstract_entity_glosry.htm "Glossary Entry")

The name pname must comply with the naming rules for [names](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abencds_general_syntax_rules.htm). Furthermore, pname cannot contain any slash (/) characters and cannot be a reserved name in ABAP Dictionary. The name pname must be unique and be located in the namespace of the elements and [published](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abencds_f1_select_list_association.htm) CDS associations of the current CDS entity. Also, the reserved name connection cannot be used in table functions. The reserved names that cannot be used are specified in the database table TRESE. They are not case-sensitive. The blanks in the comma-separated list are ignored and can be omitted. Each parameter must be typed with an elementary data type [typing](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abencds_typing.htm).

A non-abstract CDS entity for which CDS parameters are defined as input parameters can be used as

-   A [data source](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abencds_f1_data_source.htm) or in a [path expression](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abencds_f1_path_expression.htm) of a different CDS view

-   A [data source](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abapselect_data_source.htm) of a [SELECT](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abapselect.htm) statement from ABAP SQL in ABAP

In these cases, each input parameter must be assigned a suitable actual parameter whose value is then used in the operand positions in which the parameter is specified. The actual parameters are assigned using a parenthesized comma-separated list as follows:

[... cds\_entity( pname1 : act1, pname2 : act2, ...) ...](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abencds_f1_select_parameters.htm),

This list must be specified directly after the name of the view when using an entity with parameters (both within the CDS DDL in ABAP CDS and in ABAP SQL). In ABAP SQL, an equals sign (\=) is used instead of a colon (:).

Note

It is not currently possible to define optional input parameters or replacement parameters for input parameters. The annotation [@Environment.systemField](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abencds_f1_parameter_annotations.htm) can be used, however, to make ABAP SQL pass ABAP system fields to an input parameter implicitly.

Addition

... @parameter\_annot ... @<parameter\_annot

Effect

Specifies annotations for the parameter. The annotations can be specified before the parameter using [@parameter\_annot](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abencds_f1_parameter_annotations.htm) or after the parameter using [@parameter\_annot](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abencds_f1_parameter_annotations.htm). The latter is possible only for [CDS views](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abencds_view_glosry.htm "Glossary Entry"), [CDS table functions](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abencds_table_function_glosry.htm "Glossary Entry"), and [CDS hierarchies](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abencds_hierarchy_glosry.htm "Glossary Entry") and not for [abstract CDS entities](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenabstract_entity_glosry.htm "Glossary Entry").

Continue
[ABAP CDS - parameter\_annot](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abencds_f1_parameter_annotations.htm)



**📖 Source**: [abencds_f1_param.htm](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abencds_f1_param.htm)

### abencds_f1_parameter_annotations.htm

> **📖 Official SAP Documentation**: [abencds_f1_parameter_annotations.htm](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abencds_f1_parameter_annotations.htm)
> **🔍 Direct Link**: This section contains the complete content from the official SAP ABAP documentation page.


  

* * *

AS ABAP Release 754, ©Copyright 2019 SAP SE. All rights reserved.

[ABAP Keyword Documentation](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenabap.htm) →  [ABAP - Dictionary](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenabap_dictionary.htm) →  [ABAP CDS in ABAP Dictionary](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abencds.htm) →  [ABAP CDS - Data Definitions](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenddic_cds_entities.htm) →  [ABAP CDS - DDL for Data Definitions](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abencds_f1_ddl_syntax.htm) →  [ABAP CDS - parameter](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abencds_f1_param.htm) → 

ABAP CDS - parameter\_annot

Syntax

... @[annotation](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abencds_annotations_syntax.htm) ...
... @<[annotation](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abencds_annotations_syntax.htm) ...

Effect

Specifies an [annotation](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abencds_annotation_glosry.htm "Glossary Entry") [annotation](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abencds_annotations_syntax.htm) as a parameter annotation in the definition of an [CDS parameter](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abencds_parameter_glosry.htm "Glossary Entry") [parameter](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abencds_f1_param.htm) of one of the following:

-   [CDS view](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abencds_view_glosry.htm "Glossary Entry")

-   [CDS table function](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abencds_table_function_glosry.htm "Glossary Entry")

-   [A CDS hierarchy](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abencds_hierarchy_glosry.htm "Glossary Entry")

-   [An abstract CSD entity](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenabstract_entity_glosry.htm "Glossary Entry")

Parameter annotations can be specified before and after the parameter: The annotation should be defined as a CDS object in a [CDS annotation definition](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abencds_anno_definition_glosry.htm "Glossary Entry") and the annotation definition annotation [@Scope](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abencds_f1_define_anno_annos.htm) should be specified here using the value #PARAMETER.

-   In front of the parameter, the character @ must be placed before the name annotation of the annotation.

-   Following the parameter, the characters @< must be placed before the name annotation of the annotation.

The following tables show the possible [ABAP annotations](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abencore_annotation_glosry.htm "Glossary Entry") that can be specified and their meanings. The ABAP annotations are evaluated by the ABAP runtime environment for every CDS entity. Annotations with other identifiers are usually [framework-specific annotations](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abencds_annotations_frmwrk.htm). These are not evaluated by the ABAP runtime environment but by other SAP frameworks instead.

-   [EndUserText Annotations](#abencds-f1-parameter-annotations-1--------environment-annotations---@ITOC@@ABENCDS_F1_PARAMETER_ANNOTATIONS_2)

The first column of the table displays the (possibly structured) name annotation of an ABAP annotation and the second column displays its meaning. The third column shows the possible [annotation values](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenannotation_value_glosry.htm "Glossary Entry"). The fourth column shows the value set implicitly for the annotation value if the annotation is not used explicitly. The fifth column displays the default value set implicitly for value in accordance with the [annotation definition](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abencds_anno_definition_glosry.htm "Glossary Entry") if the annotation is specified without a value. If nothing is specified for the annotation value, the annotation should be specified without a value.

EndUserText Annotations

Translatable texts of the parameter.

Annotation

Meaning

Annotation Values

Default Value if Not Used

Default Value if Used Without Value

EndUserText.label

Translatable short text of the parameter

Character string with maximum 60 characters

\-

\-

EndUserText.quickInfo

Translatable tooltip of the parameter

String

\-

\-

Note

ABAP annotations introduced using EndUserText are used to define translatable semantic texts for a [CDS object](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abencds_object_glosry.htm "Glossary Entry"). The value of an annotation like this is saved in special tables that have a language key and that are translatable. The value specified in the source code should consist of text in the original language of the CDS source code and is translated into the required languages. The methods of the class CL\_DD\_DDL\_ANNOTATION\_SERVICE read these texts as specified by an input parameter for the language. If no language is passed to the input parameter, the [text environment language](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abentext_env_langu_glosry.htm "Glossary Entry") is used as the default. If no text is found for the language, the [secondary language](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abensecondary_language_glosry.htm "Glossary Entry") in AS ABAP is used.

Environment Annotations

Defines parameter passing to a CDS view.

Annotation

Meaning

Annotation Values

Default Value if Not Used

Default Value if Used Without Value

Environment.systemField

Assigns an [ABAP system field](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abensystem_field_glosry.htm "Glossary Entry") to the input parameter for implicit parameter passing in ABAP SQL.

#CLIENT:
[sy-mandt](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abensystem_fields.htm)
#SYSTEM\_DATE:
[sy-datum](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abensystem_fields.htm)
#SYSTEM\_TIME:
[sy-uzeit](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abensystem_fields.htm)
#SYSTEM\_LANGUAGE:
[sy-langu](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abensystem_fields.htm)
#USER:
[sy-uname](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abensystem_fields.htm)

\-

\-

An input parameter can be annotated strictly once with the annotation Environment.systemField. If the CDS entity is used as a [data source](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abapselect_data_source.htm) of a [SELECT](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abapselect.htm) statement in [ABAP SQL](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenopen_sql_glosry.htm "Glossary Entry"), this assignment has the following consequences:

-   No explicit actual parameter can be assigned to an input parameter to which the system field sy-mandt was assigned using #CLIENT. ABAP SQL always passes (implicitly) the ID of the current [client](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenclient_glosry.htm "Glossary Entry") in accordance with the nominal value of sy-mandt or from the clients specified using [USING CLIENT](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abapselect_client.htm). The obsolete addition [CLIENT SPECIFIED](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abapselect_client_obsolete.htm) cannot be specified when a CDS entity of this type is accessed.

-   An explicit actual parameter does not need to be assigned to an input parameter to which a system field other than sy-mandt is assigned using #SYSTEM\_.... If no explicit actual parameter is specified, ABAP SQL passes the nominal value of the assigned system field implicitly.

Any other values for value are ignored using an exception. Instead of the value #USER, the value #APPLICATION\_USER can be specified too. This is, however, only offered for reasons of downward compatibility.

Notes

-   The annotation @Environment.systemField is ignored in parameter passing to the CDS entity in other CDS entities. Explicit actual parameters must be specified here, for example input parameters from the current entity or even [session variables](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abencds_f1_session_variable.htm).

-   The value #CLIENT of the annotation @Environment.systemField is particularly significant for [client-specific CDS table functions](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abencds_func_client_handling.htm). If an input parameter is annotated accordingly, it is given the current client ID implicitly by the ABAP SQL statement [SELECT](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abapselect.htm) and can be used to restrict the results set in the platform-dependent implementation of the function. @Environment.systemField: #CLIENT cannot be specified in the case of [cross-client CDS table functions](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abencds_func_client_handling.htm).

Example

The following CDS view associates all input parameters with ABAP system fields and the SELECT list consists only of the input parameters. The ABAP program DEMO\_CDS\_SYSTEM\_FIELDS accesses the CDS view by specifying parameters in full implicitly and explicitly and produces both results.

@AbapCatalog.sqlViewName: 'DEMO\_CDS\_SYST'
@AccessControl.authorizationCheck: #NOT\_REQUIRED
define view demo\_cds\_system\_fields
with parameters
@Environment.systemField : #CLIENT
p\_mandt : syst\_mandt,
@Environment.systemField : #SYSTEM\_DATE
p\_datum : syst\_datum,
@Environment.systemField : #SYSTEM\_TIME
p\_uzeit : syst\_uzeit,
p\_langu : syst\_langu @<Environment.systemField : #SYSTEM\_LANGUAGE,
p\_uname : syst\_uname @<Environment.systemField : #USER
as select from
demo\_expressions
{
:p\_mandt as client,
:p\_datum as datum,
:p\_uzeit as uzeit,
:p\_langu as langu,
:p\_uname as uname
}
where
id = '1';


---


## ABAP Keyword Documentation / ABAP - Dictionary / ABAP CDS in ABAP Dictionary / ABAP CDS - Data Definitions / ABAP CDS - DDL for Data Definitions / ABAP CDS - DEFINE VIEW / ABAP CDS - SELECT / ABAP CDS - SELECT, Operands and Expressions / ABAP CDS - cond_expr

**Files**: 16 | **Difficulty**: advanced

# ABAP Keyword Documentation / ABAP - Dictionary / ABAP CDS in ABAP Dictionary / ABAP CDS - Data Definitions / ABAP CDS - DDL for Data Definitions / ABAP CDS - parameter

Included pages: 2



**📖 Source**: [abencds_f1_parameter_annotations.htm](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abencds_f1_parameter_annotations.htm)

### abencds_f1_param.htm

> **📖 Official SAP Documentation**: [abencds_f1_param.htm](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abencds_f1_param.htm)
> **🔍 Direct Link**: This section contains the complete content from the official SAP ABAP documentation page.


  

* * *

AS ABAP Release 754, ©Copyright 2019 SAP SE. All rights reserved.

[ABAP Keyword Documentation](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenabap.htm) →  [ABAP - Dictionary](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenabap_dictionary.htm) →  [ABAP CDS in ABAP Dictionary](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abencds.htm) →  [ABAP CDS - Data Definitions](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenddic_cds_entities.htm) →  [ABAP CDS - DDL for Data Definitions](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abencds_f1_ddl_syntax.htm) → 

ABAP CDS - parameter

Syntax

... *\[*[@parameter\_annot1](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abencds_f1_parameter_annotations.htm)*\]*
    *\[*[@parameter\_annot2](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abencds_f1_parameter_annotations.htm)*\]*
    ...
    pname : [typing](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abencds_typing.htm)
    *\[*[@<parameter\_annot1](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abencds_f1_parameter_annotations.htm)*\]*
    *\[*[@<parameter\_annot2](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abencds_f1_parameter_annotations.htm)*\]*
    ...

Addition:

[... @parameter\_annot ... @<parameter\_annot](#!ABAP_ONE_ADD@1@)

Effect

Defines a CDS parameter called pname in one of the following:

-   [Parameter list](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abencds_f1_parameter_list.htm) of a [CDS view](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abencds_view_glosry.htm "Glossary Entry")

-   [Parameter list](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abencds_f1_func_parameter_list.htm) of a [CDS table function](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abencds_table_function_glosry.htm "Glossary Entry")

-   [Parameter list](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abencds_f1_hiera_parameter_list.htm) of a [CDS hierarchy](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abencds_hierarchy_glosry.htm "Glossary Entry")

-   [Parameter list](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abencds_f1_entity_parameter_list.htm) of an [abstract CDS entity](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenabstract_entity_glosry.htm "Glossary Entry")

The name pname must comply with the naming rules for [names](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abencds_general_syntax_rules.htm). Furthermore, pname cannot contain any slash (/) characters and cannot be a reserved name in ABAP Dictionary. The name pname must be unique and be located in the namespace of the elements and [published](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abencds_f1_select_list_association.htm) CDS associations of the current CDS entity. Also, the reserved name connection cannot be used in table functions. The reserved names that cannot be used are specified in the database table TRESE. They are not case-sensitive. The blanks in the comma-separated list are ignored and can be omitted. Each parameter must be typed with an elementary data type [typing](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abencds_typing.htm).

A non-abstract CDS entity for which CDS parameters are defined as input parameters can be used as

-   A [data source](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abencds_f1_data_source.htm) or in a [path expression](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abencds_f1_path_expression.htm) of a different CDS view

-   A [data source](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abapselect_data_source.htm) of a [SELECT](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abapselect.htm) statement from ABAP SQL in ABAP

In these cases, each input parameter must be assigned a suitable actual parameter whose value is then used in the operand positions in which the parameter is specified. The actual parameters are assigned using a parenthesized comma-separated list as follows:

[... cds\_entity( pname1 : act1, pname2 : act2, ...) ...](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abencds_f1_select_parameters.htm),

This list must be specified directly after the name of the view when using an entity with parameters (both within the CDS DDL in ABAP CDS and in ABAP SQL). In ABAP SQL, an equals sign (\=) is used instead of a colon (:).

Note

It is not currently possible to define optional input parameters or replacement parameters for input parameters. The annotation [@Environment.systemField](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abencds_f1_parameter_annotations.htm) can be used, however, to make ABAP SQL pass ABAP system fields to an input parameter implicitly.

Addition

... @parameter\_annot ... @<parameter\_annot

Effect

Specifies annotations for the parameter. The annotations can be specified before the parameter using [@parameter\_annot](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abencds_f1_parameter_annotations.htm) or after the parameter using [@parameter\_annot](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abencds_f1_parameter_annotations.htm). The latter is possible only for [CDS views](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abencds_view_glosry.htm "Glossary Entry"), [CDS table functions](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abencds_table_function_glosry.htm "Glossary Entry"), and [CDS hierarchies](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abencds_hierarchy_glosry.htm "Glossary Entry") and not for [abstract CDS entities](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenabstract_entity_glosry.htm "Glossary Entry").

Continue
[ABAP CDS - parameter\_annot](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abencds_f1_parameter_annotations.htm)



**📖 Source**: [abencds_f1_param.htm](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abencds_f1_param.htm)

### abencds_f1_parameter_annotations.htm

> **📖 Official SAP Documentation**: [abencds_f1_parameter_annotations.htm](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abencds_f1_parameter_annotations.htm)
> **🔍 Direct Link**: This section contains the complete content from the official SAP ABAP documentation page.


  

* * *

AS ABAP Release 754, ©Copyright 2019 SAP SE. All rights reserved.

[ABAP Keyword Documentation](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenabap.htm) →  [ABAP - Dictionary](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenabap_dictionary.htm) →  [ABAP CDS in ABAP Dictionary](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abencds.htm) →  [ABAP CDS - Data Definitions](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenddic_cds_entities.htm) →  [ABAP CDS - DDL for Data Definitions](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abencds_f1_ddl_syntax.htm) →  [ABAP CDS - parameter](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abencds_f1_param.htm) → 

ABAP CDS - parameter\_annot

Syntax

... @[annotation](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abencds_annotations_syntax.htm) ...
... @<[annotation](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abencds_annotations_syntax.htm) ...

Effect

Specifies an [annotation](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abencds_annotation_glosry.htm "Glossary Entry") [annotation](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abencds_annotations_syntax.htm) as a parameter annotation in the definition of an [CDS parameter](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abencds_parameter_glosry.htm "Glossary Entry") [parameter](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abencds_f1_param.htm) of one of the following:

-   [CDS view](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abencds_view_glosry.htm "Glossary Entry")

-   [CDS table function](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abencds_table_function_glosry.htm "Glossary Entry")

-   [A CDS hierarchy](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abencds_hierarchy_glosry.htm "Glossary Entry")

-   [An abstract CSD entity](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenabstract_entity_glosry.htm "Glossary Entry")

Parameter annotations can be specified before and after the parameter: The annotation should be defined as a CDS object in a [CDS annotation definition](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abencds_anno_definition_glosry.htm "Glossary Entry") and the annotation definition annotation [@Scope](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abencds_f1_define_anno_annos.htm) should be specified here using the value #PARAMETER.

-   In front of the parameter, the character @ must be placed before the name annotation of the annotation.

-   Following the parameter, the characters @< must be placed before the name annotation of the annotation.

The following tables show the possible [ABAP annotations](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abencore_annotation_glosry.htm "Glossary Entry") that can be specified and their meanings. The ABAP annotations are evaluated by the ABAP runtime environment for every CDS entity. Annotations with other identifiers are usually [framework-specific annotations](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abencds_annotations_frmwrk.htm). These are not evaluated by the ABAP runtime environment but by other SAP frameworks instead.

-   [EndUserText Annotations](#abencds-f1-parameter-annotations-1--------environment-annotations---@ITOC@@ABENCDS_F1_PARAMETER_ANNOTATIONS_2)

The first column of the table displays the (possibly structured) name annotation of an ABAP annotation and the second column displays its meaning. The third column shows the possible [annotation values](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenannotation_value_glosry.htm "Glossary Entry"). The fourth column shows the value set implicitly for the annotation value if the annotation is not used explicitly. The fifth column displays the default value set implicitly for value in accordance with the [annotation definition](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abencds_anno_definition_glosry.htm "Glossary Entry") if the annotation is specified without a value. If nothing is specified for the annotation value, the annotation should be specified without a value.

EndUserText Annotations

Translatable texts of the parameter.

Annotation

Meaning

Annotation Values

Default Value if Not Used

Default Value if Used Without Value

EndUserText.label

Translatable short text of the parameter

Character string with maximum 60 characters

\-

\-

EndUserText.quickInfo

Translatable tooltip of the parameter

String

\-

\-

Note

ABAP annotations introduced using EndUserText are used to define translatable semantic texts for a [CDS object](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abencds_object_glosry.htm "Glossary Entry"). The value of an annotation like this is saved in special tables that have a language key and that are translatable. The value specified in the source code should consist of text in the original language of the CDS source code and is translated into the required languages. The methods of the class CL\_DD\_DDL\_ANNOTATION\_SERVICE read these texts as specified by an input parameter for the language. If no language is passed to the input parameter, the [text environment language](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abentext_env_langu_glosry.htm "Glossary Entry") is used as the default. If no text is found for the language, the [secondary language](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abensecondary_language_glosry.htm "Glossary Entry") in AS ABAP is used.

Environment Annotations

Defines parameter passing to a CDS view.

Annotation

Meaning

Annotation Values

Default Value if Not Used

Default Value if Used Without Value

Environment.systemField

Assigns an [ABAP system field](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abensystem_field_glosry.htm "Glossary Entry") to the input parameter for implicit parameter passing in ABAP SQL.

#CLIENT:
[sy-mandt](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abensystem_fields.htm)
#SYSTEM\_DATE:
[sy-datum](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abensystem_fields.htm)
#SYSTEM\_TIME:
[sy-uzeit](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abensystem_fields.htm)
#SYSTEM\_LANGUAGE:
[sy-langu](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abensystem_fields.htm)
#USER:
[sy-uname](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abensystem_fields.htm)

\-

\-

An input parameter can be annotated strictly once with the annotation Environment.systemField. If the CDS entity is used as a [data source](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abapselect_data_source.htm) of a [SELECT](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abapselect.htm) statement in [ABAP SQL](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenopen_sql_glosry.htm "Glossary Entry"), this assignment has the following consequences:

-   No explicit actual parameter can be assigned to an input parameter to which the system field sy-mandt was assigned using #CLIENT. ABAP SQL always passes (implicitly) the ID of the current [client](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenclient_glosry.htm "Glossary Entry") in accordance with the nominal value of sy-mandt or from the clients specified using [USING CLIENT](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abapselect_client.htm). The obsolete addition [CLIENT SPECIFIED](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abapselect_client_obsolete.htm) cannot be specified when a CDS entity of this type is accessed.

-   An explicit actual parameter does not need to be assigned to an input parameter to which a system field other than sy-mandt is assigned using #SYSTEM\_.... If no explicit actual parameter is specified, ABAP SQL passes the nominal value of the assigned system field implicitly.

Any other values for value are ignored using an exception. Instead of the value #USER, the value #APPLICATION\_USER can be specified too. This is, however, only offered for reasons of downward compatibility.

Notes

-   The annotation @Environment.systemField is ignored in parameter passing to the CDS entity in other CDS entities. Explicit actual parameters must be specified here, for example input parameters from the current entity or even [session variables](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abencds_f1_session_variable.htm).

-   The value #CLIENT of the annotation @Environment.systemField is particularly significant for [client-specific CDS table functions](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abencds_func_client_handling.htm). If an input parameter is annotated accordingly, it is given the current client ID implicitly by the ABAP SQL statement [SELECT](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abapselect.htm) and can be used to restrict the results set in the platform-dependent implementation of the function. @Environment.systemField: #CLIENT cannot be specified in the case of [cross-client CDS table functions](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abencds_func_client_handling.htm).

Example

The following CDS view associates all input parameters with ABAP system fields and the SELECT list consists only of the input parameters. The ABAP program DEMO\_CDS\_SYSTEM\_FIELDS accesses the CDS view by specifying parameters in full implicitly and explicitly and produces both results.

@AbapCatalog.sqlViewName: 'DEMO\_CDS\_SYST'
@AccessControl.authorizationCheck: #NOT\_REQUIRED
define view demo\_cds\_system\_fields
with parameters
@Environment.systemField : #CLIENT
p\_mandt : syst\_mandt,
@Environment.systemField : #SYSTEM\_DATE
p\_datum : syst\_datum,
@Environment.systemField : #SYSTEM\_TIME
p\_uzeit : syst\_uzeit,
p\_langu : syst\_langu @<Environment.systemField : #SYSTEM\_LANGUAGE,
p\_uname : syst\_uname @<Environment.systemField : #USER
as select from
demo\_expressions
{
:p\_mandt as client,
:p\_datum as datum,
:p\_uzeit as uzeit,
:p\_langu as langu,
:p\_uname as uname
}
where
id = '1';


---


## ABAP Keyword Documentation / ABAP - Dictionary / ABAP CDS in ABAP Dictionary / ABAP CDS - Data Definitions / ABAP CDS - DDL for Data Definitions / ABAP CDS - EXTEND VIEW

**Files**: 2 | **Difficulty**: advanced

# ABAP Keyword Documentation / ABAP - Dictionary / ABAP CDS in ABAP Dictionary / ABAP CDS - Data Definitions / ABAP CDS - DDL for Data Definitions / ABAP CDS - parameter

Included pages: 2



**📖 Source**: [abencds_f1_parameter_annotations.htm](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abencds_f1_parameter_annotations.htm)

### abencds_f1_param.htm

> **📖 Official SAP Documentation**: [abencds_f1_param.htm](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abencds_f1_param.htm)
> **🔍 Direct Link**: This section contains the complete content from the official SAP ABAP documentation page.


  

* * *

AS ABAP Release 754, ©Copyright 2019 SAP SE. All rights reserved.

[ABAP Keyword Documentation](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenabap.htm) →  [ABAP - Dictionary](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenabap_dictionary.htm) →  [ABAP CDS in ABAP Dictionary](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abencds.htm) →  [ABAP CDS - Data Definitions](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenddic_cds_entities.htm) →  [ABAP CDS - DDL for Data Definitions](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abencds_f1_ddl_syntax.htm) → 

ABAP CDS - parameter

Syntax

... *\[*[@parameter\_annot1](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abencds_f1_parameter_annotations.htm)*\]*
    *\[*[@parameter\_annot2](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abencds_f1_parameter_annotations.htm)*\]*
    ...
    pname : [typing](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abencds_typing.htm)
    *\[*[@<parameter\_annot1](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abencds_f1_parameter_annotations.htm)*\]*
    *\[*[@<parameter\_annot2](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abencds_f1_parameter_annotations.htm)*\]*
    ...

Addition:

[... @parameter\_annot ... @<parameter\_annot](#!ABAP_ONE_ADD@1@)

Effect

Defines a CDS parameter called pname in one of the following:

-   [Parameter list](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abencds_f1_parameter_list.htm) of a [CDS view](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abencds_view_glosry.htm "Glossary Entry")

-   [Parameter list](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abencds_f1_func_parameter_list.htm) of a [CDS table function](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abencds_table_function_glosry.htm "Glossary Entry")

-   [Parameter list](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abencds_f1_hiera_parameter_list.htm) of a [CDS hierarchy](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abencds_hierarchy_glosry.htm "Glossary Entry")

-   [Parameter list](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abencds_f1_entity_parameter_list.htm) of an [abstract CDS entity](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenabstract_entity_glosry.htm "Glossary Entry")

The name pname must comply with the naming rules for [names](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abencds_general_syntax_rules.htm). Furthermore, pname cannot contain any slash (/) characters and cannot be a reserved name in ABAP Dictionary. The name pname must be unique and be located in the namespace of the elements and [published](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abencds_f1_select_list_association.htm) CDS associations of the current CDS entity. Also, the reserved name connection cannot be used in table functions. The reserved names that cannot be used are specified in the database table TRESE. They are not case-sensitive. The blanks in the comma-separated list are ignored and can be omitted. Each parameter must be typed with an elementary data type [typing](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abencds_typing.htm).

A non-abstract CDS entity for which CDS parameters are defined as input parameters can be used as

-   A [data source](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abencds_f1_data_source.htm) or in a [path expression](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abencds_f1_path_expression.htm) of a different CDS view

-   A [data source](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abapselect_data_source.htm) of a [SELECT](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abapselect.htm) statement from ABAP SQL in ABAP

In these cases, each input parameter must be assigned a suitable actual parameter whose value is then used in the operand positions in which the parameter is specified. The actual parameters are assigned using a parenthesized comma-separated list as follows:

[... cds\_entity( pname1 : act1, pname2 : act2, ...) ...](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abencds_f1_select_parameters.htm),

This list must be specified directly after the name of the view when using an entity with parameters (both within the CDS DDL in ABAP CDS and in ABAP SQL). In ABAP SQL, an equals sign (\=) is used instead of a colon (:).

Note

It is not currently possible to define optional input parameters or replacement parameters for input parameters. The annotation [@Environment.systemField](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abencds_f1_parameter_annotations.htm) can be used, however, to make ABAP SQL pass ABAP system fields to an input parameter implicitly.

Addition

... @parameter\_annot ... @<parameter\_annot

Effect

Specifies annotations for the parameter. The annotations can be specified before the parameter using [@parameter\_annot](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abencds_f1_parameter_annotations.htm) or after the parameter using [@parameter\_annot](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abencds_f1_parameter_annotations.htm). The latter is possible only for [CDS views](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abencds_view_glosry.htm "Glossary Entry"), [CDS table functions](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abencds_table_function_glosry.htm "Glossary Entry"), and [CDS hierarchies](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abencds_hierarchy_glosry.htm "Glossary Entry") and not for [abstract CDS entities](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenabstract_entity_glosry.htm "Glossary Entry").

Continue
[ABAP CDS - parameter\_annot](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abencds_f1_parameter_annotations.htm)



**📖 Source**: [abencds_f1_param.htm](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abencds_f1_param.htm)

### abencds_f1_parameter_annotations.htm

> **📖 Official SAP Documentation**: [abencds_f1_parameter_annotations.htm](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abencds_f1_parameter_annotations.htm)
> **🔍 Direct Link**: This section contains the complete content from the official SAP ABAP documentation page.


  

* * *

AS ABAP Release 754, ©Copyright 2019 SAP SE. All rights reserved.

[ABAP Keyword Documentation](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenabap.htm) →  [ABAP - Dictionary](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenabap_dictionary.htm) →  [ABAP CDS in ABAP Dictionary](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abencds.htm) →  [ABAP CDS - Data Definitions](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenddic_cds_entities.htm) →  [ABAP CDS - DDL for Data Definitions](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abencds_f1_ddl_syntax.htm) →  [ABAP CDS - parameter](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abencds_f1_param.htm) → 

ABAP CDS - parameter\_annot

Syntax

... @[annotation](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abencds_annotations_syntax.htm) ...
... @<[annotation](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abencds_annotations_syntax.htm) ...

Effect

Specifies an [annotation](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abencds_annotation_glosry.htm "Glossary Entry") [annotation](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abencds_annotations_syntax.htm) as a parameter annotation in the definition of an [CDS parameter](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abencds_parameter_glosry.htm "Glossary Entry") [parameter](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abencds_f1_param.htm) of one of the following:

-   [CDS view](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abencds_view_glosry.htm "Glossary Entry")

-   [CDS table function](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abencds_table_function_glosry.htm "Glossary Entry")

-   [A CDS hierarchy](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abencds_hierarchy_glosry.htm "Glossary Entry")

-   [An abstract CSD entity](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenabstract_entity_glosry.htm "Glossary Entry")

Parameter annotations can be specified before and after the parameter: The annotation should be defined as a CDS object in a [CDS annotation definition](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abencds_anno_definition_glosry.htm "Glossary Entry") and the annotation definition annotation [@Scope](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abencds_f1_define_anno_annos.htm) should be specified here using the value #PARAMETER.

-   In front of the parameter, the character @ must be placed before the name annotation of the annotation.

-   Following the parameter, the characters @< must be placed before the name annotation of the annotation.

The following tables show the possible [ABAP annotations](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abencore_annotation_glosry.htm "Glossary Entry") that can be specified and their meanings. The ABAP annotations are evaluated by the ABAP runtime environment for every CDS entity. Annotations with other identifiers are usually [framework-specific annotations](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abencds_annotations_frmwrk.htm). These are not evaluated by the ABAP runtime environment but by other SAP frameworks instead.

-   [EndUserText Annotations](#abencds-f1-parameter-annotations-1--------environment-annotations---@ITOC@@ABENCDS_F1_PARAMETER_ANNOTATIONS_2)

The first column of the table displays the (possibly structured) name annotation of an ABAP annotation and the second column displays its meaning. The third column shows the possible [annotation values](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenannotation_value_glosry.htm "Glossary Entry"). The fourth column shows the value set implicitly for the annotation value if the annotation is not used explicitly. The fifth column displays the default value set implicitly for value in accordance with the [annotation definition](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abencds_anno_definition_glosry.htm "Glossary Entry") if the annotation is specified without a value. If nothing is specified for the annotation value, the annotation should be specified without a value.

EndUserText Annotations

Translatable texts of the parameter.

Annotation

Meaning

Annotation Values

Default Value if Not Used

Default Value if Used Without Value

EndUserText.label

Translatable short text of the parameter

Character string with maximum 60 characters

\-

\-

EndUserText.quickInfo

Translatable tooltip of the parameter

String

\-

\-

Note

ABAP annotations introduced using EndUserText are used to define translatable semantic texts for a [CDS object](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abencds_object_glosry.htm "Glossary Entry"). The value of an annotation like this is saved in special tables that have a language key and that are translatable. The value specified in the source code should consist of text in the original language of the CDS source code and is translated into the required languages. The methods of the class CL\_DD\_DDL\_ANNOTATION\_SERVICE read these texts as specified by an input parameter for the language. If no language is passed to the input parameter, the [text environment language](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abentext_env_langu_glosry.htm "Glossary Entry") is used as the default. If no text is found for the language, the [secondary language](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abensecondary_language_glosry.htm "Glossary Entry") in AS ABAP is used.

Environment Annotations

Defines parameter passing to a CDS view.

Annotation

Meaning

Annotation Values

Default Value if Not Used

Default Value if Used Without Value

Environment.systemField

Assigns an [ABAP system field](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abensystem_field_glosry.htm "Glossary Entry") to the input parameter for implicit parameter passing in ABAP SQL.

#CLIENT:
[sy-mandt](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abensystem_fields.htm)
#SYSTEM\_DATE:
[sy-datum](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abensystem_fields.htm)
#SYSTEM\_TIME:
[sy-uzeit](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abensystem_fields.htm)
#SYSTEM\_LANGUAGE:
[sy-langu](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abensystem_fields.htm)
#USER:
[sy-uname](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abensystem_fields.htm)

\-

\-

An input parameter can be annotated strictly once with the annotation Environment.systemField. If the CDS entity is used as a [data source](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abapselect_data_source.htm) of a [SELECT](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abapselect.htm) statement in [ABAP SQL](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenopen_sql_glosry.htm "Glossary Entry"), this assignment has the following consequences:

-   No explicit actual parameter can be assigned to an input parameter to which the system field sy-mandt was assigned using #CLIENT. ABAP SQL always passes (implicitly) the ID of the current [client](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenclient_glosry.htm "Glossary Entry") in accordance with the nominal value of sy-mandt or from the clients specified using [USING CLIENT](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abapselect_client.htm). The obsolete addition [CLIENT SPECIFIED](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abapselect_client_obsolete.htm) cannot be specified when a CDS entity of this type is accessed.

-   An explicit actual parameter does not need to be assigned to an input parameter to which a system field other than sy-mandt is assigned using #SYSTEM\_.... If no explicit actual parameter is specified, ABAP SQL passes the nominal value of the assigned system field implicitly.

Any other values for value are ignored using an exception. Instead of the value #USER, the value #APPLICATION\_USER can be specified too. This is, however, only offered for reasons of downward compatibility.

Notes

-   The annotation @Environment.systemField is ignored in parameter passing to the CDS entity in other CDS entities. Explicit actual parameters must be specified here, for example input parameters from the current entity or even [session variables](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abencds_f1_session_variable.htm).

-   The value #CLIENT of the annotation @Environment.systemField is particularly significant for [client-specific CDS table functions](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abencds_func_client_handling.htm). If an input parameter is annotated accordingly, it is given the current client ID implicitly by the ABAP SQL statement [SELECT](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abapselect.htm) and can be used to restrict the results set in the platform-dependent implementation of the function. @Environment.systemField: #CLIENT cannot be specified in the case of [cross-client CDS table functions](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abencds_func_client_handling.htm).

Example

The following CDS view associates all input parameters with ABAP system fields and the SELECT list consists only of the input parameters. The ABAP program DEMO\_CDS\_SYSTEM\_FIELDS accesses the CDS view by specifying parameters in full implicitly and explicitly and produces both results.

@AbapCatalog.sqlViewName: 'DEMO\_CDS\_SYST'
@AccessControl.authorizationCheck: #NOT\_REQUIRED
define view demo\_cds\_system\_fields
with parameters
@Environment.systemField : #CLIENT
p\_mandt : syst\_mandt,
@Environment.systemField : #SYSTEM\_DATE
p\_datum : syst\_datum,
@Environment.systemField : #SYSTEM\_TIME
p\_uzeit : syst\_uzeit,
p\_langu : syst\_langu @<Environment.systemField : #SYSTEM\_LANGUAGE,
p\_uname : syst\_uname @<Environment.systemField : #USER
as select from
demo\_expressions
{
:p\_mandt as client,
:p\_datum as datum,
:p\_uzeit as uzeit,
:p\_langu as langu,
:p\_uname as uname
}
where
id = '1';


---


## ABAP Keyword Documentation / ABAP - Dictionary / ABAP CDS in ABAP Dictionary / ABAP CDS - Data Definitions / ABAP CDS - DDL for Data Definitions / ABAP CDS - DEFINE HIERARCHY / ABAP CDS - DEFINE HIERARCHY, element_list

**Files**: 4 | **Difficulty**: advanced

# ABAP Keyword Documentation / ABAP - Dictionary / ABAP CDS in ABAP Dictionary / ABAP CDS - Data Definitions / ABAP CDS - DDL for Data Definitions / ABAP CDS - parameter

Included pages: 2



**📖 Source**: [abencds_f1_parameter_annotations.htm](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abencds_f1_parameter_annotations.htm)

### abencds_f1_param.htm

> **📖 Official SAP Documentation**: [abencds_f1_param.htm](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abencds_f1_param.htm)
> **🔍 Direct Link**: This section contains the complete content from the official SAP ABAP documentation page.


  

* * *

AS ABAP Release 754, ©Copyright 2019 SAP SE. All rights reserved.

[ABAP Keyword Documentation](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenabap.htm) →  [ABAP - Dictionary](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenabap_dictionary.htm) →  [ABAP CDS in ABAP Dictionary](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abencds.htm) →  [ABAP CDS - Data Definitions](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenddic_cds_entities.htm) →  [ABAP CDS - DDL for Data Definitions](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abencds_f1_ddl_syntax.htm) → 

ABAP CDS - parameter

Syntax

... *\[*[@parameter\_annot1](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abencds_f1_parameter_annotations.htm)*\]*
    *\[*[@parameter\_annot2](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abencds_f1_parameter_annotations.htm)*\]*
    ...
    pname : [typing](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abencds_typing.htm)
    *\[*[@<parameter\_annot1](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abencds_f1_parameter_annotations.htm)*\]*
    *\[*[@<parameter\_annot2](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abencds_f1_parameter_annotations.htm)*\]*
    ...

Addition:

[... @parameter\_annot ... @<parameter\_annot](#!ABAP_ONE_ADD@1@)

Effect

Defines a CDS parameter called pname in one of the following:

-   [Parameter list](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abencds_f1_parameter_list.htm) of a [CDS view](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abencds_view_glosry.htm "Glossary Entry")

-   [Parameter list](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abencds_f1_func_parameter_list.htm) of a [CDS table function](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abencds_table_function_glosry.htm "Glossary Entry")

-   [Parameter list](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abencds_f1_hiera_parameter_list.htm) of a [CDS hierarchy](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abencds_hierarchy_glosry.htm "Glossary Entry")

-   [Parameter list](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abencds_f1_entity_parameter_list.htm) of an [abstract CDS entity](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenabstract_entity_glosry.htm "Glossary Entry")

The name pname must comply with the naming rules for [names](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abencds_general_syntax_rules.htm). Furthermore, pname cannot contain any slash (/) characters and cannot be a reserved name in ABAP Dictionary. The name pname must be unique and be located in the namespace of the elements and [published](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abencds_f1_select_list_association.htm) CDS associations of the current CDS entity. Also, the reserved name connection cannot be used in table functions. The reserved names that cannot be used are specified in the database table TRESE. They are not case-sensitive. The blanks in the comma-separated list are ignored and can be omitted. Each parameter must be typed with an elementary data type [typing](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abencds_typing.htm).

A non-abstract CDS entity for which CDS parameters are defined as input parameters can be used as

-   A [data source](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abencds_f1_data_source.htm) or in a [path expression](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abencds_f1_path_expression.htm) of a different CDS view

-   A [data source](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abapselect_data_source.htm) of a [SELECT](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abapselect.htm) statement from ABAP SQL in ABAP

In these cases, each input parameter must be assigned a suitable actual parameter whose value is then used in the operand positions in which the parameter is specified. The actual parameters are assigned using a parenthesized comma-separated list as follows:

[... cds\_entity( pname1 : act1, pname2 : act2, ...) ...](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abencds_f1_select_parameters.htm),

This list must be specified directly after the name of the view when using an entity with parameters (both within the CDS DDL in ABAP CDS and in ABAP SQL). In ABAP SQL, an equals sign (\=) is used instead of a colon (:).

Note

It is not currently possible to define optional input parameters or replacement parameters for input parameters. The annotation [@Environment.systemField](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abencds_f1_parameter_annotations.htm) can be used, however, to make ABAP SQL pass ABAP system fields to an input parameter implicitly.

Addition

... @parameter\_annot ... @<parameter\_annot

Effect

Specifies annotations for the parameter. The annotations can be specified before the parameter using [@parameter\_annot](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abencds_f1_parameter_annotations.htm) or after the parameter using [@parameter\_annot](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abencds_f1_parameter_annotations.htm). The latter is possible only for [CDS views](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abencds_view_glosry.htm "Glossary Entry"), [CDS table functions](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abencds_table_function_glosry.htm "Glossary Entry"), and [CDS hierarchies](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abencds_hierarchy_glosry.htm "Glossary Entry") and not for [abstract CDS entities](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenabstract_entity_glosry.htm "Glossary Entry").

Continue
[ABAP CDS - parameter\_annot](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abencds_f1_parameter_annotations.htm)



**📖 Source**: [abencds_f1_param.htm](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abencds_f1_param.htm)

### abencds_f1_parameter_annotations.htm

> **📖 Official SAP Documentation**: [abencds_f1_parameter_annotations.htm](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abencds_f1_parameter_annotations.htm)
> **🔍 Direct Link**: This section contains the complete content from the official SAP ABAP documentation page.


  

* * *

AS ABAP Release 754, ©Copyright 2019 SAP SE. All rights reserved.

[ABAP Keyword Documentation](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenabap.htm) →  [ABAP - Dictionary](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenabap_dictionary.htm) →  [ABAP CDS in ABAP Dictionary](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abencds.htm) →  [ABAP CDS - Data Definitions](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenddic_cds_entities.htm) →  [ABAP CDS - DDL for Data Definitions](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abencds_f1_ddl_syntax.htm) →  [ABAP CDS - parameter](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abencds_f1_param.htm) → 

ABAP CDS - parameter\_annot

Syntax

... @[annotation](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abencds_annotations_syntax.htm) ...
... @<[annotation](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abencds_annotations_syntax.htm) ...

Effect

Specifies an [annotation](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abencds_annotation_glosry.htm "Glossary Entry") [annotation](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abencds_annotations_syntax.htm) as a parameter annotation in the definition of an [CDS parameter](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abencds_parameter_glosry.htm "Glossary Entry") [parameter](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abencds_f1_param.htm) of one of the following:

-   [CDS view](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abencds_view_glosry.htm "Glossary Entry")

-   [CDS table function](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abencds_table_function_glosry.htm "Glossary Entry")

-   [A CDS hierarchy](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abencds_hierarchy_glosry.htm "Glossary Entry")

-   [An abstract CSD entity](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenabstract_entity_glosry.htm "Glossary Entry")

Parameter annotations can be specified before and after the parameter: The annotation should be defined as a CDS object in a [CDS annotation definition](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abencds_anno_definition_glosry.htm "Glossary Entry") and the annotation definition annotation [@Scope](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abencds_f1_define_anno_annos.htm) should be specified here using the value #PARAMETER.

-   In front of the parameter, the character @ must be placed before the name annotation of the annotation.

-   Following the parameter, the characters @< must be placed before the name annotation of the annotation.

The following tables show the possible [ABAP annotations](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abencore_annotation_glosry.htm "Glossary Entry") that can be specified and their meanings. The ABAP annotations are evaluated by the ABAP runtime environment for every CDS entity. Annotations with other identifiers are usually [framework-specific annotations](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abencds_annotations_frmwrk.htm). These are not evaluated by the ABAP runtime environment but by other SAP frameworks instead.

-   [EndUserText Annotations](#abencds-f1-parameter-annotations-1--------environment-annotations---@ITOC@@ABENCDS_F1_PARAMETER_ANNOTATIONS_2)

The first column of the table displays the (possibly structured) name annotation of an ABAP annotation and the second column displays its meaning. The third column shows the possible [annotation values](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenannotation_value_glosry.htm "Glossary Entry"). The fourth column shows the value set implicitly for the annotation value if the annotation is not used explicitly. The fifth column displays the default value set implicitly for value in accordance with the [annotation definition](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abencds_anno_definition_glosry.htm "Glossary Entry") if the annotation is specified without a value. If nothing is specified for the annotation value, the annotation should be specified without a value.

EndUserText Annotations

Translatable texts of the parameter.

Annotation

Meaning

Annotation Values

Default Value if Not Used

Default Value if Used Without Value

EndUserText.label

Translatable short text of the parameter

Character string with maximum 60 characters

\-

\-

EndUserText.quickInfo

Translatable tooltip of the parameter

String

\-

\-

Note

ABAP annotations introduced using EndUserText are used to define translatable semantic texts for a [CDS object](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abencds_object_glosry.htm "Glossary Entry"). The value of an annotation like this is saved in special tables that have a language key and that are translatable. The value specified in the source code should consist of text in the original language of the CDS source code and is translated into the required languages. The methods of the class CL\_DD\_DDL\_ANNOTATION\_SERVICE read these texts as specified by an input parameter for the language. If no language is passed to the input parameter, the [text environment language](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abentext_env_langu_glosry.htm "Glossary Entry") is used as the default. If no text is found for the language, the [secondary language](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abensecondary_language_glosry.htm "Glossary Entry") in AS ABAP is used.

Environment Annotations

Defines parameter passing to a CDS view.

Annotation

Meaning

Annotation Values

Default Value if Not Used

Default Value if Used Without Value

Environment.systemField

Assigns an [ABAP system field](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abensystem_field_glosry.htm "Glossary Entry") to the input parameter for implicit parameter passing in ABAP SQL.

#CLIENT:
[sy-mandt](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abensystem_fields.htm)
#SYSTEM\_DATE:
[sy-datum](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abensystem_fields.htm)
#SYSTEM\_TIME:
[sy-uzeit](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abensystem_fields.htm)
#SYSTEM\_LANGUAGE:
[sy-langu](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abensystem_fields.htm)
#USER:
[sy-uname](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abensystem_fields.htm)

\-

\-

An input parameter can be annotated strictly once with the annotation Environment.systemField. If the CDS entity is used as a [data source](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abapselect_data_source.htm) of a [SELECT](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abapselect.htm) statement in [ABAP SQL](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenopen_sql_glosry.htm "Glossary Entry"), this assignment has the following consequences:

-   No explicit actual parameter can be assigned to an input parameter to which the system field sy-mandt was assigned using #CLIENT. ABAP SQL always passes (implicitly) the ID of the current [client](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenclient_glosry.htm "Glossary Entry") in accordance with the nominal value of sy-mandt or from the clients specified using [USING CLIENT](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abapselect_client.htm). The obsolete addition [CLIENT SPECIFIED](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abapselect_client_obsolete.htm) cannot be specified when a CDS entity of this type is accessed.

-   An explicit actual parameter does not need to be assigned to an input parameter to which a system field other than sy-mandt is assigned using #SYSTEM\_.... If no explicit actual parameter is specified, ABAP SQL passes the nominal value of the assigned system field implicitly.

Any other values for value are ignored using an exception. Instead of the value #USER, the value #APPLICATION\_USER can be specified too. This is, however, only offered for reasons of downward compatibility.

Notes

-   The annotation @Environment.systemField is ignored in parameter passing to the CDS entity in other CDS entities. Explicit actual parameters must be specified here, for example input parameters from the current entity or even [session variables](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abencds_f1_session_variable.htm).

-   The value #CLIENT of the annotation @Environment.systemField is particularly significant for [client-specific CDS table functions](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abencds_func_client_handling.htm). If an input parameter is annotated accordingly, it is given the current client ID implicitly by the ABAP SQL statement [SELECT](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abapselect.htm) and can be used to restrict the results set in the platform-dependent implementation of the function. @Environment.systemField: #CLIENT cannot be specified in the case of [cross-client CDS table functions](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abencds_func_client_handling.htm).

Example

The following CDS view associates all input parameters with ABAP system fields and the SELECT list consists only of the input parameters. The ABAP program DEMO\_CDS\_SYSTEM\_FIELDS accesses the CDS view by specifying parameters in full implicitly and explicitly and produces both results.

@AbapCatalog.sqlViewName: 'DEMO\_CDS\_SYST'
@AccessControl.authorizationCheck: #NOT\_REQUIRED
define view demo\_cds\_system\_fields
with parameters
@Environment.systemField : #CLIENT
p\_mandt : syst\_mandt,
@Environment.systemField : #SYSTEM\_DATE
p\_datum : syst\_datum,
@Environment.systemField : #SYSTEM\_TIME
p\_uzeit : syst\_uzeit,
p\_langu : syst\_langu @<Environment.systemField : #SYSTEM\_LANGUAGE,
p\_uname : syst\_uname @<Environment.systemField : #USER
as select from
demo\_expressions
{
:p\_mandt as client,
:p\_datum as datum,
:p\_uzeit as uzeit,
:p\_langu as langu,
:p\_uname as uname
}
where
id = '1';


---


## ABAP Keyword Documentation / ABAP - Dictionary / ABAP CDS in ABAP Dictionary / ABAP CDS - Data Definitions / ABAP CDS - DDL for Data Definitions / ABAP CDS - DEFINE ABSTRACT ENTITY

**Files**: 8 | **Difficulty**: advanced

# ABAP Keyword Documentation / ABAP - Dictionary / ABAP CDS in ABAP Dictionary / ABAP CDS - Data Definitions / ABAP CDS - DDL for Data Definitions / ABAP CDS - parameter

Included pages: 2



**📖 Source**: [abencds_f1_parameter_annotations.htm](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abencds_f1_parameter_annotations.htm)

### abencds_f1_param.htm

> **📖 Official SAP Documentation**: [abencds_f1_param.htm](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abencds_f1_param.htm)
> **🔍 Direct Link**: This section contains the complete content from the official SAP ABAP documentation page.


  

* * *

AS ABAP Release 754, ©Copyright 2019 SAP SE. All rights reserved.

[ABAP Keyword Documentation](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenabap.htm) →  [ABAP - Dictionary](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenabap_dictionary.htm) →  [ABAP CDS in ABAP Dictionary](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abencds.htm) →  [ABAP CDS - Data Definitions](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenddic_cds_entities.htm) →  [ABAP CDS - DDL for Data Definitions](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abencds_f1_ddl_syntax.htm) → 

ABAP CDS - parameter

Syntax

... *\[*[@parameter\_annot1](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abencds_f1_parameter_annotations.htm)*\]*
    *\[*[@parameter\_annot2](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abencds_f1_parameter_annotations.htm)*\]*
    ...
    pname : [typing](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abencds_typing.htm)
    *\[*[@<parameter\_annot1](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abencds_f1_parameter_annotations.htm)*\]*
    *\[*[@<parameter\_annot2](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abencds_f1_parameter_annotations.htm)*\]*
    ...

Addition:

[... @parameter\_annot ... @<parameter\_annot](#!ABAP_ONE_ADD@1@)

Effect

Defines a CDS parameter called pname in one of the following:

-   [Parameter list](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abencds_f1_parameter_list.htm) of a [CDS view](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abencds_view_glosry.htm "Glossary Entry")

-   [Parameter list](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abencds_f1_func_parameter_list.htm) of a [CDS table function](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abencds_table_function_glosry.htm "Glossary Entry")

-   [Parameter list](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abencds_f1_hiera_parameter_list.htm) of a [CDS hierarchy](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abencds_hierarchy_glosry.htm "Glossary Entry")

-   [Parameter list](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abencds_f1_entity_parameter_list.htm) of an [abstract CDS entity](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenabstract_entity_glosry.htm "Glossary Entry")

The name pname must comply with the naming rules for [names](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abencds_general_syntax_rules.htm). Furthermore, pname cannot contain any slash (/) characters and cannot be a reserved name in ABAP Dictionary. The name pname must be unique and be located in the namespace of the elements and [published](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abencds_f1_select_list_association.htm) CDS associations of the current CDS entity. Also, the reserved name connection cannot be used in table functions. The reserved names that cannot be used are specified in the database table TRESE. They are not case-sensitive. The blanks in the comma-separated list are ignored and can be omitted. Each parameter must be typed with an elementary data type [typing](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abencds_typing.htm).

A non-abstract CDS entity for which CDS parameters are defined as input parameters can be used as

-   A [data source](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abencds_f1_data_source.htm) or in a [path expression](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abencds_f1_path_expression.htm) of a different CDS view

-   A [data source](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abapselect_data_source.htm) of a [SELECT](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abapselect.htm) statement from ABAP SQL in ABAP

In these cases, each input parameter must be assigned a suitable actual parameter whose value is then used in the operand positions in which the parameter is specified. The actual parameters are assigned using a parenthesized comma-separated list as follows:

[... cds\_entity( pname1 : act1, pname2 : act2, ...) ...](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abencds_f1_select_parameters.htm),

This list must be specified directly after the name of the view when using an entity with parameters (both within the CDS DDL in ABAP CDS and in ABAP SQL). In ABAP SQL, an equals sign (\=) is used instead of a colon (:).

Note

It is not currently possible to define optional input parameters or replacement parameters for input parameters. The annotation [@Environment.systemField](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abencds_f1_parameter_annotations.htm) can be used, however, to make ABAP SQL pass ABAP system fields to an input parameter implicitly.

Addition

... @parameter\_annot ... @<parameter\_annot

Effect

Specifies annotations for the parameter. The annotations can be specified before the parameter using [@parameter\_annot](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abencds_f1_parameter_annotations.htm) or after the parameter using [@parameter\_annot](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abencds_f1_parameter_annotations.htm). The latter is possible only for [CDS views](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abencds_view_glosry.htm "Glossary Entry"), [CDS table functions](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abencds_table_function_glosry.htm "Glossary Entry"), and [CDS hierarchies](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abencds_hierarchy_glosry.htm "Glossary Entry") and not for [abstract CDS entities](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenabstract_entity_glosry.htm "Glossary Entry").

Continue
[ABAP CDS - parameter\_annot](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abencds_f1_parameter_annotations.htm)



**📖 Source**: [abencds_f1_param.htm](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abencds_f1_param.htm)

### abencds_f1_parameter_annotations.htm

> **📖 Official SAP Documentation**: [abencds_f1_parameter_annotations.htm](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abencds_f1_parameter_annotations.htm)
> **🔍 Direct Link**: This section contains the complete content from the official SAP ABAP documentation page.


  

* * *

AS ABAP Release 754, ©Copyright 2019 SAP SE. All rights reserved.

[ABAP Keyword Documentation](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenabap.htm) →  [ABAP - Dictionary](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenabap_dictionary.htm) →  [ABAP CDS in ABAP Dictionary](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abencds.htm) →  [ABAP CDS - Data Definitions](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenddic_cds_entities.htm) →  [ABAP CDS - DDL for Data Definitions](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abencds_f1_ddl_syntax.htm) →  [ABAP CDS - parameter](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abencds_f1_param.htm) → 

ABAP CDS - parameter\_annot

Syntax

... @[annotation](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abencds_annotations_syntax.htm) ...
... @<[annotation](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abencds_annotations_syntax.htm) ...

Effect

Specifies an [annotation](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abencds_annotation_glosry.htm "Glossary Entry") [annotation](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abencds_annotations_syntax.htm) as a parameter annotation in the definition of an [CDS parameter](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abencds_parameter_glosry.htm "Glossary Entry") [parameter](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abencds_f1_param.htm) of one of the following:

-   [CDS view](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abencds_view_glosry.htm "Glossary Entry")

-   [CDS table function](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abencds_table_function_glosry.htm "Glossary Entry")

-   [A CDS hierarchy](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abencds_hierarchy_glosry.htm "Glossary Entry")

-   [An abstract CSD entity](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenabstract_entity_glosry.htm "Glossary Entry")

Parameter annotations can be specified before and after the parameter: The annotation should be defined as a CDS object in a [CDS annotation definition](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abencds_anno_definition_glosry.htm "Glossary Entry") and the annotation definition annotation [@Scope](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abencds_f1_define_anno_annos.htm) should be specified here using the value #PARAMETER.

-   In front of the parameter, the character @ must be placed before the name annotation of the annotation.

-   Following the parameter, the characters @< must be placed before the name annotation of the annotation.

The following tables show the possible [ABAP annotations](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abencore_annotation_glosry.htm "Glossary Entry") that can be specified and their meanings. The ABAP annotations are evaluated by the ABAP runtime environment for every CDS entity. Annotations with other identifiers are usually [framework-specific annotations](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abencds_annotations_frmwrk.htm). These are not evaluated by the ABAP runtime environment but by other SAP frameworks instead.

-   [EndUserText Annotations](#abencds-f1-parameter-annotations-1--------environment-annotations---@ITOC@@ABENCDS_F1_PARAMETER_ANNOTATIONS_2)

The first column of the table displays the (possibly structured) name annotation of an ABAP annotation and the second column displays its meaning. The third column shows the possible [annotation values](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenannotation_value_glosry.htm "Glossary Entry"). The fourth column shows the value set implicitly for the annotation value if the annotation is not used explicitly. The fifth column displays the default value set implicitly for value in accordance with the [annotation definition](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abencds_anno_definition_glosry.htm "Glossary Entry") if the annotation is specified without a value. If nothing is specified for the annotation value, the annotation should be specified without a value.

EndUserText Annotations

Translatable texts of the parameter.

Annotation

Meaning

Annotation Values

Default Value if Not Used

Default Value if Used Without Value

EndUserText.label

Translatable short text of the parameter

Character string with maximum 60 characters

\-

\-

EndUserText.quickInfo

Translatable tooltip of the parameter

String

\-

\-

Note

ABAP annotations introduced using EndUserText are used to define translatable semantic texts for a [CDS object](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abencds_object_glosry.htm "Glossary Entry"). The value of an annotation like this is saved in special tables that have a language key and that are translatable. The value specified in the source code should consist of text in the original language of the CDS source code and is translated into the required languages. The methods of the class CL\_DD\_DDL\_ANNOTATION\_SERVICE read these texts as specified by an input parameter for the language. If no language is passed to the input parameter, the [text environment language](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abentext_env_langu_glosry.htm "Glossary Entry") is used as the default. If no text is found for the language, the [secondary language](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abensecondary_language_glosry.htm "Glossary Entry") in AS ABAP is used.

Environment Annotations

Defines parameter passing to a CDS view.

Annotation

Meaning

Annotation Values

Default Value if Not Used

Default Value if Used Without Value

Environment.systemField

Assigns an [ABAP system field](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abensystem_field_glosry.htm "Glossary Entry") to the input parameter for implicit parameter passing in ABAP SQL.

#CLIENT:
[sy-mandt](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abensystem_fields.htm)
#SYSTEM\_DATE:
[sy-datum](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abensystem_fields.htm)
#SYSTEM\_TIME:
[sy-uzeit](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abensystem_fields.htm)
#SYSTEM\_LANGUAGE:
[sy-langu](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abensystem_fields.htm)
#USER:
[sy-uname](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abensystem_fields.htm)

\-

\-

An input parameter can be annotated strictly once with the annotation Environment.systemField. If the CDS entity is used as a [data source](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abapselect_data_source.htm) of a [SELECT](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abapselect.htm) statement in [ABAP SQL](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenopen_sql_glosry.htm "Glossary Entry"), this assignment has the following consequences:

-   No explicit actual parameter can be assigned to an input parameter to which the system field sy-mandt was assigned using #CLIENT. ABAP SQL always passes (implicitly) the ID of the current [client](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenclient_glosry.htm "Glossary Entry") in accordance with the nominal value of sy-mandt or from the clients specified using [USING CLIENT](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abapselect_client.htm). The obsolete addition [CLIENT SPECIFIED](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abapselect_client_obsolete.htm) cannot be specified when a CDS entity of this type is accessed.

-   An explicit actual parameter does not need to be assigned to an input parameter to which a system field other than sy-mandt is assigned using #SYSTEM\_.... If no explicit actual parameter is specified, ABAP SQL passes the nominal value of the assigned system field implicitly.

Any other values for value are ignored using an exception. Instead of the value #USER, the value #APPLICATION\_USER can be specified too. This is, however, only offered for reasons of downward compatibility.

Notes

-   The annotation @Environment.systemField is ignored in parameter passing to the CDS entity in other CDS entities. Explicit actual parameters must be specified here, for example input parameters from the current entity or even [session variables](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abencds_f1_session_variable.htm).

-   The value #CLIENT of the annotation @Environment.systemField is particularly significant for [client-specific CDS table functions](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abencds_func_client_handling.htm). If an input parameter is annotated accordingly, it is given the current client ID implicitly by the ABAP SQL statement [SELECT](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abapselect.htm) and can be used to restrict the results set in the platform-dependent implementation of the function. @Environment.systemField: #CLIENT cannot be specified in the case of [cross-client CDS table functions](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abencds_func_client_handling.htm).

Example

The following CDS view associates all input parameters with ABAP system fields and the SELECT list consists only of the input parameters. The ABAP program DEMO\_CDS\_SYSTEM\_FIELDS accesses the CDS view by specifying parameters in full implicitly and explicitly and produces both results.

@AbapCatalog.sqlViewName: 'DEMO\_CDS\_SYST'
@AccessControl.authorizationCheck: #NOT\_REQUIRED
define view demo\_cds\_system\_fields
with parameters
@Environment.systemField : #CLIENT
p\_mandt : syst\_mandt,
@Environment.systemField : #SYSTEM\_DATE
p\_datum : syst\_datum,
@Environment.systemField : #SYSTEM\_TIME
p\_uzeit : syst\_uzeit,
p\_langu : syst\_langu @<Environment.systemField : #SYSTEM\_LANGUAGE,
p\_uname : syst\_uname @<Environment.systemField : #USER
as select from
demo\_expressions
{
:p\_mandt as client,
:p\_datum as datum,
:p\_uzeit as uzeit,
:p\_langu as langu,
:p\_uname as uname
}
where
id = '1';


---


## ABAP Keyword Documentation / ABAP - Dictionary / ABAP CDS in ABAP Dictionary / ABAP CDS - Data Definitions / ABAP CDS - DDL for Data Definitions / ABAP CDS - parameter

**Files**: 2 | **Difficulty**: advanced

# ABAP Keyword Documentation / ABAP - Dictionary / ABAP CDS in ABAP Dictionary / ABAP CDS - Data Definitions / ABAP CDS - DDL for Data Definitions / ABAP CDS - parameter

Included pages: 2



**📖 Source**: [abencds_f1_parameter_annotations.htm](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abencds_f1_parameter_annotations.htm)

### abencds_f1_param.htm

> **📖 Official SAP Documentation**: [abencds_f1_param.htm](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abencds_f1_param.htm)
> **🔍 Direct Link**: This section contains the complete content from the official SAP ABAP documentation page.


  

* * *

AS ABAP Release 754, ©Copyright 2019 SAP SE. All rights reserved.

[ABAP Keyword Documentation](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenabap.htm) →  [ABAP - Dictionary](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenabap_dictionary.htm) →  [ABAP CDS in ABAP Dictionary](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abencds.htm) →  [ABAP CDS - Data Definitions](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenddic_cds_entities.htm) →  [ABAP CDS - DDL for Data Definitions](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abencds_f1_ddl_syntax.htm) → 

ABAP CDS - parameter

Syntax

... *\[*[@parameter\_annot1](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abencds_f1_parameter_annotations.htm)*\]*
    *\[*[@parameter\_annot2](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abencds_f1_parameter_annotations.htm)*\]*
    ...
    pname : [typing](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abencds_typing.htm)
    *\[*[@<parameter\_annot1](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abencds_f1_parameter_annotations.htm)*\]*
    *\[*[@<parameter\_annot2](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abencds_f1_parameter_annotations.htm)*\]*
    ...

Addition:

[... @parameter\_annot ... @<parameter\_annot](#!ABAP_ONE_ADD@1@)

Effect

Defines a CDS parameter called pname in one of the following:

-   [Parameter list](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abencds_f1_parameter_list.htm) of a [CDS view](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abencds_view_glosry.htm "Glossary Entry")

-   [Parameter list](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abencds_f1_func_parameter_list.htm) of a [CDS table function](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abencds_table_function_glosry.htm "Glossary Entry")

-   [Parameter list](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abencds_f1_hiera_parameter_list.htm) of a [CDS hierarchy](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abencds_hierarchy_glosry.htm "Glossary Entry")

-   [Parameter list](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abencds_f1_entity_parameter_list.htm) of an [abstract CDS entity](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenabstract_entity_glosry.htm "Glossary Entry")

The name pname must comply with the naming rules for [names](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abencds_general_syntax_rules.htm). Furthermore, pname cannot contain any slash (/) characters and cannot be a reserved name in ABAP Dictionary. The name pname must be unique and be located in the namespace of the elements and [published](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abencds_f1_select_list_association.htm) CDS associations of the current CDS entity. Also, the reserved name connection cannot be used in table functions. The reserved names that cannot be used are specified in the database table TRESE. They are not case-sensitive. The blanks in the comma-separated list are ignored and can be omitted. Each parameter must be typed with an elementary data type [typing](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abencds_typing.htm).

A non-abstract CDS entity for which CDS parameters are defined as input parameters can be used as

-   A [data source](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abencds_f1_data_source.htm) or in a [path expression](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abencds_f1_path_expression.htm) of a different CDS view

-   A [data source](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abapselect_data_source.htm) of a [SELECT](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abapselect.htm) statement from ABAP SQL in ABAP

In these cases, each input parameter must be assigned a suitable actual parameter whose value is then used in the operand positions in which the parameter is specified. The actual parameters are assigned using a parenthesized comma-separated list as follows:

[... cds\_entity( pname1 : act1, pname2 : act2, ...) ...](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abencds_f1_select_parameters.htm),

This list must be specified directly after the name of the view when using an entity with parameters (both within the CDS DDL in ABAP CDS and in ABAP SQL). In ABAP SQL, an equals sign (\=) is used instead of a colon (:).

Note

It is not currently possible to define optional input parameters or replacement parameters for input parameters. The annotation [@Environment.systemField](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abencds_f1_parameter_annotations.htm) can be used, however, to make ABAP SQL pass ABAP system fields to an input parameter implicitly.

Addition

... @parameter\_annot ... @<parameter\_annot

Effect

Specifies annotations for the parameter. The annotations can be specified before the parameter using [@parameter\_annot](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abencds_f1_parameter_annotations.htm) or after the parameter using [@parameter\_annot](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abencds_f1_parameter_annotations.htm). The latter is possible only for [CDS views](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abencds_view_glosry.htm "Glossary Entry"), [CDS table functions](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abencds_table_function_glosry.htm "Glossary Entry"), and [CDS hierarchies](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abencds_hierarchy_glosry.htm "Glossary Entry") and not for [abstract CDS entities](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenabstract_entity_glosry.htm "Glossary Entry").

Continue
[ABAP CDS - parameter\_annot](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abencds_f1_parameter_annotations.htm)



**📖 Source**: [abencds_f1_param.htm](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abencds_f1_param.htm)

### abencds_f1_parameter_annotations.htm

> **📖 Official SAP Documentation**: [abencds_f1_parameter_annotations.htm](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abencds_f1_parameter_annotations.htm)
> **🔍 Direct Link**: This section contains the complete content from the official SAP ABAP documentation page.


  

* * *

AS ABAP Release 754, ©Copyright 2019 SAP SE. All rights reserved.

[ABAP Keyword Documentation](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenabap.htm) →  [ABAP - Dictionary](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenabap_dictionary.htm) →  [ABAP CDS in ABAP Dictionary](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abencds.htm) →  [ABAP CDS - Data Definitions](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenddic_cds_entities.htm) →  [ABAP CDS - DDL for Data Definitions](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abencds_f1_ddl_syntax.htm) →  [ABAP CDS - parameter](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abencds_f1_param.htm) → 

ABAP CDS - parameter\_annot

Syntax

... @[annotation](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abencds_annotations_syntax.htm) ...
... @<[annotation](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abencds_annotations_syntax.htm) ...

Effect

Specifies an [annotation](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abencds_annotation_glosry.htm "Glossary Entry") [annotation](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abencds_annotations_syntax.htm) as a parameter annotation in the definition of an [CDS parameter](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abencds_parameter_glosry.htm "Glossary Entry") [parameter](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abencds_f1_param.htm) of one of the following:

-   [CDS view](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abencds_view_glosry.htm "Glossary Entry")

-   [CDS table function](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abencds_table_function_glosry.htm "Glossary Entry")

-   [A CDS hierarchy](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abencds_hierarchy_glosry.htm "Glossary Entry")

-   [An abstract CSD entity](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenabstract_entity_glosry.htm "Glossary Entry")

Parameter annotations can be specified before and after the parameter: The annotation should be defined as a CDS object in a [CDS annotation definition](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abencds_anno_definition_glosry.htm "Glossary Entry") and the annotation definition annotation [@Scope](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abencds_f1_define_anno_annos.htm) should be specified here using the value #PARAMETER.

-   In front of the parameter, the character @ must be placed before the name annotation of the annotation.

-   Following the parameter, the characters @< must be placed before the name annotation of the annotation.

The following tables show the possible [ABAP annotations](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abencore_annotation_glosry.htm "Glossary Entry") that can be specified and their meanings. The ABAP annotations are evaluated by the ABAP runtime environment for every CDS entity. Annotations with other identifiers are usually [framework-specific annotations](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abencds_annotations_frmwrk.htm). These are not evaluated by the ABAP runtime environment but by other SAP frameworks instead.

-   [EndUserText Annotations](#abencds-f1-parameter-annotations-1--------environment-annotations---@ITOC@@ABENCDS_F1_PARAMETER_ANNOTATIONS_2)

The first column of the table displays the (possibly structured) name annotation of an ABAP annotation and the second column displays its meaning. The third column shows the possible [annotation values](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenannotation_value_glosry.htm "Glossary Entry"). The fourth column shows the value set implicitly for the annotation value if the annotation is not used explicitly. The fifth column displays the default value set implicitly for value in accordance with the [annotation definition](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abencds_anno_definition_glosry.htm "Glossary Entry") if the annotation is specified without a value. If nothing is specified for the annotation value, the annotation should be specified without a value.

EndUserText Annotations

Translatable texts of the parameter.

Annotation

Meaning

Annotation Values

Default Value if Not Used

Default Value if Used Without Value

EndUserText.label

Translatable short text of the parameter

Character string with maximum 60 characters

\-

\-

EndUserText.quickInfo

Translatable tooltip of the parameter

String

\-

\-

Note

ABAP annotations introduced using EndUserText are used to define translatable semantic texts for a [CDS object](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abencds_object_glosry.htm "Glossary Entry"). The value of an annotation like this is saved in special tables that have a language key and that are translatable. The value specified in the source code should consist of text in the original language of the CDS source code and is translated into the required languages. The methods of the class CL\_DD\_DDL\_ANNOTATION\_SERVICE read these texts as specified by an input parameter for the language. If no language is passed to the input parameter, the [text environment language](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abentext_env_langu_glosry.htm "Glossary Entry") is used as the default. If no text is found for the language, the [secondary language](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abensecondary_language_glosry.htm "Glossary Entry") in AS ABAP is used.

Environment Annotations

Defines parameter passing to a CDS view.

Annotation

Meaning

Annotation Values

Default Value if Not Used

Default Value if Used Without Value

Environment.systemField

Assigns an [ABAP system field](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abensystem_field_glosry.htm "Glossary Entry") to the input parameter for implicit parameter passing in ABAP SQL.

#CLIENT:
[sy-mandt](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abensystem_fields.htm)
#SYSTEM\_DATE:
[sy-datum](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abensystem_fields.htm)
#SYSTEM\_TIME:
[sy-uzeit](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abensystem_fields.htm)
#SYSTEM\_LANGUAGE:
[sy-langu](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abensystem_fields.htm)
#USER:
[sy-uname](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abensystem_fields.htm)

\-

\-

An input parameter can be annotated strictly once with the annotation Environment.systemField. If the CDS entity is used as a [data source](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abapselect_data_source.htm) of a [SELECT](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abapselect.htm) statement in [ABAP SQL](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenopen_sql_glosry.htm "Glossary Entry"), this assignment has the following consequences:

-   No explicit actual parameter can be assigned to an input parameter to which the system field sy-mandt was assigned using #CLIENT. ABAP SQL always passes (implicitly) the ID of the current [client](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenclient_glosry.htm "Glossary Entry") in accordance with the nominal value of sy-mandt or from the clients specified using [USING CLIENT](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abapselect_client.htm). The obsolete addition [CLIENT SPECIFIED](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abapselect_client_obsolete.htm) cannot be specified when a CDS entity of this type is accessed.

-   An explicit actual parameter does not need to be assigned to an input parameter to which a system field other than sy-mandt is assigned using #SYSTEM\_.... If no explicit actual parameter is specified, ABAP SQL passes the nominal value of the assigned system field implicitly.

Any other values for value are ignored using an exception. Instead of the value #USER, the value #APPLICATION\_USER can be specified too. This is, however, only offered for reasons of downward compatibility.

Notes

-   The annotation @Environment.systemField is ignored in parameter passing to the CDS entity in other CDS entities. Explicit actual parameters must be specified here, for example input parameters from the current entity or even [session variables](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abencds_f1_session_variable.htm).

-   The value #CLIENT of the annotation @Environment.systemField is particularly significant for [client-specific CDS table functions](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abencds_func_client_handling.htm). If an input parameter is annotated accordingly, it is given the current client ID implicitly by the ABAP SQL statement [SELECT](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abapselect.htm) and can be used to restrict the results set in the platform-dependent implementation of the function. @Environment.systemField: #CLIENT cannot be specified in the case of [cross-client CDS table functions](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abencds_func_client_handling.htm).

Example

The following CDS view associates all input parameters with ABAP system fields and the SELECT list consists only of the input parameters. The ABAP program DEMO\_CDS\_SYSTEM\_FIELDS accesses the CDS view by specifying parameters in full implicitly and explicitly and produces both results.

@AbapCatalog.sqlViewName: 'DEMO\_CDS\_SYST'
@AccessControl.authorizationCheck: #NOT\_REQUIRED
define view demo\_cds\_system\_fields
with parameters
@Environment.systemField : #CLIENT
p\_mandt : syst\_mandt,
@Environment.systemField : #SYSTEM\_DATE
p\_datum : syst\_datum,
@Environment.systemField : #SYSTEM\_TIME
p\_uzeit : syst\_uzeit,
p\_langu : syst\_langu @<Environment.systemField : #SYSTEM\_LANGUAGE,
p\_uname : syst\_uname @<Environment.systemField : #USER
as select from
demo\_expressions
{
:p\_mandt as client,
:p\_datum as datum,
:p\_uzeit as uzeit,
:p\_langu as langu,
:p\_uname as uname
}
where
id = '1';


---


## ABAP Keyword Documentation / ABAP - Dictionary / ABAP CDS in ABAP Dictionary / ABAP CDS - Access Control / ABAP CDS - DCL Statements / ABAP CDS - DEFINE ROLE / ABAP CDS - DEFINE ROLE, access_rules

**Files**: 6 | **Difficulty**: advanced

# ABAP Keyword Documentation / ABAP - Dictionary / ABAP CDS in ABAP Dictionary / ABAP CDS - Access Control / ABAP CDS - DCL Statements / ABAP CDS - DEFINE ACCESSPOLICY

Included pages: 6



**📖 Source**: [abencds_f1_parameter_annotations.htm](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abencds_f1_parameter_annotations.htm)

### abencds_f1_define_accesspolicy.htm

> **📖 Official SAP Documentation**: [abencds_f1_define_accesspolicy.htm](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abencds_f1_define_accesspolicy.htm)
> **🔍 Direct Link**: This section contains the complete content from the official SAP ABAP documentation page.


  

* * *

AS ABAP Release 754, ©Copyright 2019 SAP SE. All rights reserved.

[ABAP Keyword Documentation](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenabap.htm) →  [ABAP - Dictionary](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenabap_dictionary.htm) →  [ABAP CDS in ABAP Dictionary](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abencds.htm) →  [ABAP CDS - Access Control](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abencds_authorizations.htm) →  [ABAP CDS - DCL Statements](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abencds_f1_dcl_syntax.htm) → 

ABAP CDS - DEFINE ACCESSPOLICY

Syntax

*\[*[@access\_policy\_annot](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abencds_f1_dcl_ap_annotations.htm)*\]*
*\[*DEFINE*\]* ACCESSPOLICY access\_policy {
  [pfcg\_mapping\_definition](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abencds_f1_define_pfcg_mapping.htm) *|* generic\_aspect\_definition
}

Effect

Defines a [CDS access policy](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abencds_access_policy_glosry.htm "Glossary Entry") access\_policy in the [CDS DCL](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abencds_dcl_glosry.htm "Glossary Entry") to be used as a framework for further definitions.

An ACCESSPOLICY contains the definition of one of the following objects (which must have the same name as the access policy):

-   A [PFCG mapping](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abencds_pfcg_mapping_glosry.htm "Glossary Entry") [DEFINE PFCG\_MAPPING](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abencds_f1_define_pfcg_mapping.htm)

-   A generic aspect DEFINE GENERIC\_ASPECT.

DEFINE ACCESSPOLICY can be used to specify the optional annotation [@access\_policy\_annot](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abencds_f1_dcl_ap_annotations.htm) in front of the actual definition of the access policy.

Notes

-   Separate [DCL source code](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abendcl_source_code_glosry.htm "Glossary Entry") must be created for each CDS access policy.

-   The [DCL source code](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abendcl_source_code_glosry.htm "Glossary Entry") of a CDS access policy must have the same name as this policy.

Continue
[ABAP CDS - DEFINE ACCESSPOLICY, access\_policy\_annot](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abencds_f1_dcl_ap_annotations.htm)
[ABAP CDS - DEFINE PFCG\_MAPPING](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abencds_f1_define_pfcg_mapping.htm)
[ABAP CDS - DEFINE ASPECT](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abencds_f1_define_generic_aspect.htm)



**📖 Source**: [abencds_f1_define_accesspolicy.htm](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abencds_f1_define_accesspolicy.htm)

### abencds_f1_dcl_ap_annotations.htm

> **📖 Official SAP Documentation**: [abencds_f1_dcl_ap_annotations.htm](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abencds_f1_dcl_ap_annotations.htm)
> **🔍 Direct Link**: This section contains the complete content from the official SAP ABAP documentation page.


  

* * *

AS ABAP Release 754, ©Copyright 2019 SAP SE. All rights reserved.

[ABAP Keyword Documentation](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenabap.htm) →  [ABAP - Dictionary](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenabap_dictionary.htm) →  [ABAP CDS in ABAP Dictionary](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abencds.htm) →  [ABAP CDS - Access Control](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abencds_authorizations.htm) →  [ABAP CDS - DCL Statements](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abencds_f1_dcl_syntax.htm) →  [ABAP CDS - DEFINE ACCESSPOLICY](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abencds_f1_define_accesspolicy.htm) → 

ABAP CDS - DEFINE ACCESSPOLICY, access\_policy\_annot

Syntax

... @[annotation](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abencds_annotations.htm) ...

Effect

Specifies an [annotation](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abencds_annotation_glosry.htm "Glossary Entry") [annotation](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abencds_annotations_syntax.htm) as an access policy annotation in the definition of a [CDS access policy](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abencds_access_policy_glosry.htm "Glossary Entry") in front of the statement [DEFINE ACCESSPOLICY](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abencds_f1_define_accesspolicy.htm). The character @ must be placed directly in front of the name annotation of the annotation. The annotation must be defined as a CDS object in a [CDS annotation definition](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abencds_anno_definition_glosry.htm "Glossary Entry") and the annotation [@Scope](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abencds_f1_define_anno_annos.htm) must be specified here using the value #ROLE.

The table below shows the possible [ABAP annotations](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abencore_annotation_glosry.htm "Glossary Entry") that can be specified, and their meanings. No other annotations can be specified.

The first column of the table displays the (possibly structured) name annotation of an ABAP annotation and the second column displays its meaning. The third column shows the possible [annotation values](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenannotation_value_glosry.htm "Glossary Entry"). The fourth column shows the value set implicitly for the annotation value if the annotation is not used explicitly. The fifth column displays the default value set implicitly for value in accordance with the [annotation definition](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abencds_anno_definition_glosry.htm "Glossary Entry") if the annotation is specified without a value. If nothing is specified for the annotation value, the annotation should be specified without a value.

EndUserText Annotations

Translatable texts of the CDS role.

Annotation

Meaning

Annotation Values

Default Value if Not Used

Default Value if Used Without Value

EndUserText.label

Translatable short text of the CDS access policy

Character string with maximum 60 characters

\-

\-

Note

ABAP annotations introduced using EndUserText are used to define translatable semantic texts for a [CDS object](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abencds_object_glosry.htm "Glossary Entry"). The value of an annotation like this is saved in special tables that have a language key and that are translatable. The value specified in the source code should consist of text in the original language of the CDS source code and is translated into the required languages.



**📖 Source**: [abencds_f1_dcl_ap_annotations.htm](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abencds_f1_dcl_ap_annotations.htm)

### abencds_f1_define_pfcg_mapping.htm

> **📖 Official SAP Documentation**: [abencds_f1_define_pfcg_mapping.htm](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abencds_f1_define_pfcg_mapping.htm)
> **🔍 Direct Link**: This section contains the complete content from the official SAP ABAP documentation page.


  

* * *

AS ABAP Release 754, ©Copyright 2019 SAP SE. All rights reserved.

[ABAP Keyword Documentation](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenabap.htm) →  [ABAP - Dictionary](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenabap_dictionary.htm) →  [ABAP CDS in ABAP Dictionary](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abencds.htm) →  [ABAP CDS - Access Control](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abencds_authorizations.htm) →  [ABAP CDS - DCL Statements](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abencds_f1_dcl_syntax.htm) →  [ABAP CDS - DEFINE ACCESSPOLICY](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abencds_f1_define_accesspolicy.htm) → 

ABAP CDS - DEFINE PFCG\_MAPPING

Syntax

*\[*[pfcg\_mapping\_annot](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abencds_f1_dcl_pm_annotations.htm)*\]*
*\[*DEFINE*\]* PFCG\_MAPPING pfcg\_mapping(output1*\[*, output2 ...*\]*)
  BETWEEN mapping\_entity AND auth\_object *\[*IN SCENARIO scenario\_name*\]*
  { input1 = auth\_field1 *\[*CONSTRAINT ID*\]**\[*,
    input2 = auth\_field2 *\[*CONSTRAINT ID*\]* ... *\]* }

Effect

Defines a [PFCG mapping](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abencds_pfcg_mapping_glosry.htm "Glossary Entry") pfcg\_mapping as part of a [CDS access policy](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abencds_access_policy_glosry.htm "Glossary Entry") defined using [DEFINE ACCESSPOLICY](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abencds_f1_define_accesspolicy.htm). The name of the PFCG mapping must match the name of the CDS access policy.

The definition of a PCFG mapping contains the following:

-   A comma-separated list after the name pfcg\_mapping in which the output fields of the PFCG mapping are defined. These fields must be elements of the CDS entity mapping\_entity specified after BETWEEN. The specified order applies.

-   A CDS entity mapping\_entity specified after the keyword BETWEEN to define the fields used in the mapping. This definition specifies the input and output fields of the mapping.

-   An [authorization object](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenauthorization_object_glosry.htm "Glossary Entry") auth\_object specified after the keyword AND. The PFCG mapping can be [used](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abencds_f1_cond_pfcg_mapping.htm) in precisely those [PFCG conditions](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abencds_f1_cond_pfcg.htm) in which this authorization object is specified after ASPECT pfcg\_auth.

-   A comma-separated unordered list in curly brackets that associates the input fields input1, input2, ... of the mapping with [authorization fields](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenauthorization_field_glosry.htm "Glossary Entry") auth\_field of the authorization object auth\_object.

-   The input fields on the left sides must be elements of the CDS entity mapping\_entity specified after BETWEEN.

-   Authorization fields of the authorization object auth\_object must be specified on the right sides.

-   Any number of optional assignments can be flagged using the addition CONSTRAINT ID.

A PFCG mapping can be [used](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abencds_f1_cond_pfcg_mapping.htm) in a [PFCG](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abencds_f1_cond_pfcg.htm) condition of the same authorization object. It is transformed to specific access conditions as follows when the condition is evaluated:

-   The values of the current user for the authorization fields assigned to the input fields fill the input fields of the mapping.

-   The output fields of the mapping are assigned to the elements within the [curly brackets](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abencds_f1_cond_pfcg_mapping.htm) of the PFCG condition in the specified order.

-   The following applies to the input fields flagged with CONSTRAINT ID:

-   Only those authorization fields of the authorization object can be assigned that contain a single value in a specific authorization. Multiple values or patterns are not allowed (with the exception of full authorization using the value "\*"). Otherwise the PFCG mapping in the PFCG condition returns the value "false" for the authorization in question.

-   Full authorization can be assigned only when applied to all input fields of the PFCG mapping.

-   If full authorization exists for all input fields of the PFCG mapping (value "\*"), the PFCG mapping in the PFCG condition returns the value "true" when evaluated. This makes it possible to read entries of the protected entity for which there are no output fields in the mapping.

Addition

... IN SCENARIO

To use a PFCG mapping in a PFCG condition where the authorization object is subject to the switchable authorization check, the PFCG mapping must also name the same scenario (as well as the same authorization object). For more information, see the [PFCG condition](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abencds_f1_cond_pfcg.htm) of the statement DEFINE ROLE.

Note

In ABAP SQL access to a CDS entity assigned a role of this type, PFCG mappings are defined internally using a subquery after EXISTS. This can be seen in an [SQL trace](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abensql_trace_glosry.htm "Glossary Entry").

Example

The following example shows the definition of a PFCG mapping demo\_cds\_auth\_pfcg\_mapping based on the CDS entity demo\_cds\_mapping\_entity below. The output fields of the PFCG mapping are the authorization fields OBJECT, OBJ\_NAME, and DEVCLASS of the authorization object S\_DEVELOP. The input fields of the PFCG mapping are the elements of the CDS entity to which the output fields are assigned. The [example](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abencds_f1_cond_pfcg_mapping.htm) that demonstrates how a PFCG mapping is specified in a role shows how the mapping is used.

-   PFCG Mapping

define accesspolicy demo\_cds\_pfcg\_mapping  {
  define pfcg\_mapping demo\_cds\_pfcg\_mapping( map\_object,  
                                             map\_obj\_name,  
                                             map\_devclass )
    between demo\_cds\_mapping\_entity
      and S\_DEVELOP
      { map\_devclass = devclass,
        map\_object   = objtype,
        map\_obj\_name = objname } }

-   CDS Entity

@AbapCatalog.sqlViewName: 'DEMOCDSMAPPENT'
define view demo\_cds\_mapping\_entity
  as select from
    tadir
    {
      devclass as map\_devclass,
      object   as map\_object,
      obj\_name as map\_obj\_name
    }
    where
          devclass =    'SABAPDEMOS'
      and object   =    'PROG'
      and obj\_name like 'DEMO%'

Continue
[ABAP CDS - DEFINE PFCG\_MAPPING, pfcg\_mapping\_annot](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abencds_f1_dcl_pm_annotations.htm)



**📖 Source**: [abencds_f1_define_pfcg_mapping.htm](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abencds_f1_define_pfcg_mapping.htm)

### abencds_f1_dcl_pm_annotations.htm

> **📖 Official SAP Documentation**: [abencds_f1_dcl_pm_annotations.htm](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abencds_f1_dcl_pm_annotations.htm)
> **🔍 Direct Link**: This section contains the complete content from the official SAP ABAP documentation page.


  

* * *

AS ABAP Release 754, ©Copyright 2019 SAP SE. All rights reserved.

[ABAP Keyword Documentation](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenabap.htm) →  [ABAP - Dictionary](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenabap_dictionary.htm) →  [ABAP CDS in ABAP Dictionary](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abencds.htm) →  [ABAP CDS - Access Control](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abencds_authorizations.htm) →  [ABAP CDS - DCL Statements](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abencds_f1_dcl_syntax.htm) →  [ABAP CDS - DEFINE ACCESSPOLICY](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abencds_f1_define_accesspolicy.htm) →  [ABAP CDS - DEFINE PFCG\_MAPPING](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abencds_f1_define_pfcg_mapping.htm) → 

ABAP CDS - DEFINE PFCG\_MAPPING, pfcg\_mapping\_annot

Syntax

... @[annotation](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abencds_annotations.htm) ...

Effect

Specifies an [annotation](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abencds_annotation_glosry.htm "Glossary Entry") [annotation](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abencds_annotations_syntax.htm) as a PFCG mapping annotation in front of the statement [PFCG\_MAPPING](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abencds_f1_define_pfcg_mapping.htm) in the definition of a [CDS PFCG mapping](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abencds_pfcg_mapping_glosry.htm "Glossary Entry"). The character @ must be placed in front of the name annotation of the annotation. The annotation must be defined as a CDS object in a [CDS annotation definition](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abencds_anno_definition_glosry.htm "Glossary Entry") and the annotation definition annotation [@Scope](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abencds_f1_define_anno_annos.htm) must be specified here using the value #ROLE.

The table below shows the possible [ABAP annotations](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abencore_annotation_glosry.htm "Glossary Entry") that can be specified, and their meanings. No other annotations can be specified.

-   [EndUserText Annotations](#abencds-f1-dcl-pm-annotations-1---the-first-column-of-the-table-displays-the--possibly-structured--name-annotation-of-an-abap-annotation-and-the-second-column-displays-its-meaning--the-third-column-shows-the-possible--annotation-values--javascript-call-link---abenannotation-value-glosry-htm-----glossary-entry----the-fourth-column-shows-the-value-set-implicitly-for-the-annotation-value-if-the-annotation-is-not-used-explicitly--the-fifth-column-displays-the-default-value-set-implicitly-for-value-in-accordance-with-the--annotation-definition--javascript-call-link---abencds-anno-definition-glosry-htm-----glossary-entry---if-the-annotation-is-specified-without-a-value--if-nothing-is-specified-for-the-annotation-value--the-annotation-should-be-specified-without-a-value---endusertext-annotations--translatable-texts-of-the-cds-role---annotation--meaning--annotation-values--default-value-if-not-used--default-value-if-used-without-value--endusertext-label--translatable-short-text-of-the-pfcg-mapping--character-string-with-maximum-60-characters----------note--abap-annotations-introduced-using-endusertext-are-used-to-define-translatable-semantic-texts-for-a--cds-object--javascript-call-link---abencds-object-glosry-htm-----glossary-entry----the-value-of-an-annotation-like-this-is-saved-in-special-tables-that-have-a-language-key-and-that-are-translatable--the-value-specified-in-the-source-code-should-consist-of-text-in-the-original-language-of-the-cds-source-code-and-is-translated-into-the-required-languages--------abencds-f1-define-pfcg-mapping-htm-------------as-abap-release-754---copyright-2019-sap-se--all-rights-reserved----abap-keyword-documentation--javascript-call-link---abenabap-htm---------abap---dictionary--javascript-call-link---abenabap-dictionary-htm---------abap-cds-in-abap-dictionary--javascript-call-link---abencds-htm---------abap-cds---access-control--javascript-call-link---abencds-authorizations-htm---------abap-cds---dcl-statements--javascript-call-link---abencds-f1-dcl-syntax-htm---------abap-cds---define-accesspolicy--javascript-call-link---abencds-f1-define-accesspolicy-htm---------abap-cds---define-pfcg--mapping--syntax-------pfcg--mapping--annot--javascript-call-link---abencds-f1-dcl-pm-annotations-htm-------------define-----pfcg--mapping-pfcg--mapping-output1------output2------------between-mapping--entity-and-auth--object-----in-scenario-scenario--name---------input1---auth--field1-----constraint-id--------------input2---auth--field2-----constraint-id-----------------effect--defines-a--pfcg-mapping--javascript-call-link---abencds-pfcg-mapping-glosry-htm-----glossary-entry---pfcg--mapping-as-part-of-a--cds-access-policy--javascript-call-link---abencds-access-policy-glosry-htm-----glossary-entry---defined-using--define-accesspolicy--javascript-call-link---abencds-f1-define-accesspolicy-htm------the-name-of-the-pfcg-mapping-must-match-the-name-of-the-cds-access-policy---the-definition-of-a-pcfg-mapping-contains-the-following-------a-comma-separated-list-after-the-name-pfcg--mapping-in-which-the-output-fields-of-the-pfcg-mapping-are-defined--these-fields-must-be-elements-of-the-cds-entity-mapping--entity-specified-after-between--the-specified-order-applies-------a-cds-entity-mapping--entity-specified-after-the-keyword-between-to-define-the-fields-used-in-the-mapping--this-definition-specifies-the-input-and-output-fields-of-the-mapping-------an--authorization-object--javascript-call-link---abenauthorization-object-glosry-htm-----glossary-entry---auth--object-specified-after-the-keyword-and--the-pfcg-mapping-can-be--used--javascript-call-link---abencds-f1-cond-pfcg-mapping-htm-----in-precisely-those--pfcg-conditions--javascript-call-link---abencds-f1-cond-pfcg-htm-----in-which-this-authorization-object-is-specified-after-aspect-pfcg--auth-------a-comma-separated-unordered-list-in-curly-brackets-that-associates-the-input-fields-input1--input2------of-the-mapping-with--authorization-fields--javascript-call-link---abenauthorization-field-glosry-htm-----glossary-entry---auth--field-of-the-authorization-object-auth--object-------the-input-fields-on-the-left-sides-must-be-elements-of-the-cds-entity-mapping--entity-specified-after-between-------authorization-fields-of-the-authorization-object-auth--object-must-be-specified-on-the-right-sides-------any-number-of-optional-assignments-can-be-flagged-using-the-addition-constraint-id---a-pfcg-mapping-can-be--used--javascript-call-link---abencds-f1-cond-pfcg-mapping-htm-----in-a--pfcg--javascript-call-link---abencds-f1-cond-pfcg-htm-----condition-of-the-same-authorization-object--it-is-transformed-to-specific-access-conditions-as-follows-when-the-condition-is-evaluated-------the-values-of-the-current-user-for-the-authorization-fields-assigned-to-the-input-fields-fill-the-input-fields-of-the-mapping-------the-output-fields-of-the-mapping-are-assigned-to-the-elements-within-the--curly-brackets--javascript-call-link---abencds-f1-cond-pfcg-mapping-htm-----of-the-pfcg-condition-in-the-specified-order-------the-following-applies-to-the-input-fields-flagged-with-constraint-id-------only-those-authorization-fields-of-the-authorization-object-can-be-assigned-that-contain-a-single-value-in-a-specific-authorization--multiple-values-or-patterns-are-not-allowed--with-the-exception-of-full-authorization-using-the-value--------otherwise-the-pfcg-mapping-in-the-pfcg-condition-returns-the-value--false--for-the-authorization-in-question-------full-authorization-can-be-assigned-only-when-applied-to-all-input-fields-of-the-pfcg-mapping-------if-full-authorization-exists-for-all-input-fields-of-the-pfcg-mapping--value--------the-pfcg-mapping-in-the-pfcg-condition-returns-the-value--true--when-evaluated--this-makes-it-possible-to-read-entries-of-the-protected-entity-for-which-there-are-no-output-fields-in-the-mapping---addition------in-scenario--to-use-a-pfcg-mapping-in-a-pfcg-condition-where-the-authorization-object-is-subject-to-the-switchable-authorization-check--the-pfcg-mapping-must-also-name-the-same-scenario--as-well-as-the-same-authorization-object---for-more-information--see-the--pfcg-condition--javascript-call-link---abencds-f1-cond-pfcg-htm-----of-the-statement-define-role---note--in-abap-sql-access-to-a-cds-entity-assigned-a-role-of-this-type--pfcg-mappings-are-defined-internally-using-a-subquery-after-exists--this-can-be-seen-in-an--sql-trace--javascript-call-link---abensql-trace-glosry-htm-----glossary-entry-----example--the-following-example-shows-the-definition-of-a-pfcg-mapping-demo--cds--auth--pfcg--mapping-based-on-the-cds-entity-demo--cds--mapping--entity-below--the-output-fields-of-the-pfcg-mapping-are-the-authorization-fields-object--obj--name--and-devclass-of-the-authorization-object-s--develop--the-input-fields-of-the-pfcg-mapping-are-the-elements-of-the-cds-entity-to-which-the-output-fields-are-assigned--the--example--javascript-call-link---abencds-f1-cond-pfcg-mapping-htm-----that-demonstrates-how-a-pfcg-mapping-is-specified-in-a-role-shows-how-the-mapping-is-used-------pfcg-mapping--define-accesspolicy-demo--cds--pfcg--mapping------define-pfcg--mapping-demo--cds--pfcg--mapping--map--object-------------------------------------------------map--obj--name-------------------------------------------------map--devclass-------between-demo--cds--mapping--entity-------and-s--develop---------map--devclass---devclass----------map--object-----objtype----------map--obj--name---objname----------cds-entity--AbapCatalog.sqlViewName: 'DEMOCDSMAPPENT'
define view demo\_cds\_mapping\_entity
  as select from
    tadir
    {
      devclass as map\_devclass,
      object   as map\_object,
      obj\_name as map\_obj\_name
    }
    where
          devclass =    'SABAPDEMOS'
      and object   =    'PROG'
      and obj\_name like 'DEMO%'

Continue
[ABAP CDS - DEFINE PFCG\_MAPPING, pfcg\_mapping\_annot](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abencds_f1_dcl_pm_annotations.htm)



**📖 Source**: [abencds_f1_dcl_pm_annotations.htm](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abencds_f1_dcl_pm_annotations.htm)

### abencds_f1_define_generic_aspect.htm

> **📖 Official SAP Documentation**: [abencds_f1_define_generic_aspect.htm](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abencds_f1_define_generic_aspect.htm)
> **🔍 Direct Link**: This section contains the complete content from the official SAP ABAP documentation page.


  

* * *

AS ABAP Release 754, ©Copyright 2019 SAP SE. All rights reserved.

[ABAP Keyword Documentation](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenabap.htm) →  [ABAP - Dictionary](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenabap_dictionary.htm) →  [ABAP CDS in ABAP Dictionary](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abencds.htm) →  [ABAP CDS - Access Control](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abencds_authorizations.htm) →  [ABAP CDS - DCL Statements](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abencds_f1_dcl_syntax.htm) →  [ABAP CDS - DEFINE ACCESSPOLICY](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abencds_f1_define_accesspolicy.htm) → 

ABAP CDS - DEFINE ASPECT

Syntax

*\[*DEFINE*\]* ASPECT generic\_aspect AS SELECT FROM aspect\_entity
  WITH USER ELEMENT user\_element
{
    output1 *\[*BYPASS WHEN aspect\_bypass\_condition*\]*
    *\[*, ... *\]*
}

Effect

Defines a generic aspect generic\_aspect as part of a [CDS access policy](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abencds_access_policy_glosry.htm "Glossary Entry") defined using [DEFINE ACCESSPOLICY](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abencds_f1_define_accesspolicy.htm). The name of the generic aspect must be the same as the name of the CDS access policy.

The definition of a generic aspect contains the following:

-   An aspect entity aspect\_entity, specified after the name generic\_aspect, which is used as a data source.

-   An element user\_element of the aspect entity that is used as an input field for the user name of the logged on user.

-   A comma-separated list that specifies the output fields output1, output2, ... of the generic aspect. The specified order applies.

-   Any number of output fields that can be tagged with a condition using the addition BYPASS WHEN aspect\_bypass\_condition. Typical bypass values are \* or an empty value. The following are possible as aspect bypass conditions aspect\_bypass\_condition: [IS NULL](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abencds_cond_expr_null.htm) *|* [IS *\[*NOT*\]* NULL](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abencds_cond_expr_initial.htm) *|* \= [Literal](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abencds_f1_literal.htm)

At runtime, the field user\_element is filled with the user name of the current user. The rows produced in the aspect entity are matched with their output fields in the specified order and with the elements on the left side of the access condition to which the generic aspect is assigned. This means those rows in the protected entity meet the condition for which a row exists for the current user in the aspect entity.

When the bypass condition is used, the match with this field is not used if this condition exists in a row of the aspect entity. A specified value, therefore, (such as an asterisk) can be used to indicate that any values of the protected entity are allowed.

Special Requirements in the Aspect Entity

The content of the aspect entity has a particular relevance for audits by being used in a generic aspect in access control.

To determine which user had access to particular data at a particular time in a system, it must be possible to reconstruct the state of the data of the aspect entity. Existing mechanisms (such as version management or change documents) cover this requirement in the case of development objects or PFCG roles, aspect entities do not specify their data sources and whether these sources are themselves auditable.

The development and runtime systems for CDS access control cannot check whether data sources are auditable. To highlight this requirement, however, the aspect entity must have the following annotations:

-   An auditing type with the annotation @AccessControl.auditing.type. Currently only the value #CUSTOM is possible.

-   A component with the annotation @AccessControl.auditing.specification specifying (as text) how the content of the entity is audited.
    

Notes

-   Just adding the annotations, however, does not activate auditing. It must first be ensure that auditing is actually possible.

-   Auditing must respect all data sources of the aspect entity.

-   If auditing cannot be ensured, the aspect entity cannot be used in a generic aspect.

-   In ABAP SQL access to a CDS entity assigned a role of this type, generic aspects are defined internally using a [subquery](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abensubquery_glosry.htm "Glossary Entry") after EXISTS. This can be seen in an SQL trace.


---


## ABAP Keyword Documentation / ABAP - Dictionary / ABAP CDS in ABAP Dictionary / ABAP CDS - Access Control / ABAP CDS - DCL Statements / ABAP CDS - DEFINE ROLE / ABAP CDS - DEFINE ROLE, condition / ABAP CDS - DEFINE ROLE, literal_condition

**Files**: 2 | **Difficulty**: advanced

# ABAP Keyword Documentation / ABAP - Dictionary / ABAP CDS in ABAP Dictionary / ABAP CDS - Access Control / ABAP CDS - DCL Statements / ABAP CDS - DEFINE ACCESSPOLICY

Included pages: 6



**📖 Source**: [abencds_f1_define_generic_aspect.htm](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abencds_f1_define_generic_aspect.htm)

### abencds_f1_define_accesspolicy.htm

> **📖 Official SAP Documentation**: [abencds_f1_define_accesspolicy.htm](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abencds_f1_define_accesspolicy.htm)
> **🔍 Direct Link**: This section contains the complete content from the official SAP ABAP documentation page.


  

* * *

AS ABAP Release 754, ©Copyright 2019 SAP SE. All rights reserved.

[ABAP Keyword Documentation](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenabap.htm) →  [ABAP - Dictionary](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenabap_dictionary.htm) →  [ABAP CDS in ABAP Dictionary](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abencds.htm) →  [ABAP CDS - Access Control](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abencds_authorizations.htm) →  [ABAP CDS - DCL Statements](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abencds_f1_dcl_syntax.htm) → 

ABAP CDS - DEFINE ACCESSPOLICY

Syntax

*\[*[@access\_policy\_annot](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abencds_f1_dcl_ap_annotations.htm)*\]*
*\[*DEFINE*\]* ACCESSPOLICY access\_policy {
  [pfcg\_mapping\_definition](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abencds_f1_define_pfcg_mapping.htm) *|* generic\_aspect\_definition
}

Effect

Defines a [CDS access policy](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abencds_access_policy_glosry.htm "Glossary Entry") access\_policy in the [CDS DCL](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abencds_dcl_glosry.htm "Glossary Entry") to be used as a framework for further definitions.

An ACCESSPOLICY contains the definition of one of the following objects (which must have the same name as the access policy):

-   A [PFCG mapping](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abencds_pfcg_mapping_glosry.htm "Glossary Entry") [DEFINE PFCG\_MAPPING](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abencds_f1_define_pfcg_mapping.htm)

-   A generic aspect DEFINE GENERIC\_ASPECT.

DEFINE ACCESSPOLICY can be used to specify the optional annotation [@access\_policy\_annot](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abencds_f1_dcl_ap_annotations.htm) in front of the actual definition of the access policy.

Notes

-   Separate [DCL source code](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abendcl_source_code_glosry.htm "Glossary Entry") must be created for each CDS access policy.

-   The [DCL source code](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abendcl_source_code_glosry.htm "Glossary Entry") of a CDS access policy must have the same name as this policy.

Continue
[ABAP CDS - DEFINE ACCESSPOLICY, access\_policy\_annot](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abencds_f1_dcl_ap_annotations.htm)
[ABAP CDS - DEFINE PFCG\_MAPPING](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abencds_f1_define_pfcg_mapping.htm)
[ABAP CDS - DEFINE ASPECT](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abencds_f1_define_generic_aspect.htm)



**📖 Source**: [abencds_f1_define_accesspolicy.htm](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abencds_f1_define_accesspolicy.htm)

### abencds_f1_dcl_ap_annotations.htm

> **📖 Official SAP Documentation**: [abencds_f1_dcl_ap_annotations.htm](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abencds_f1_dcl_ap_annotations.htm)
> **🔍 Direct Link**: This section contains the complete content from the official SAP ABAP documentation page.


  

* * *

AS ABAP Release 754, ©Copyright 2019 SAP SE. All rights reserved.

[ABAP Keyword Documentation](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenabap.htm) →  [ABAP - Dictionary](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenabap_dictionary.htm) →  [ABAP CDS in ABAP Dictionary](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abencds.htm) →  [ABAP CDS - Access Control](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abencds_authorizations.htm) →  [ABAP CDS - DCL Statements](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abencds_f1_dcl_syntax.htm) →  [ABAP CDS - DEFINE ACCESSPOLICY](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abencds_f1_define_accesspolicy.htm) → 

ABAP CDS - DEFINE ACCESSPOLICY, access\_policy\_annot

Syntax

... @[annotation](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abencds_annotations.htm) ...

Effect

Specifies an [annotation](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abencds_annotation_glosry.htm "Glossary Entry") [annotation](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abencds_annotations_syntax.htm) as an access policy annotation in the definition of a [CDS access policy](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abencds_access_policy_glosry.htm "Glossary Entry") in front of the statement [DEFINE ACCESSPOLICY](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abencds_f1_define_accesspolicy.htm). The character @ must be placed directly in front of the name annotation of the annotation. The annotation must be defined as a CDS object in a [CDS annotation definition](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abencds_anno_definition_glosry.htm "Glossary Entry") and the annotation [@Scope](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abencds_f1_define_anno_annos.htm) must be specified here using the value #ROLE.

The table below shows the possible [ABAP annotations](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abencore_annotation_glosry.htm "Glossary Entry") that can be specified, and their meanings. No other annotations can be specified.

The first column of the table displays the (possibly structured) name annotation of an ABAP annotation and the second column displays its meaning. The third column shows the possible [annotation values](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenannotation_value_glosry.htm "Glossary Entry"). The fourth column shows the value set implicitly for the annotation value if the annotation is not used explicitly. The fifth column displays the default value set implicitly for value in accordance with the [annotation definition](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abencds_anno_definition_glosry.htm "Glossary Entry") if the annotation is specified without a value. If nothing is specified for the annotation value, the annotation should be specified without a value.

EndUserText Annotations

Translatable texts of the CDS role.

Annotation

Meaning

Annotation Values

Default Value if Not Used

Default Value if Used Without Value

EndUserText.label

Translatable short text of the CDS access policy

Character string with maximum 60 characters

\-

\-

Note

ABAP annotations introduced using EndUserText are used to define translatable semantic texts for a [CDS object](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abencds_object_glosry.htm "Glossary Entry"). The value of an annotation like this is saved in special tables that have a language key and that are translatable. The value specified in the source code should consist of text in the original language of the CDS source code and is translated into the required languages.



**📖 Source**: [abencds_f1_dcl_ap_annotations.htm](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abencds_f1_dcl_ap_annotations.htm)

### abencds_f1_define_pfcg_mapping.htm

> **📖 Official SAP Documentation**: [abencds_f1_define_pfcg_mapping.htm](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abencds_f1_define_pfcg_mapping.htm)
> **🔍 Direct Link**: This section contains the complete content from the official SAP ABAP documentation page.


  

* * *

AS ABAP Release 754, ©Copyright 2019 SAP SE. All rights reserved.

[ABAP Keyword Documentation](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenabap.htm) →  [ABAP - Dictionary](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenabap_dictionary.htm) →  [ABAP CDS in ABAP Dictionary](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abencds.htm) →  [ABAP CDS - Access Control](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abencds_authorizations.htm) →  [ABAP CDS - DCL Statements](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abencds_f1_dcl_syntax.htm) →  [ABAP CDS - DEFINE ACCESSPOLICY](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abencds_f1_define_accesspolicy.htm) → 

ABAP CDS - DEFINE PFCG\_MAPPING

Syntax

*\[*[pfcg\_mapping\_annot](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abencds_f1_dcl_pm_annotations.htm)*\]*
*\[*DEFINE*\]* PFCG\_MAPPING pfcg\_mapping(output1*\[*, output2 ...*\]*)
  BETWEEN mapping\_entity AND auth\_object *\[*IN SCENARIO scenario\_name*\]*
  { input1 = auth\_field1 *\[*CONSTRAINT ID*\]**\[*,
    input2 = auth\_field2 *\[*CONSTRAINT ID*\]* ... *\]* }

Effect

Defines a [PFCG mapping](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abencds_pfcg_mapping_glosry.htm "Glossary Entry") pfcg\_mapping as part of a [CDS access policy](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abencds_access_policy_glosry.htm "Glossary Entry") defined using [DEFINE ACCESSPOLICY](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abencds_f1_define_accesspolicy.htm). The name of the PFCG mapping must match the name of the CDS access policy.

The definition of a PCFG mapping contains the following:

-   A comma-separated list after the name pfcg\_mapping in which the output fields of the PFCG mapping are defined. These fields must be elements of the CDS entity mapping\_entity specified after BETWEEN. The specified order applies.

-   A CDS entity mapping\_entity specified after the keyword BETWEEN to define the fields used in the mapping. This definition specifies the input and output fields of the mapping.

-   An [authorization object](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenauthorization_object_glosry.htm "Glossary Entry") auth\_object specified after the keyword AND. The PFCG mapping can be [used](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abencds_f1_cond_pfcg_mapping.htm) in precisely those [PFCG conditions](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abencds_f1_cond_pfcg.htm) in which this authorization object is specified after ASPECT pfcg\_auth.

-   A comma-separated unordered list in curly brackets that associates the input fields input1, input2, ... of the mapping with [authorization fields](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenauthorization_field_glosry.htm "Glossary Entry") auth\_field of the authorization object auth\_object.

-   The input fields on the left sides must be elements of the CDS entity mapping\_entity specified after BETWEEN.

-   Authorization fields of the authorization object auth\_object must be specified on the right sides.

-   Any number of optional assignments can be flagged using the addition CONSTRAINT ID.

A PFCG mapping can be [used](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abencds_f1_cond_pfcg_mapping.htm) in a [PFCG](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abencds_f1_cond_pfcg.htm) condition of the same authorization object. It is transformed to specific access conditions as follows when the condition is evaluated:

-   The values of the current user for the authorization fields assigned to the input fields fill the input fields of the mapping.

-   The output fields of the mapping are assigned to the elements within the [curly brackets](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abencds_f1_cond_pfcg_mapping.htm) of the PFCG condition in the specified order.

-   The following applies to the input fields flagged with CONSTRAINT ID:

-   Only those authorization fields of the authorization object can be assigned that contain a single value in a specific authorization. Multiple values or patterns are not allowed (with the exception of full authorization using the value "\*"). Otherwise the PFCG mapping in the PFCG condition returns the value "false" for the authorization in question.

-   Full authorization can be assigned only when applied to all input fields of the PFCG mapping.

-   If full authorization exists for all input fields of the PFCG mapping (value "\*"), the PFCG mapping in the PFCG condition returns the value "true" when evaluated. This makes it possible to read entries of the protected entity for which there are no output fields in the mapping.

Addition

... IN SCENARIO

To use a PFCG mapping in a PFCG condition where the authorization object is subject to the switchable authorization check, the PFCG mapping must also name the same scenario (as well as the same authorization object). For more information, see the [PFCG condition](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abencds_f1_cond_pfcg.htm) of the statement DEFINE ROLE.

Note

In ABAP SQL access to a CDS entity assigned a role of this type, PFCG mappings are defined internally using a subquery after EXISTS. This can be seen in an [SQL trace](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abensql_trace_glosry.htm "Glossary Entry").

Example

The following example shows the definition of a PFCG mapping demo\_cds\_auth\_pfcg\_mapping based on the CDS entity demo\_cds\_mapping\_entity below. The output fields of the PFCG mapping are the authorization fields OBJECT, OBJ\_NAME, and DEVCLASS of the authorization object S\_DEVELOP. The input fields of the PFCG mapping are the elements of the CDS entity to which the output fields are assigned. The [example](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abencds_f1_cond_pfcg_mapping.htm) that demonstrates how a PFCG mapping is specified in a role shows how the mapping is used.

-   PFCG Mapping

define accesspolicy demo\_cds\_pfcg\_mapping  {
  define pfcg\_mapping demo\_cds\_pfcg\_mapping( map\_object,  
                                             map\_obj\_name,  
                                             map\_devclass )
    between demo\_cds\_mapping\_entity
      and S\_DEVELOP
      { map\_devclass = devclass,
        map\_object   = objtype,
        map\_obj\_name = objname } }

-   CDS Entity

@AbapCatalog.sqlViewName: 'DEMOCDSMAPPENT'
define view demo\_cds\_mapping\_entity
  as select from
    tadir
    {
      devclass as map\_devclass,
      object   as map\_object,
      obj\_name as map\_obj\_name
    }
    where
          devclass =    'SABAPDEMOS'
      and object   =    'PROG'
      and obj\_name like 'DEMO%'

Continue
[ABAP CDS - DEFINE PFCG\_MAPPING, pfcg\_mapping\_annot](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abencds_f1_dcl_pm_annotations.htm)



**📖 Source**: [abencds_f1_define_pfcg_mapping.htm](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abencds_f1_define_pfcg_mapping.htm)

### abencds_f1_dcl_pm_annotations.htm

> **📖 Official SAP Documentation**: [abencds_f1_dcl_pm_annotations.htm](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abencds_f1_dcl_pm_annotations.htm)
> **🔍 Direct Link**: This section contains the complete content from the official SAP ABAP documentation page.


  

* * *

AS ABAP Release 754, ©Copyright 2019 SAP SE. All rights reserved.

[ABAP Keyword Documentation](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenabap.htm) →  [ABAP - Dictionary](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenabap_dictionary.htm) →  [ABAP CDS in ABAP Dictionary](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abencds.htm) →  [ABAP CDS - Access Control](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abencds_authorizations.htm) →  [ABAP CDS - DCL Statements](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abencds_f1_dcl_syntax.htm) →  [ABAP CDS - DEFINE ACCESSPOLICY](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abencds_f1_define_accesspolicy.htm) →  [ABAP CDS - DEFINE PFCG\_MAPPING](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abencds_f1_define_pfcg_mapping.htm) → 

ABAP CDS - DEFINE PFCG\_MAPPING, pfcg\_mapping\_annot

Syntax

... @[annotation](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abencds_annotations.htm) ...

Effect

Specifies an [annotation](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abencds_annotation_glosry.htm "Glossary Entry") [annotation](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abencds_annotations_syntax.htm) as a PFCG mapping annotation in front of the statement [PFCG\_MAPPING](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abencds_f1_define_pfcg_mapping.htm) in the definition of a [CDS PFCG mapping](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abencds_pfcg_mapping_glosry.htm "Glossary Entry"). The character @ must be placed in front of the name annotation of the annotation. The annotation must be defined as a CDS object in a [CDS annotation definition](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abencds_anno_definition_glosry.htm "Glossary Entry") and the annotation definition annotation [@Scope](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abencds_f1_define_anno_annos.htm) must be specified here using the value #ROLE.

The table below shows the possible [ABAP annotations](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abencore_annotation_glosry.htm "Glossary Entry") that can be specified, and their meanings. No other annotations can be specified.

-   [EndUserText Annotations](#abencds-f1-dcl-pm-annotations-1---the-first-column-of-the-table-displays-the--possibly-structured--name-annotation-of-an-abap-annotation-and-the-second-column-displays-its-meaning--the-third-column-shows-the-possible--annotation-values--javascript-call-link---abenannotation-value-glosry-htm-----glossary-entry----the-fourth-column-shows-the-value-set-implicitly-for-the-annotation-value-if-the-annotation-is-not-used-explicitly--the-fifth-column-displays-the-default-value-set-implicitly-for-value-in-accordance-with-the--annotation-definition--javascript-call-link---abencds-anno-definition-glosry-htm-----glossary-entry---if-the-annotation-is-specified-without-a-value--if-nothing-is-specified-for-the-annotation-value--the-annotation-should-be-specified-without-a-value---endusertext-annotations--translatable-texts-of-the-cds-role---annotation--meaning--annotation-values--default-value-if-not-used--default-value-if-used-without-value--endusertext-label--translatable-short-text-of-the-pfcg-mapping--character-string-with-maximum-60-characters----------note--abap-annotations-introduced-using-endusertext-are-used-to-define-translatable-semantic-texts-for-a--cds-object--javascript-call-link---abencds-object-glosry-htm-----glossary-entry----the-value-of-an-annotation-like-this-is-saved-in-special-tables-that-have-a-language-key-and-that-are-translatable--the-value-specified-in-the-source-code-should-consist-of-text-in-the-original-language-of-the-cds-source-code-and-is-translated-into-the-required-languages--------abencds-f1-define-pfcg-mapping-htm-------------as-abap-release-754---copyright-2019-sap-se--all-rights-reserved----abap-keyword-documentation--javascript-call-link---abenabap-htm---------abap---dictionary--javascript-call-link---abenabap-dictionary-htm---------abap-cds-in-abap-dictionary--javascript-call-link---abencds-htm---------abap-cds---access-control--javascript-call-link---abencds-authorizations-htm---------abap-cds---dcl-statements--javascript-call-link---abencds-f1-dcl-syntax-htm---------abap-cds---define-accesspolicy--javascript-call-link---abencds-f1-define-accesspolicy-htm---------abap-cds---define-pfcg--mapping--syntax-------pfcg--mapping--annot--javascript-call-link---abencds-f1-dcl-pm-annotations-htm-------------define-----pfcg--mapping-pfcg--mapping-output1------output2------------between-mapping--entity-and-auth--object-----in-scenario-scenario--name---------input1---auth--field1-----constraint-id--------------input2---auth--field2-----constraint-id-----------------effect--defines-a--pfcg-mapping--javascript-call-link---abencds-pfcg-mapping-glosry-htm-----glossary-entry---pfcg--mapping-as-part-of-a--cds-access-policy--javascript-call-link---abencds-access-policy-glosry-htm-----glossary-entry---defined-using--define-accesspolicy--javascript-call-link---abencds-f1-define-accesspolicy-htm------the-name-of-the-pfcg-mapping-must-match-the-name-of-the-cds-access-policy---the-definition-of-a-pcfg-mapping-contains-the-following-------a-comma-separated-list-after-the-name-pfcg--mapping-in-which-the-output-fields-of-the-pfcg-mapping-are-defined--these-fields-must-be-elements-of-the-cds-entity-mapping--entity-specified-after-between--the-specified-order-applies-------a-cds-entity-mapping--entity-specified-after-the-keyword-between-to-define-the-fields-used-in-the-mapping--this-definition-specifies-the-input-and-output-fields-of-the-mapping-------an--authorization-object--javascript-call-link---abenauthorization-object-glosry-htm-----glossary-entry---auth--object-specified-after-the-keyword-and--the-pfcg-mapping-can-be--used--javascript-call-link---abencds-f1-cond-pfcg-mapping-htm-----in-precisely-those--pfcg-conditions--javascript-call-link---abencds-f1-cond-pfcg-htm-----in-which-this-authorization-object-is-specified-after-aspect-pfcg--auth-------a-comma-separated-unordered-list-in-curly-brackets-that-associates-the-input-fields-input1--input2------of-the-mapping-with--authorization-fields--javascript-call-link---abenauthorization-field-glosry-htm-----glossary-entry---auth--field-of-the-authorization-object-auth--object-------the-input-fields-on-the-left-sides-must-be-elements-of-the-cds-entity-mapping--entity-specified-after-between-------authorization-fields-of-the-authorization-object-auth--object-must-be-specified-on-the-right-sides-------any-number-of-optional-assignments-can-be-flagged-using-the-addition-constraint-id---a-pfcg-mapping-can-be--used--javascript-call-link---abencds-f1-cond-pfcg-mapping-htm-----in-a--pfcg--javascript-call-link---abencds-f1-cond-pfcg-htm-----condition-of-the-same-authorization-object--it-is-transformed-to-specific-access-conditions-as-follows-when-the-condition-is-evaluated-------the-values-of-the-current-user-for-the-authorization-fields-assigned-to-the-input-fields-fill-the-input-fields-of-the-mapping-------the-output-fields-of-the-mapping-are-assigned-to-the-elements-within-the--curly-brackets--javascript-call-link---abencds-f1-cond-pfcg-mapping-htm-----of-the-pfcg-condition-in-the-specified-order-------the-following-applies-to-the-input-fields-flagged-with-constraint-id-------only-those-authorization-fields-of-the-authorization-object-can-be-assigned-that-contain-a-single-value-in-a-specific-authorization--multiple-values-or-patterns-are-not-allowed--with-the-exception-of-full-authorization-using-the-value--------otherwise-the-pfcg-mapping-in-the-pfcg-condition-returns-the-value--false--for-the-authorization-in-question-------full-authorization-can-be-assigned-only-when-applied-to-all-input-fields-of-the-pfcg-mapping-------if-full-authorization-exists-for-all-input-fields-of-the-pfcg-mapping--value--------the-pfcg-mapping-in-the-pfcg-condition-returns-the-value--true--when-evaluated--this-makes-it-possible-to-read-entries-of-the-protected-entity-for-which-there-are-no-output-fields-in-the-mapping---addition------in-scenario--to-use-a-pfcg-mapping-in-a-pfcg-condition-where-the-authorization-object-is-subject-to-the-switchable-authorization-check--the-pfcg-mapping-must-also-name-the-same-scenario--as-well-as-the-same-authorization-object---for-more-information--see-the--pfcg-condition--javascript-call-link---abencds-f1-cond-pfcg-htm-----of-the-statement-define-role---note--in-abap-sql-access-to-a-cds-entity-assigned-a-role-of-this-type--pfcg-mappings-are-defined-internally-using-a-subquery-after-exists--this-can-be-seen-in-an--sql-trace--javascript-call-link---abensql-trace-glosry-htm-----glossary-entry-----example--the-following-example-shows-the-definition-of-a-pfcg-mapping-demo--cds--auth--pfcg--mapping-based-on-the-cds-entity-demo--cds--mapping--entity-below--the-output-fields-of-the-pfcg-mapping-are-the-authorization-fields-object--obj--name--and-devclass-of-the-authorization-object-s--develop--the-input-fields-of-the-pfcg-mapping-are-the-elements-of-the-cds-entity-to-which-the-output-fields-are-assigned--the--example--javascript-call-link---abencds-f1-cond-pfcg-mapping-htm-----that-demonstrates-how-a-pfcg-mapping-is-specified-in-a-role-shows-how-the-mapping-is-used-------pfcg-mapping--define-accesspolicy-demo--cds--pfcg--mapping------define-pfcg--mapping-demo--cds--pfcg--mapping--map--object-------------------------------------------------map--obj--name-------------------------------------------------map--devclass-------between-demo--cds--mapping--entity-------and-s--develop---------map--devclass---devclass----------map--object-----objtype----------map--obj--name---objname----------cds-entity--AbapCatalog.sqlViewName: 'DEMOCDSMAPPENT'
define view demo\_cds\_mapping\_entity
  as select from
    tadir
    {
      devclass as map\_devclass,
      object   as map\_object,
      obj\_name as map\_obj\_name
    }
    where
          devclass =    'SABAPDEMOS'
      and object   =    'PROG'
      and obj\_name like 'DEMO%'

Continue
[ABAP CDS - DEFINE PFCG\_MAPPING, pfcg\_mapping\_annot](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abencds_f1_dcl_pm_annotations.htm)



**📖 Source**: [abencds_f1_dcl_pm_annotations.htm](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abencds_f1_dcl_pm_annotations.htm)

### abencds_f1_define_generic_aspect.htm

> **📖 Official SAP Documentation**: [abencds_f1_define_generic_aspect.htm](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abencds_f1_define_generic_aspect.htm)
> **🔍 Direct Link**: This section contains the complete content from the official SAP ABAP documentation page.


  

* * *

AS ABAP Release 754, ©Copyright 2019 SAP SE. All rights reserved.

[ABAP Keyword Documentation](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenabap.htm) →  [ABAP - Dictionary](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenabap_dictionary.htm) →  [ABAP CDS in ABAP Dictionary](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abencds.htm) →  [ABAP CDS - Access Control](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abencds_authorizations.htm) →  [ABAP CDS - DCL Statements](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abencds_f1_dcl_syntax.htm) →  [ABAP CDS - DEFINE ACCESSPOLICY](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abencds_f1_define_accesspolicy.htm) → 

ABAP CDS - DEFINE ASPECT

Syntax

*\[*DEFINE*\]* ASPECT generic\_aspect AS SELECT FROM aspect\_entity
  WITH USER ELEMENT user\_element
{
    output1 *\[*BYPASS WHEN aspect\_bypass\_condition*\]*
    *\[*, ... *\]*
}

Effect

Defines a generic aspect generic\_aspect as part of a [CDS access policy](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abencds_access_policy_glosry.htm "Glossary Entry") defined using [DEFINE ACCESSPOLICY](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abencds_f1_define_accesspolicy.htm). The name of the generic aspect must be the same as the name of the CDS access policy.

The definition of a generic aspect contains the following:

-   An aspect entity aspect\_entity, specified after the name generic\_aspect, which is used as a data source.

-   An element user\_element of the aspect entity that is used as an input field for the user name of the logged on user.

-   A comma-separated list that specifies the output fields output1, output2, ... of the generic aspect. The specified order applies.

-   Any number of output fields that can be tagged with a condition using the addition BYPASS WHEN aspect\_bypass\_condition. Typical bypass values are \* or an empty value. The following are possible as aspect bypass conditions aspect\_bypass\_condition: [IS NULL](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abencds_cond_expr_null.htm) *|* [IS *\[*NOT*\]* NULL](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abencds_cond_expr_initial.htm) *|* \= [Literal](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abencds_f1_literal.htm)

At runtime, the field user\_element is filled with the user name of the current user. The rows produced in the aspect entity are matched with their output fields in the specified order and with the elements on the left side of the access condition to which the generic aspect is assigned. This means those rows in the protected entity meet the condition for which a row exists for the current user in the aspect entity.

When the bypass condition is used, the match with this field is not used if this condition exists in a row of the aspect entity. A specified value, therefore, (such as an asterisk) can be used to indicate that any values of the protected entity are allowed.

Special Requirements in the Aspect Entity

The content of the aspect entity has a particular relevance for audits by being used in a generic aspect in access control.

To determine which user had access to particular data at a particular time in a system, it must be possible to reconstruct the state of the data of the aspect entity. Existing mechanisms (such as version management or change documents) cover this requirement in the case of development objects or PFCG roles, aspect entities do not specify their data sources and whether these sources are themselves auditable.

The development and runtime systems for CDS access control cannot check whether data sources are auditable. To highlight this requirement, however, the aspect entity must have the following annotations:

-   An auditing type with the annotation @AccessControl.auditing.type. Currently only the value #CUSTOM is possible.

-   A component with the annotation @AccessControl.auditing.specification specifying (as text) how the content of the entity is audited.
    

Notes

-   Just adding the annotations, however, does not activate auditing. It must first be ensure that auditing is actually possible.

-   Auditing must respect all data sources of the aspect entity.

-   If auditing cannot be ensured, the aspect entity cannot be used in a generic aspect.

-   In ABAP SQL access to a CDS entity assigned a role of this type, generic aspects are defined internally using a [subquery](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abensubquery_glosry.htm "Glossary Entry") after EXISTS. This can be seen in an SQL trace.


---


## ABAP Keyword Documentation / ABAP - Dictionary / ABAP CDS in ABAP Dictionary / ABAP CDS - Access Control / ABAP CDS - DCL Statements / ABAP CDS - DEFINE ROLE / ABAP CDS - DEFINE ROLE, condition / ABAP CDS - DEFINE ROLE, pfcg_condition

**Files**: 3 | **Difficulty**: advanced

# ABAP Keyword Documentation / ABAP - Dictionary / ABAP CDS in ABAP Dictionary / ABAP CDS - Access Control / ABAP CDS - DCL Statements / ABAP CDS - DEFINE ACCESSPOLICY

Included pages: 6



**📖 Source**: [abencds_f1_define_generic_aspect.htm](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abencds_f1_define_generic_aspect.htm)

### abencds_f1_define_accesspolicy.htm

> **📖 Official SAP Documentation**: [abencds_f1_define_accesspolicy.htm](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abencds_f1_define_accesspolicy.htm)
> **🔍 Direct Link**: This section contains the complete content from the official SAP ABAP documentation page.


  

* * *

AS ABAP Release 754, ©Copyright 2019 SAP SE. All rights reserved.

[ABAP Keyword Documentation](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenabap.htm) →  [ABAP - Dictionary](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenabap_dictionary.htm) →  [ABAP CDS in ABAP Dictionary](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abencds.htm) →  [ABAP CDS - Access Control](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abencds_authorizations.htm) →  [ABAP CDS - DCL Statements](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abencds_f1_dcl_syntax.htm) → 

ABAP CDS - DEFINE ACCESSPOLICY

Syntax

*\[*[@access\_policy\_annot](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abencds_f1_dcl_ap_annotations.htm)*\]*
*\[*DEFINE*\]* ACCESSPOLICY access\_policy {
  [pfcg\_mapping\_definition](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abencds_f1_define_pfcg_mapping.htm) *|* generic\_aspect\_definition
}

Effect

Defines a [CDS access policy](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abencds_access_policy_glosry.htm "Glossary Entry") access\_policy in the [CDS DCL](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abencds_dcl_glosry.htm "Glossary Entry") to be used as a framework for further definitions.

An ACCESSPOLICY contains the definition of one of the following objects (which must have the same name as the access policy):

-   A [PFCG mapping](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abencds_pfcg_mapping_glosry.htm "Glossary Entry") [DEFINE PFCG\_MAPPING](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abencds_f1_define_pfcg_mapping.htm)

-   A generic aspect DEFINE GENERIC\_ASPECT.

DEFINE ACCESSPOLICY can be used to specify the optional annotation [@access\_policy\_annot](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abencds_f1_dcl_ap_annotations.htm) in front of the actual definition of the access policy.

Notes

-   Separate [DCL source code](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abendcl_source_code_glosry.htm "Glossary Entry") must be created for each CDS access policy.

-   The [DCL source code](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abendcl_source_code_glosry.htm "Glossary Entry") of a CDS access policy must have the same name as this policy.

Continue
[ABAP CDS - DEFINE ACCESSPOLICY, access\_policy\_annot](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abencds_f1_dcl_ap_annotations.htm)
[ABAP CDS - DEFINE PFCG\_MAPPING](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abencds_f1_define_pfcg_mapping.htm)
[ABAP CDS - DEFINE ASPECT](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abencds_f1_define_generic_aspect.htm)



**📖 Source**: [abencds_f1_define_accesspolicy.htm](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abencds_f1_define_accesspolicy.htm)

### abencds_f1_dcl_ap_annotations.htm

> **📖 Official SAP Documentation**: [abencds_f1_dcl_ap_annotations.htm](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abencds_f1_dcl_ap_annotations.htm)
> **🔍 Direct Link**: This section contains the complete content from the official SAP ABAP documentation page.


  

* * *

AS ABAP Release 754, ©Copyright 2019 SAP SE. All rights reserved.

[ABAP Keyword Documentation](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenabap.htm) →  [ABAP - Dictionary](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenabap_dictionary.htm) →  [ABAP CDS in ABAP Dictionary](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abencds.htm) →  [ABAP CDS - Access Control](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abencds_authorizations.htm) →  [ABAP CDS - DCL Statements](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abencds_f1_dcl_syntax.htm) →  [ABAP CDS - DEFINE ACCESSPOLICY](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abencds_f1_define_accesspolicy.htm) → 

ABAP CDS - DEFINE ACCESSPOLICY, access\_policy\_annot

Syntax

... @[annotation](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abencds_annotations.htm) ...

Effect

Specifies an [annotation](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abencds_annotation_glosry.htm "Glossary Entry") [annotation](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abencds_annotations_syntax.htm) as an access policy annotation in the definition of a [CDS access policy](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abencds_access_policy_glosry.htm "Glossary Entry") in front of the statement [DEFINE ACCESSPOLICY](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abencds_f1_define_accesspolicy.htm). The character @ must be placed directly in front of the name annotation of the annotation. The annotation must be defined as a CDS object in a [CDS annotation definition](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abencds_anno_definition_glosry.htm "Glossary Entry") and the annotation [@Scope](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abencds_f1_define_anno_annos.htm) must be specified here using the value #ROLE.

The table below shows the possible [ABAP annotations](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abencore_annotation_glosry.htm "Glossary Entry") that can be specified, and their meanings. No other annotations can be specified.

The first column of the table displays the (possibly structured) name annotation of an ABAP annotation and the second column displays its meaning. The third column shows the possible [annotation values](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenannotation_value_glosry.htm "Glossary Entry"). The fourth column shows the value set implicitly for the annotation value if the annotation is not used explicitly. The fifth column displays the default value set implicitly for value in accordance with the [annotation definition](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abencds_anno_definition_glosry.htm "Glossary Entry") if the annotation is specified without a value. If nothing is specified for the annotation value, the annotation should be specified without a value.

EndUserText Annotations

Translatable texts of the CDS role.

Annotation

Meaning

Annotation Values

Default Value if Not Used

Default Value if Used Without Value

EndUserText.label

Translatable short text of the CDS access policy

Character string with maximum 60 characters

\-

\-

Note

ABAP annotations introduced using EndUserText are used to define translatable semantic texts for a [CDS object](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abencds_object_glosry.htm "Glossary Entry"). The value of an annotation like this is saved in special tables that have a language key and that are translatable. The value specified in the source code should consist of text in the original language of the CDS source code and is translated into the required languages.



**📖 Source**: [abencds_f1_dcl_ap_annotations.htm](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abencds_f1_dcl_ap_annotations.htm)

### abencds_f1_define_pfcg_mapping.htm

> **📖 Official SAP Documentation**: [abencds_f1_define_pfcg_mapping.htm](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abencds_f1_define_pfcg_mapping.htm)
> **🔍 Direct Link**: This section contains the complete content from the official SAP ABAP documentation page.


  

* * *

AS ABAP Release 754, ©Copyright 2019 SAP SE. All rights reserved.

[ABAP Keyword Documentation](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenabap.htm) →  [ABAP - Dictionary](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenabap_dictionary.htm) →  [ABAP CDS in ABAP Dictionary](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abencds.htm) →  [ABAP CDS - Access Control](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abencds_authorizations.htm) →  [ABAP CDS - DCL Statements](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abencds_f1_dcl_syntax.htm) →  [ABAP CDS - DEFINE ACCESSPOLICY](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abencds_f1_define_accesspolicy.htm) → 

ABAP CDS - DEFINE PFCG\_MAPPING

Syntax

*\[*[pfcg\_mapping\_annot](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abencds_f1_dcl_pm_annotations.htm)*\]*
*\[*DEFINE*\]* PFCG\_MAPPING pfcg\_mapping(output1*\[*, output2 ...*\]*)
  BETWEEN mapping\_entity AND auth\_object *\[*IN SCENARIO scenario\_name*\]*
  { input1 = auth\_field1 *\[*CONSTRAINT ID*\]**\[*,
    input2 = auth\_field2 *\[*CONSTRAINT ID*\]* ... *\]* }

Effect

Defines a [PFCG mapping](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abencds_pfcg_mapping_glosry.htm "Glossary Entry") pfcg\_mapping as part of a [CDS access policy](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abencds_access_policy_glosry.htm "Glossary Entry") defined using [DEFINE ACCESSPOLICY](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abencds_f1_define_accesspolicy.htm). The name of the PFCG mapping must match the name of the CDS access policy.

The definition of a PCFG mapping contains the following:

-   A comma-separated list after the name pfcg\_mapping in which the output fields of the PFCG mapping are defined. These fields must be elements of the CDS entity mapping\_entity specified after BETWEEN. The specified order applies.

-   A CDS entity mapping\_entity specified after the keyword BETWEEN to define the fields used in the mapping. This definition specifies the input and output fields of the mapping.

-   An [authorization object](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenauthorization_object_glosry.htm "Glossary Entry") auth\_object specified after the keyword AND. The PFCG mapping can be [used](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abencds_f1_cond_pfcg_mapping.htm) in precisely those [PFCG conditions](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abencds_f1_cond_pfcg.htm) in which this authorization object is specified after ASPECT pfcg\_auth.

-   A comma-separated unordered list in curly brackets that associates the input fields input1, input2, ... of the mapping with [authorization fields](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenauthorization_field_glosry.htm "Glossary Entry") auth\_field of the authorization object auth\_object.

-   The input fields on the left sides must be elements of the CDS entity mapping\_entity specified after BETWEEN.

-   Authorization fields of the authorization object auth\_object must be specified on the right sides.

-   Any number of optional assignments can be flagged using the addition CONSTRAINT ID.

A PFCG mapping can be [used](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abencds_f1_cond_pfcg_mapping.htm) in a [PFCG](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abencds_f1_cond_pfcg.htm) condition of the same authorization object. It is transformed to specific access conditions as follows when the condition is evaluated:

-   The values of the current user for the authorization fields assigned to the input fields fill the input fields of the mapping.

-   The output fields of the mapping are assigned to the elements within the [curly brackets](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abencds_f1_cond_pfcg_mapping.htm) of the PFCG condition in the specified order.

-   The following applies to the input fields flagged with CONSTRAINT ID:

-   Only those authorization fields of the authorization object can be assigned that contain a single value in a specific authorization. Multiple values or patterns are not allowed (with the exception of full authorization using the value "\*"). Otherwise the PFCG mapping in the PFCG condition returns the value "false" for the authorization in question.

-   Full authorization can be assigned only when applied to all input fields of the PFCG mapping.

-   If full authorization exists for all input fields of the PFCG mapping (value "\*"), the PFCG mapping in the PFCG condition returns the value "true" when evaluated. This makes it possible to read entries of the protected entity for which there are no output fields in the mapping.

Addition

... IN SCENARIO

To use a PFCG mapping in a PFCG condition where the authorization object is subject to the switchable authorization check, the PFCG mapping must also name the same scenario (as well as the same authorization object). For more information, see the [PFCG condition](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abencds_f1_cond_pfcg.htm) of the statement DEFINE ROLE.

Note

In ABAP SQL access to a CDS entity assigned a role of this type, PFCG mappings are defined internally using a subquery after EXISTS. This can be seen in an [SQL trace](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abensql_trace_glosry.htm "Glossary Entry").

Example

The following example shows the definition of a PFCG mapping demo\_cds\_auth\_pfcg\_mapping based on the CDS entity demo\_cds\_mapping\_entity below. The output fields of the PFCG mapping are the authorization fields OBJECT, OBJ\_NAME, and DEVCLASS of the authorization object S\_DEVELOP. The input fields of the PFCG mapping are the elements of the CDS entity to which the output fields are assigned. The [example](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abencds_f1_cond_pfcg_mapping.htm) that demonstrates how a PFCG mapping is specified in a role shows how the mapping is used.

-   PFCG Mapping

define accesspolicy demo\_cds\_pfcg\_mapping  {
  define pfcg\_mapping demo\_cds\_pfcg\_mapping( map\_object,  
                                             map\_obj\_name,  
                                             map\_devclass )
    between demo\_cds\_mapping\_entity
      and S\_DEVELOP
      { map\_devclass = devclass,
        map\_object   = objtype,
        map\_obj\_name = objname } }

-   CDS Entity

@AbapCatalog.sqlViewName: 'DEMOCDSMAPPENT'
define view demo\_cds\_mapping\_entity
  as select from
    tadir
    {
      devclass as map\_devclass,
      object   as map\_object,
      obj\_name as map\_obj\_name
    }
    where
          devclass =    'SABAPDEMOS'
      and object   =    'PROG'
      and obj\_name like 'DEMO%'

Continue
[ABAP CDS - DEFINE PFCG\_MAPPING, pfcg\_mapping\_annot](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abencds_f1_dcl_pm_annotations.htm)



**📖 Source**: [abencds_f1_define_pfcg_mapping.htm](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abencds_f1_define_pfcg_mapping.htm)

### abencds_f1_dcl_pm_annotations.htm

> **📖 Official SAP Documentation**: [abencds_f1_dcl_pm_annotations.htm](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abencds_f1_dcl_pm_annotations.htm)
> **🔍 Direct Link**: This section contains the complete content from the official SAP ABAP documentation page.


  

* * *

AS ABAP Release 754, ©Copyright 2019 SAP SE. All rights reserved.

[ABAP Keyword Documentation](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenabap.htm) →  [ABAP - Dictionary](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenabap_dictionary.htm) →  [ABAP CDS in ABAP Dictionary](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abencds.htm) →  [ABAP CDS - Access Control](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abencds_authorizations.htm) →  [ABAP CDS - DCL Statements](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abencds_f1_dcl_syntax.htm) →  [ABAP CDS - DEFINE ACCESSPOLICY](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abencds_f1_define_accesspolicy.htm) →  [ABAP CDS - DEFINE PFCG\_MAPPING](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abencds_f1_define_pfcg_mapping.htm) → 

ABAP CDS - DEFINE PFCG\_MAPPING, pfcg\_mapping\_annot

Syntax

... @[annotation](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abencds_annotations.htm) ...

Effect

Specifies an [annotation](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abencds_annotation_glosry.htm "Glossary Entry") [annotation](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abencds_annotations_syntax.htm) as a PFCG mapping annotation in front of the statement [PFCG\_MAPPING](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abencds_f1_define_pfcg_mapping.htm) in the definition of a [CDS PFCG mapping](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abencds_pfcg_mapping_glosry.htm "Glossary Entry"). The character @ must be placed in front of the name annotation of the annotation. The annotation must be defined as a CDS object in a [CDS annotation definition](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abencds_anno_definition_glosry.htm "Glossary Entry") and the annotation definition annotation [@Scope](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abencds_f1_define_anno_annos.htm) must be specified here using the value #ROLE.

The table below shows the possible [ABAP annotations](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abencore_annotation_glosry.htm "Glossary Entry") that can be specified, and their meanings. No other annotations can be specified.

-   [EndUserText Annotations](#abencds-f1-dcl-pm-annotations-1---the-first-column-of-the-table-displays-the--possibly-structured--name-annotation-of-an-abap-annotation-and-the-second-column-displays-its-meaning--the-third-column-shows-the-possible--annotation-values--javascript-call-link---abenannotation-value-glosry-htm-----glossary-entry----the-fourth-column-shows-the-value-set-implicitly-for-the-annotation-value-if-the-annotation-is-not-used-explicitly--the-fifth-column-displays-the-default-value-set-implicitly-for-value-in-accordance-with-the--annotation-definition--javascript-call-link---abencds-anno-definition-glosry-htm-----glossary-entry---if-the-annotation-is-specified-without-a-value--if-nothing-is-specified-for-the-annotation-value--the-annotation-should-be-specified-without-a-value---endusertext-annotations--translatable-texts-of-the-cds-role---annotation--meaning--annotation-values--default-value-if-not-used--default-value-if-used-without-value--endusertext-label--translatable-short-text-of-the-pfcg-mapping--character-string-with-maximum-60-characters----------note--abap-annotations-introduced-using-endusertext-are-used-to-define-translatable-semantic-texts-for-a--cds-object--javascript-call-link---abencds-object-glosry-htm-----glossary-entry----the-value-of-an-annotation-like-this-is-saved-in-special-tables-that-have-a-language-key-and-that-are-translatable--the-value-specified-in-the-source-code-should-consist-of-text-in-the-original-language-of-the-cds-source-code-and-is-translated-into-the-required-languages--------abencds-f1-define-pfcg-mapping-htm-------------as-abap-release-754---copyright-2019-sap-se--all-rights-reserved----abap-keyword-documentation--javascript-call-link---abenabap-htm---------abap---dictionary--javascript-call-link---abenabap-dictionary-htm---------abap-cds-in-abap-dictionary--javascript-call-link---abencds-htm---------abap-cds---access-control--javascript-call-link---abencds-authorizations-htm---------abap-cds---dcl-statements--javascript-call-link---abencds-f1-dcl-syntax-htm---------abap-cds---define-accesspolicy--javascript-call-link---abencds-f1-define-accesspolicy-htm---------abap-cds---define-pfcg--mapping--syntax-------pfcg--mapping--annot--javascript-call-link---abencds-f1-dcl-pm-annotations-htm-------------define-----pfcg--mapping-pfcg--mapping-output1------output2------------between-mapping--entity-and-auth--object-----in-scenario-scenario--name---------input1---auth--field1-----constraint-id--------------input2---auth--field2-----constraint-id-----------------effect--defines-a--pfcg-mapping--javascript-call-link---abencds-pfcg-mapping-glosry-htm-----glossary-entry---pfcg--mapping-as-part-of-a--cds-access-policy--javascript-call-link---abencds-access-policy-glosry-htm-----glossary-entry---defined-using--define-accesspolicy--javascript-call-link---abencds-f1-define-accesspolicy-htm------the-name-of-the-pfcg-mapping-must-match-the-name-of-the-cds-access-policy---the-definition-of-a-pcfg-mapping-contains-the-following-------a-comma-separated-list-after-the-name-pfcg--mapping-in-which-the-output-fields-of-the-pfcg-mapping-are-defined--these-fields-must-be-elements-of-the-cds-entity-mapping--entity-specified-after-between--the-specified-order-applies-------a-cds-entity-mapping--entity-specified-after-the-keyword-between-to-define-the-fields-used-in-the-mapping--this-definition-specifies-the-input-and-output-fields-of-the-mapping-------an--authorization-object--javascript-call-link---abenauthorization-object-glosry-htm-----glossary-entry---auth--object-specified-after-the-keyword-and--the-pfcg-mapping-can-be--used--javascript-call-link---abencds-f1-cond-pfcg-mapping-htm-----in-precisely-those--pfcg-conditions--javascript-call-link---abencds-f1-cond-pfcg-htm-----in-which-this-authorization-object-is-specified-after-aspect-pfcg--auth-------a-comma-separated-unordered-list-in-curly-brackets-that-associates-the-input-fields-input1--input2------of-the-mapping-with--authorization-fields--javascript-call-link---abenauthorization-field-glosry-htm-----glossary-entry---auth--field-of-the-authorization-object-auth--object-------the-input-fields-on-the-left-sides-must-be-elements-of-the-cds-entity-mapping--entity-specified-after-between-------authorization-fields-of-the-authorization-object-auth--object-must-be-specified-on-the-right-sides-------any-number-of-optional-assignments-can-be-flagged-using-the-addition-constraint-id---a-pfcg-mapping-can-be--used--javascript-call-link---abencds-f1-cond-pfcg-mapping-htm-----in-a--pfcg--javascript-call-link---abencds-f1-cond-pfcg-htm-----condition-of-the-same-authorization-object--it-is-transformed-to-specific-access-conditions-as-follows-when-the-condition-is-evaluated-------the-values-of-the-current-user-for-the-authorization-fields-assigned-to-the-input-fields-fill-the-input-fields-of-the-mapping-------the-output-fields-of-the-mapping-are-assigned-to-the-elements-within-the--curly-brackets--javascript-call-link---abencds-f1-cond-pfcg-mapping-htm-----of-the-pfcg-condition-in-the-specified-order-------the-following-applies-to-the-input-fields-flagged-with-constraint-id-------only-those-authorization-fields-of-the-authorization-object-can-be-assigned-that-contain-a-single-value-in-a-specific-authorization--multiple-values-or-patterns-are-not-allowed--with-the-exception-of-full-authorization-using-the-value--------otherwise-the-pfcg-mapping-in-the-pfcg-condition-returns-the-value--false--for-the-authorization-in-question-------full-authorization-can-be-assigned-only-when-applied-to-all-input-fields-of-the-pfcg-mapping-------if-full-authorization-exists-for-all-input-fields-of-the-pfcg-mapping--value--------the-pfcg-mapping-in-the-pfcg-condition-returns-the-value--true--when-evaluated--this-makes-it-possible-to-read-entries-of-the-protected-entity-for-which-there-are-no-output-fields-in-the-mapping---addition------in-scenario--to-use-a-pfcg-mapping-in-a-pfcg-condition-where-the-authorization-object-is-subject-to-the-switchable-authorization-check--the-pfcg-mapping-must-also-name-the-same-scenario--as-well-as-the-same-authorization-object---for-more-information--see-the--pfcg-condition--javascript-call-link---abencds-f1-cond-pfcg-htm-----of-the-statement-define-role---note--in-abap-sql-access-to-a-cds-entity-assigned-a-role-of-this-type--pfcg-mappings-are-defined-internally-using-a-subquery-after-exists--this-can-be-seen-in-an--sql-trace--javascript-call-link---abensql-trace-glosry-htm-----glossary-entry-----example--the-following-example-shows-the-definition-of-a-pfcg-mapping-demo--cds--auth--pfcg--mapping-based-on-the-cds-entity-demo--cds--mapping--entity-below--the-output-fields-of-the-pfcg-mapping-are-the-authorization-fields-object--obj--name--and-devclass-of-the-authorization-object-s--develop--the-input-fields-of-the-pfcg-mapping-are-the-elements-of-the-cds-entity-to-which-the-output-fields-are-assigned--the--example--javascript-call-link---abencds-f1-cond-pfcg-mapping-htm-----that-demonstrates-how-a-pfcg-mapping-is-specified-in-a-role-shows-how-the-mapping-is-used-------pfcg-mapping--define-accesspolicy-demo--cds--pfcg--mapping------define-pfcg--mapping-demo--cds--pfcg--mapping--map--object-------------------------------------------------map--obj--name-------------------------------------------------map--devclass-------between-demo--cds--mapping--entity-------and-s--develop---------map--devclass---devclass----------map--object-----objtype----------map--obj--name---objname----------cds-entity--AbapCatalog.sqlViewName: 'DEMOCDSMAPPENT'
define view demo\_cds\_mapping\_entity
  as select from
    tadir
    {
      devclass as map\_devclass,
      object   as map\_object,
      obj\_name as map\_obj\_name
    }
    where
          devclass =    'SABAPDEMOS'
      and object   =    'PROG'
      and obj\_name like 'DEMO%'

Continue
[ABAP CDS - DEFINE PFCG\_MAPPING, pfcg\_mapping\_annot](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abencds_f1_dcl_pm_annotations.htm)



**📖 Source**: [abencds_f1_dcl_pm_annotations.htm](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abencds_f1_dcl_pm_annotations.htm)

### abencds_f1_define_generic_aspect.htm

> **📖 Official SAP Documentation**: [abencds_f1_define_generic_aspect.htm](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abencds_f1_define_generic_aspect.htm)
> **🔍 Direct Link**: This section contains the complete content from the official SAP ABAP documentation page.


  

* * *

AS ABAP Release 754, ©Copyright 2019 SAP SE. All rights reserved.

[ABAP Keyword Documentation](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenabap.htm) →  [ABAP - Dictionary](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenabap_dictionary.htm) →  [ABAP CDS in ABAP Dictionary](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abencds.htm) →  [ABAP CDS - Access Control](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abencds_authorizations.htm) →  [ABAP CDS - DCL Statements](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abencds_f1_dcl_syntax.htm) →  [ABAP CDS - DEFINE ACCESSPOLICY](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abencds_f1_define_accesspolicy.htm) → 

ABAP CDS - DEFINE ASPECT

Syntax

*\[*DEFINE*\]* ASPECT generic\_aspect AS SELECT FROM aspect\_entity
  WITH USER ELEMENT user\_element
{
    output1 *\[*BYPASS WHEN aspect\_bypass\_condition*\]*
    *\[*, ... *\]*
}

Effect

Defines a generic aspect generic\_aspect as part of a [CDS access policy](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abencds_access_policy_glosry.htm "Glossary Entry") defined using [DEFINE ACCESSPOLICY](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abencds_f1_define_accesspolicy.htm). The name of the generic aspect must be the same as the name of the CDS access policy.

The definition of a generic aspect contains the following:

-   An aspect entity aspect\_entity, specified after the name generic\_aspect, which is used as a data source.

-   An element user\_element of the aspect entity that is used as an input field for the user name of the logged on user.

-   A comma-separated list that specifies the output fields output1, output2, ... of the generic aspect. The specified order applies.

-   Any number of output fields that can be tagged with a condition using the addition BYPASS WHEN aspect\_bypass\_condition. Typical bypass values are \* or an empty value. The following are possible as aspect bypass conditions aspect\_bypass\_condition: [IS NULL](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abencds_cond_expr_null.htm) *|* [IS *\[*NOT*\]* NULL](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abencds_cond_expr_initial.htm) *|* \= [Literal](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abencds_f1_literal.htm)

At runtime, the field user\_element is filled with the user name of the current user. The rows produced in the aspect entity are matched with their output fields in the specified order and with the elements on the left side of the access condition to which the generic aspect is assigned. This means those rows in the protected entity meet the condition for which a row exists for the current user in the aspect entity.

When the bypass condition is used, the match with this field is not used if this condition exists in a row of the aspect entity. A specified value, therefore, (such as an asterisk) can be used to indicate that any values of the protected entity are allowed.

Special Requirements in the Aspect Entity

The content of the aspect entity has a particular relevance for audits by being used in a generic aspect in access control.

To determine which user had access to particular data at a particular time in a system, it must be possible to reconstruct the state of the data of the aspect entity. Existing mechanisms (such as version management or change documents) cover this requirement in the case of development objects or PFCG roles, aspect entities do not specify their data sources and whether these sources are themselves auditable.

The development and runtime systems for CDS access control cannot check whether data sources are auditable. To highlight this requirement, however, the aspect entity must have the following annotations:

-   An auditing type with the annotation @AccessControl.auditing.type. Currently only the value #CUSTOM is possible.

-   A component with the annotation @AccessControl.auditing.specification specifying (as text) how the content of the entity is audited.
    

Notes

-   Just adding the annotations, however, does not activate auditing. It must first be ensure that auditing is actually possible.

-   Auditing must respect all data sources of the aspect entity.

-   If auditing cannot be ensured, the aspect entity cannot be used in a generic aspect.

-   In ABAP SQL access to a CDS entity assigned a role of this type, generic aspects are defined internally using a [subquery](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abensubquery_glosry.htm "Glossary Entry") after EXISTS. This can be seen in an SQL trace.


---


## ABAP Keyword Documentation / ABAP - Dictionary / ABAP CDS in ABAP Dictionary / ABAP CDS - Access Control / ABAP CDS - DCL Statements / ABAP CDS - DEFINE ACCESSPOLICY

**Files**: 6 | **Difficulty**: advanced

# ABAP Keyword Documentation / ABAP - Dictionary / ABAP CDS in ABAP Dictionary / ABAP CDS - Access Control / ABAP CDS - DCL Statements / ABAP CDS - DEFINE ACCESSPOLICY

Included pages: 6



**📖 Source**: [abencds_f1_define_generic_aspect.htm](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abencds_f1_define_generic_aspect.htm)

### abencds_f1_define_accesspolicy.htm

> **📖 Official SAP Documentation**: [abencds_f1_define_accesspolicy.htm](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abencds_f1_define_accesspolicy.htm)
> **🔍 Direct Link**: This section contains the complete content from the official SAP ABAP documentation page.


  

* * *

AS ABAP Release 754, ©Copyright 2019 SAP SE. All rights reserved.

[ABAP Keyword Documentation](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenabap.htm) →  [ABAP - Dictionary](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenabap_dictionary.htm) →  [ABAP CDS in ABAP Dictionary](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abencds.htm) →  [ABAP CDS - Access Control](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abencds_authorizations.htm) →  [ABAP CDS - DCL Statements](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abencds_f1_dcl_syntax.htm) → 

ABAP CDS - DEFINE ACCESSPOLICY

Syntax

*\[*[@access\_policy\_annot](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abencds_f1_dcl_ap_annotations.htm)*\]*
*\[*DEFINE*\]* ACCESSPOLICY access\_policy {
  [pfcg\_mapping\_definition](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abencds_f1_define_pfcg_mapping.htm) *|* generic\_aspect\_definition
}

Effect

Defines a [CDS access policy](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abencds_access_policy_glosry.htm "Glossary Entry") access\_policy in the [CDS DCL](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abencds_dcl_glosry.htm "Glossary Entry") to be used as a framework for further definitions.

An ACCESSPOLICY contains the definition of one of the following objects (which must have the same name as the access policy):

-   A [PFCG mapping](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abencds_pfcg_mapping_glosry.htm "Glossary Entry") [DEFINE PFCG\_MAPPING](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abencds_f1_define_pfcg_mapping.htm)

-   A generic aspect DEFINE GENERIC\_ASPECT.

DEFINE ACCESSPOLICY can be used to specify the optional annotation [@access\_policy\_annot](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abencds_f1_dcl_ap_annotations.htm) in front of the actual definition of the access policy.

Notes

-   Separate [DCL source code](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abendcl_source_code_glosry.htm "Glossary Entry") must be created for each CDS access policy.

-   The [DCL source code](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abendcl_source_code_glosry.htm "Glossary Entry") of a CDS access policy must have the same name as this policy.

Continue
[ABAP CDS - DEFINE ACCESSPOLICY, access\_policy\_annot](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abencds_f1_dcl_ap_annotations.htm)
[ABAP CDS - DEFINE PFCG\_MAPPING](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abencds_f1_define_pfcg_mapping.htm)
[ABAP CDS - DEFINE ASPECT](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abencds_f1_define_generic_aspect.htm)



**📖 Source**: [abencds_f1_define_accesspolicy.htm](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abencds_f1_define_accesspolicy.htm)

### abencds_f1_dcl_ap_annotations.htm

> **📖 Official SAP Documentation**: [abencds_f1_dcl_ap_annotations.htm](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abencds_f1_dcl_ap_annotations.htm)
> **🔍 Direct Link**: This section contains the complete content from the official SAP ABAP documentation page.


  

* * *

AS ABAP Release 754, ©Copyright 2019 SAP SE. All rights reserved.

[ABAP Keyword Documentation](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenabap.htm) →  [ABAP - Dictionary](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenabap_dictionary.htm) →  [ABAP CDS in ABAP Dictionary](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abencds.htm) →  [ABAP CDS - Access Control](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abencds_authorizations.htm) →  [ABAP CDS - DCL Statements](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abencds_f1_dcl_syntax.htm) →  [ABAP CDS - DEFINE ACCESSPOLICY](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abencds_f1_define_accesspolicy.htm) → 

ABAP CDS - DEFINE ACCESSPOLICY, access\_policy\_annot

Syntax

... @[annotation](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abencds_annotations.htm) ...

Effect

Specifies an [annotation](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abencds_annotation_glosry.htm "Glossary Entry") [annotation](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abencds_annotations_syntax.htm) as an access policy annotation in the definition of a [CDS access policy](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abencds_access_policy_glosry.htm "Glossary Entry") in front of the statement [DEFINE ACCESSPOLICY](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abencds_f1_define_accesspolicy.htm). The character @ must be placed directly in front of the name annotation of the annotation. The annotation must be defined as a CDS object in a [CDS annotation definition](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abencds_anno_definition_glosry.htm "Glossary Entry") and the annotation [@Scope](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abencds_f1_define_anno_annos.htm) must be specified here using the value #ROLE.

The table below shows the possible [ABAP annotations](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abencore_annotation_glosry.htm "Glossary Entry") that can be specified, and their meanings. No other annotations can be specified.

The first column of the table displays the (possibly structured) name annotation of an ABAP annotation and the second column displays its meaning. The third column shows the possible [annotation values](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenannotation_value_glosry.htm "Glossary Entry"). The fourth column shows the value set implicitly for the annotation value if the annotation is not used explicitly. The fifth column displays the default value set implicitly for value in accordance with the [annotation definition](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abencds_anno_definition_glosry.htm "Glossary Entry") if the annotation is specified without a value. If nothing is specified for the annotation value, the annotation should be specified without a value.

EndUserText Annotations

Translatable texts of the CDS role.

Annotation

Meaning

Annotation Values

Default Value if Not Used

Default Value if Used Without Value

EndUserText.label

Translatable short text of the CDS access policy

Character string with maximum 60 characters

\-

\-

Note

ABAP annotations introduced using EndUserText are used to define translatable semantic texts for a [CDS object](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abencds_object_glosry.htm "Glossary Entry"). The value of an annotation like this is saved in special tables that have a language key and that are translatable. The value specified in the source code should consist of text in the original language of the CDS source code and is translated into the required languages.



**📖 Source**: [abencds_f1_dcl_ap_annotations.htm](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abencds_f1_dcl_ap_annotations.htm)

### abencds_f1_define_pfcg_mapping.htm

> **📖 Official SAP Documentation**: [abencds_f1_define_pfcg_mapping.htm](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abencds_f1_define_pfcg_mapping.htm)
> **🔍 Direct Link**: This section contains the complete content from the official SAP ABAP documentation page.


  

* * *

AS ABAP Release 754, ©Copyright 2019 SAP SE. All rights reserved.

[ABAP Keyword Documentation](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenabap.htm) →  [ABAP - Dictionary](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenabap_dictionary.htm) →  [ABAP CDS in ABAP Dictionary](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abencds.htm) →  [ABAP CDS - Access Control](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abencds_authorizations.htm) →  [ABAP CDS - DCL Statements](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abencds_f1_dcl_syntax.htm) →  [ABAP CDS - DEFINE ACCESSPOLICY](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abencds_f1_define_accesspolicy.htm) → 

ABAP CDS - DEFINE PFCG\_MAPPING

Syntax

*\[*[pfcg\_mapping\_annot](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abencds_f1_dcl_pm_annotations.htm)*\]*
*\[*DEFINE*\]* PFCG\_MAPPING pfcg\_mapping(output1*\[*, output2 ...*\]*)
  BETWEEN mapping\_entity AND auth\_object *\[*IN SCENARIO scenario\_name*\]*
  { input1 = auth\_field1 *\[*CONSTRAINT ID*\]**\[*,
    input2 = auth\_field2 *\[*CONSTRAINT ID*\]* ... *\]* }

Effect

Defines a [PFCG mapping](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abencds_pfcg_mapping_glosry.htm "Glossary Entry") pfcg\_mapping as part of a [CDS access policy](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abencds_access_policy_glosry.htm "Glossary Entry") defined using [DEFINE ACCESSPOLICY](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abencds_f1_define_accesspolicy.htm). The name of the PFCG mapping must match the name of the CDS access policy.

The definition of a PCFG mapping contains the following:

-   A comma-separated list after the name pfcg\_mapping in which the output fields of the PFCG mapping are defined. These fields must be elements of the CDS entity mapping\_entity specified after BETWEEN. The specified order applies.

-   A CDS entity mapping\_entity specified after the keyword BETWEEN to define the fields used in the mapping. This definition specifies the input and output fields of the mapping.

-   An [authorization object](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenauthorization_object_glosry.htm "Glossary Entry") auth\_object specified after the keyword AND. The PFCG mapping can be [used](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abencds_f1_cond_pfcg_mapping.htm) in precisely those [PFCG conditions](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abencds_f1_cond_pfcg.htm) in which this authorization object is specified after ASPECT pfcg\_auth.

-   A comma-separated unordered list in curly brackets that associates the input fields input1, input2, ... of the mapping with [authorization fields](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenauthorization_field_glosry.htm "Glossary Entry") auth\_field of the authorization object auth\_object.

-   The input fields on the left sides must be elements of the CDS entity mapping\_entity specified after BETWEEN.

-   Authorization fields of the authorization object auth\_object must be specified on the right sides.

-   Any number of optional assignments can be flagged using the addition CONSTRAINT ID.

A PFCG mapping can be [used](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abencds_f1_cond_pfcg_mapping.htm) in a [PFCG](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abencds_f1_cond_pfcg.htm) condition of the same authorization object. It is transformed to specific access conditions as follows when the condition is evaluated:

-   The values of the current user for the authorization fields assigned to the input fields fill the input fields of the mapping.

-   The output fields of the mapping are assigned to the elements within the [curly brackets](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abencds_f1_cond_pfcg_mapping.htm) of the PFCG condition in the specified order.

-   The following applies to the input fields flagged with CONSTRAINT ID:

-   Only those authorization fields of the authorization object can be assigned that contain a single value in a specific authorization. Multiple values or patterns are not allowed (with the exception of full authorization using the value "\*"). Otherwise the PFCG mapping in the PFCG condition returns the value "false" for the authorization in question.

-   Full authorization can be assigned only when applied to all input fields of the PFCG mapping.

-   If full authorization exists for all input fields of the PFCG mapping (value "\*"), the PFCG mapping in the PFCG condition returns the value "true" when evaluated. This makes it possible to read entries of the protected entity for which there are no output fields in the mapping.

Addition

... IN SCENARIO

To use a PFCG mapping in a PFCG condition where the authorization object is subject to the switchable authorization check, the PFCG mapping must also name the same scenario (as well as the same authorization object). For more information, see the [PFCG condition](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abencds_f1_cond_pfcg.htm) of the statement DEFINE ROLE.

Note

In ABAP SQL access to a CDS entity assigned a role of this type, PFCG mappings are defined internally using a subquery after EXISTS. This can be seen in an [SQL trace](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abensql_trace_glosry.htm "Glossary Entry").

Example

The following example shows the definition of a PFCG mapping demo\_cds\_auth\_pfcg\_mapping based on the CDS entity demo\_cds\_mapping\_entity below. The output fields of the PFCG mapping are the authorization fields OBJECT, OBJ\_NAME, and DEVCLASS of the authorization object S\_DEVELOP. The input fields of the PFCG mapping are the elements of the CDS entity to which the output fields are assigned. The [example](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abencds_f1_cond_pfcg_mapping.htm) that demonstrates how a PFCG mapping is specified in a role shows how the mapping is used.

-   PFCG Mapping

define accesspolicy demo\_cds\_pfcg\_mapping  {
  define pfcg\_mapping demo\_cds\_pfcg\_mapping( map\_object,  
                                             map\_obj\_name,  
                                             map\_devclass )
    between demo\_cds\_mapping\_entity
      and S\_DEVELOP
      { map\_devclass = devclass,
        map\_object   = objtype,
        map\_obj\_name = objname } }

-   CDS Entity

@AbapCatalog.sqlViewName: 'DEMOCDSMAPPENT'
define view demo\_cds\_mapping\_entity
  as select from
    tadir
    {
      devclass as map\_devclass,
      object   as map\_object,
      obj\_name as map\_obj\_name
    }
    where
          devclass =    'SABAPDEMOS'
      and object   =    'PROG'
      and obj\_name like 'DEMO%'

Continue
[ABAP CDS - DEFINE PFCG\_MAPPING, pfcg\_mapping\_annot](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abencds_f1_dcl_pm_annotations.htm)



**📖 Source**: [abencds_f1_define_pfcg_mapping.htm](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abencds_f1_define_pfcg_mapping.htm)

### abencds_f1_dcl_pm_annotations.htm

> **📖 Official SAP Documentation**: [abencds_f1_dcl_pm_annotations.htm](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abencds_f1_dcl_pm_annotations.htm)
> **🔍 Direct Link**: This section contains the complete content from the official SAP ABAP documentation page.


  

* * *

AS ABAP Release 754, ©Copyright 2019 SAP SE. All rights reserved.

[ABAP Keyword Documentation](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenabap.htm) →  [ABAP - Dictionary](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenabap_dictionary.htm) →  [ABAP CDS in ABAP Dictionary](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abencds.htm) →  [ABAP CDS - Access Control](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abencds_authorizations.htm) →  [ABAP CDS - DCL Statements](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abencds_f1_dcl_syntax.htm) →  [ABAP CDS - DEFINE ACCESSPOLICY](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abencds_f1_define_accesspolicy.htm) →  [ABAP CDS - DEFINE PFCG\_MAPPING](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abencds_f1_define_pfcg_mapping.htm) → 

ABAP CDS - DEFINE PFCG\_MAPPING, pfcg\_mapping\_annot

Syntax

... @[annotation](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abencds_annotations.htm) ...

Effect

Specifies an [annotation](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abencds_annotation_glosry.htm "Glossary Entry") [annotation](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abencds_annotations_syntax.htm) as a PFCG mapping annotation in front of the statement [PFCG\_MAPPING](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abencds_f1_define_pfcg_mapping.htm) in the definition of a [CDS PFCG mapping](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abencds_pfcg_mapping_glosry.htm "Glossary Entry"). The character @ must be placed in front of the name annotation of the annotation. The annotation must be defined as a CDS object in a [CDS annotation definition](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abencds_anno_definition_glosry.htm "Glossary Entry") and the annotation definition annotation [@Scope](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abencds_f1_define_anno_annos.htm) must be specified here using the value #ROLE.

The table below shows the possible [ABAP annotations](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abencore_annotation_glosry.htm "Glossary Entry") that can be specified, and their meanings. No other annotations can be specified.

-   [EndUserText Annotations](#abencds-f1-dcl-pm-annotations-1---the-first-column-of-the-table-displays-the--possibly-structured--name-annotation-of-an-abap-annotation-and-the-second-column-displays-its-meaning--the-third-column-shows-the-possible--annotation-values--javascript-call-link---abenannotation-value-glosry-htm-----glossary-entry----the-fourth-column-shows-the-value-set-implicitly-for-the-annotation-value-if-the-annotation-is-not-used-explicitly--the-fifth-column-displays-the-default-value-set-implicitly-for-value-in-accordance-with-the--annotation-definition--javascript-call-link---abencds-anno-definition-glosry-htm-----glossary-entry---if-the-annotation-is-specified-without-a-value--if-nothing-is-specified-for-the-annotation-value--the-annotation-should-be-specified-without-a-value---endusertext-annotations--translatable-texts-of-the-cds-role---annotation--meaning--annotation-values--default-value-if-not-used--default-value-if-used-without-value--endusertext-label--translatable-short-text-of-the-pfcg-mapping--character-string-with-maximum-60-characters----------note--abap-annotations-introduced-using-endusertext-are-used-to-define-translatable-semantic-texts-for-a--cds-object--javascript-call-link---abencds-object-glosry-htm-----glossary-entry----the-value-of-an-annotation-like-this-is-saved-in-special-tables-that-have-a-language-key-and-that-are-translatable--the-value-specified-in-the-source-code-should-consist-of-text-in-the-original-language-of-the-cds-source-code-and-is-translated-into-the-required-languages--------abencds-f1-define-pfcg-mapping-htm-------------as-abap-release-754---copyright-2019-sap-se--all-rights-reserved----abap-keyword-documentation--javascript-call-link---abenabap-htm---------abap---dictionary--javascript-call-link---abenabap-dictionary-htm---------abap-cds-in-abap-dictionary--javascript-call-link---abencds-htm---------abap-cds---access-control--javascript-call-link---abencds-authorizations-htm---------abap-cds---dcl-statements--javascript-call-link---abencds-f1-dcl-syntax-htm---------abap-cds---define-accesspolicy--javascript-call-link---abencds-f1-define-accesspolicy-htm---------abap-cds---define-pfcg--mapping--syntax-------pfcg--mapping--annot--javascript-call-link---abencds-f1-dcl-pm-annotations-htm-------------define-----pfcg--mapping-pfcg--mapping-output1------output2------------between-mapping--entity-and-auth--object-----in-scenario-scenario--name---------input1---auth--field1-----constraint-id--------------input2---auth--field2-----constraint-id-----------------effect--defines-a--pfcg-mapping--javascript-call-link---abencds-pfcg-mapping-glosry-htm-----glossary-entry---pfcg--mapping-as-part-of-a--cds-access-policy--javascript-call-link---abencds-access-policy-glosry-htm-----glossary-entry---defined-using--define-accesspolicy--javascript-call-link---abencds-f1-define-accesspolicy-htm------the-name-of-the-pfcg-mapping-must-match-the-name-of-the-cds-access-policy---the-definition-of-a-pcfg-mapping-contains-the-following-------a-comma-separated-list-after-the-name-pfcg--mapping-in-which-the-output-fields-of-the-pfcg-mapping-are-defined--these-fields-must-be-elements-of-the-cds-entity-mapping--entity-specified-after-between--the-specified-order-applies-------a-cds-entity-mapping--entity-specified-after-the-keyword-between-to-define-the-fields-used-in-the-mapping--this-definition-specifies-the-input-and-output-fields-of-the-mapping-------an--authorization-object--javascript-call-link---abenauthorization-object-glosry-htm-----glossary-entry---auth--object-specified-after-the-keyword-and--the-pfcg-mapping-can-be--used--javascript-call-link---abencds-f1-cond-pfcg-mapping-htm-----in-precisely-those--pfcg-conditions--javascript-call-link---abencds-f1-cond-pfcg-htm-----in-which-this-authorization-object-is-specified-after-aspect-pfcg--auth-------a-comma-separated-unordered-list-in-curly-brackets-that-associates-the-input-fields-input1--input2------of-the-mapping-with--authorization-fields--javascript-call-link---abenauthorization-field-glosry-htm-----glossary-entry---auth--field-of-the-authorization-object-auth--object-------the-input-fields-on-the-left-sides-must-be-elements-of-the-cds-entity-mapping--entity-specified-after-between-------authorization-fields-of-the-authorization-object-auth--object-must-be-specified-on-the-right-sides-------any-number-of-optional-assignments-can-be-flagged-using-the-addition-constraint-id---a-pfcg-mapping-can-be--used--javascript-call-link---abencds-f1-cond-pfcg-mapping-htm-----in-a--pfcg--javascript-call-link---abencds-f1-cond-pfcg-htm-----condition-of-the-same-authorization-object--it-is-transformed-to-specific-access-conditions-as-follows-when-the-condition-is-evaluated-------the-values-of-the-current-user-for-the-authorization-fields-assigned-to-the-input-fields-fill-the-input-fields-of-the-mapping-------the-output-fields-of-the-mapping-are-assigned-to-the-elements-within-the--curly-brackets--javascript-call-link---abencds-f1-cond-pfcg-mapping-htm-----of-the-pfcg-condition-in-the-specified-order-------the-following-applies-to-the-input-fields-flagged-with-constraint-id-------only-those-authorization-fields-of-the-authorization-object-can-be-assigned-that-contain-a-single-value-in-a-specific-authorization--multiple-values-or-patterns-are-not-allowed--with-the-exception-of-full-authorization-using-the-value--------otherwise-the-pfcg-mapping-in-the-pfcg-condition-returns-the-value--false--for-the-authorization-in-question-------full-authorization-can-be-assigned-only-when-applied-to-all-input-fields-of-the-pfcg-mapping-------if-full-authorization-exists-for-all-input-fields-of-the-pfcg-mapping--value--------the-pfcg-mapping-in-the-pfcg-condition-returns-the-value--true--when-evaluated--this-makes-it-possible-to-read-entries-of-the-protected-entity-for-which-there-are-no-output-fields-in-the-mapping---addition------in-scenario--to-use-a-pfcg-mapping-in-a-pfcg-condition-where-the-authorization-object-is-subject-to-the-switchable-authorization-check--the-pfcg-mapping-must-also-name-the-same-scenario--as-well-as-the-same-authorization-object---for-more-information--see-the--pfcg-condition--javascript-call-link---abencds-f1-cond-pfcg-htm-----of-the-statement-define-role---note--in-abap-sql-access-to-a-cds-entity-assigned-a-role-of-this-type--pfcg-mappings-are-defined-internally-using-a-subquery-after-exists--this-can-be-seen-in-an--sql-trace--javascript-call-link---abensql-trace-glosry-htm-----glossary-entry-----example--the-following-example-shows-the-definition-of-a-pfcg-mapping-demo--cds--auth--pfcg--mapping-based-on-the-cds-entity-demo--cds--mapping--entity-below--the-output-fields-of-the-pfcg-mapping-are-the-authorization-fields-object--obj--name--and-devclass-of-the-authorization-object-s--develop--the-input-fields-of-the-pfcg-mapping-are-the-elements-of-the-cds-entity-to-which-the-output-fields-are-assigned--the--example--javascript-call-link---abencds-f1-cond-pfcg-mapping-htm-----that-demonstrates-how-a-pfcg-mapping-is-specified-in-a-role-shows-how-the-mapping-is-used-------pfcg-mapping--define-accesspolicy-demo--cds--pfcg--mapping------define-pfcg--mapping-demo--cds--pfcg--mapping--map--object-------------------------------------------------map--obj--name-------------------------------------------------map--devclass-------between-demo--cds--mapping--entity-------and-s--develop---------map--devclass---devclass----------map--object-----objtype----------map--obj--name---objname----------cds-entity--AbapCatalog.sqlViewName: 'DEMOCDSMAPPENT'
define view demo\_cds\_mapping\_entity
  as select from
    tadir
    {
      devclass as map\_devclass,
      object   as map\_object,
      obj\_name as map\_obj\_name
    }
    where
          devclass =    'SABAPDEMOS'
      and object   =    'PROG'
      and obj\_name like 'DEMO%'

Continue
[ABAP CDS - DEFINE PFCG\_MAPPING, pfcg\_mapping\_annot](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abencds_f1_dcl_pm_annotations.htm)



**📖 Source**: [abencds_f1_dcl_pm_annotations.htm](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abencds_f1_dcl_pm_annotations.htm)

### abencds_f1_define_generic_aspect.htm

> **📖 Official SAP Documentation**: [abencds_f1_define_generic_aspect.htm](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abencds_f1_define_generic_aspect.htm)
> **🔍 Direct Link**: This section contains the complete content from the official SAP ABAP documentation page.


**📖 Source**: [abencds_f1_define_generic_aspect.htm](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abencds_f1_define_generic_aspect.htm)


  

* * *

AS ABAP Release 754, ©Copyright 2019 SAP SE. All rights reserved.

[ABAP Keyword Documentation](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenabap.htm) →  [ABAP - Dictionary](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenabap_dictionary.htm) →  [ABAP CDS in ABAP Dictionary](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abencds.htm) →  [ABAP CDS - Access Control](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abencds_authorizations.htm) →  [ABAP CDS - DCL Statements](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abencds_f1_dcl_syntax.htm) →  [ABAP CDS - DEFINE ACCESSPOLICY](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abencds_f1_define_accesspolicy.htm) → 

ABAP CDS - DEFINE ASPECT

Syntax

*\[*DEFINE*\]* ASPECT generic\_aspect AS SELECT FROM aspect\_entity
  WITH USER ELEMENT user\_element
{
    output1 *\[*BYPASS WHEN aspect\_bypass\_condition*\]*
    *\[*, ... *\]*
}

Effect

Defines a generic aspect generic\_aspect as part of a [CDS access policy](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abencds_access_policy_glosry.htm "Glossary Entry") defined using [DEFINE ACCESSPOLICY](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abencds_f1_define_accesspolicy.htm). The name of the generic aspect must be the same as the name of the CDS access policy.

The definition of a generic aspect contains the following:

-   An aspect entity aspect\_entity, specified after the name generic\_aspect, which is used as a data source.

-   An element user\_element of the aspect entity that is used as an input field for the user name of the logged on user.

-   A comma-separated list that specifies the output fields output1, output2, ... of the generic aspect. The specified order applies.

-   Any number of output fields that can be tagged with a condition using the addition BYPASS WHEN aspect\_bypass\_condition. Typical bypass values are \* or an empty value. The following are possible as aspect bypass conditions aspect\_bypass\_condition: [IS NULL](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abencds_cond_expr_null.htm) *|* [IS *\[*NOT*\]* NULL](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abencds_cond_expr_initial.htm) *|* \= [Literal](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abencds_f1_literal.htm)

At runtime, the field user\_element is filled with the user name of the current user. The rows produced in the aspect entity are matched with their output fields in the specified order and with the elements on the left side of the access condition to which the generic aspect is assigned. This means those rows in the protected entity meet the condition for which a row exists for the current user in the aspect entity.

When the bypass condition is used, the match with this field is not used if this condition exists in a row of the aspect entity. A specified value, therefore, (such as an asterisk) can be used to indicate that any values of the protected entity are allowed.

Special Requirements in the Aspect Entity

The content of the aspect entity has a particular relevance for audits by being used in a generic aspect in access control.

To determine which user had access to particular data at a particular time in a system, it must be possible to reconstruct the state of the data of the aspect entity. Existing mechanisms (such as version management or change documents) cover this requirement in the case of development objects or PFCG roles, aspect entities do not specify their data sources and whether these sources are themselves auditable.

The development and runtime systems for CDS access control cannot check whether data sources are auditable. To highlight this requirement, however, the aspect entity must have the following annotations:

-   An auditing type with the annotation @AccessControl.auditing.type. Currently only the value #CUSTOM is possible.

-   A component with the annotation @AccessControl.auditing.specification specifying (as text) how the content of the entity is audited.
    

Notes

-   Just adding the annotations, however, does not activate auditing. It must first be ensure that auditing is actually possible.

-   Auditing must respect all data sources of the aspect entity.

-   If auditing cannot be ensured, the aspect entity cannot be used in a generic aspect.

-   In ABAP SQL access to a CDS entity assigned a role of this type, generic aspects are defined internally using a [subquery](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abensubquery_glosry.htm "Glossary Entry") after EXISTS. This can be seen in an SQL trace.


---

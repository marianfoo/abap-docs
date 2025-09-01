# ABAP - Keyword Documentation / ABAP - Reference / Obsolete Language Elements / Obsolete Declarations / Internal Tables

Included pages: 9


### abenitab_declare_obsolete.htm

  

* * *

SAP NetWeaver AS ABAP Release 752, ©Copyright 2017 SAP AG. All rights reserved.

[ABAP - Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP - Reference](javascript:call_link\('abenabap_reference.htm'\)) →  [Obsolete Language Elements](javascript:call_link\('abenabap_obsolete.htm'\)) →  [Obsolete Declarations](javascript:call_link\('abenobsolete_declarations.htm'\)) → 

Internal Tables

-   [TYPES - OCCURS](javascript:call_link\('abaptypes_occurs.htm'\))

-   [DATA - OCCURS](javascript:call_link\('abapdata_occurs.htm'\))

-   [TABLE LINE](javascript:call_link\('abaptable_line.htm'\))

-   [Internal Tables with Header Line](javascript:call_link\('abenitab_header_line.htm'\))

Continue
[TYPES - OCCURS](javascript:call_link\('abaptypes_occurs.htm'\))
[DATA - OCCURS](javascript:call_link\('abapdata_occurs.htm'\))
[TYPES, DATA ... - TABLE LINE](javascript:call_link\('abaptable_line.htm'\))
[Internal Tables with Header Line](javascript:call_link\('abenitab_header_line.htm'\))


### abaptypes_occurs.htm

  

* * *

SAP NetWeaver AS ABAP Release 752, ©Copyright 2017 SAP AG. All rights reserved.

[ABAP - Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP - Reference](javascript:call_link\('abenabap_reference.htm'\)) →  [Obsolete Language Elements](javascript:call_link\('abenabap_obsolete.htm'\)) →  [Obsolete Declarations](javascript:call_link\('abenobsolete_declarations.htm'\)) →  [Internal Tables](javascript:call_link\('abenitab_declare_obsolete.htm'\)) → 

TYPES - OCCURS

[Quick Reference](javascript:call_link\('abaptypes_occurs_shortref.htm'\))

Obsolete Syntax

TYPES dtype *{* *{*TYPE *\[*REF TO*\]* type*}*
            *|* *{*LIKE *\[*REF TO*\]* dobj*}* *}* OCCURS n.

Effect

This statement is forbidden in classes. The statement has the same function as the following [TYPES](javascript:call_link\('abaptypes_itab.htm'\)) statement for defining [standard table](javascript:call_link\('abenstandard_table_glosry.htm'\) "Glossary Entry") types, and is replaced by the following:

TYPES dtype *{* *{*TYPE STANDARD TABLE OF *\[*REF TO*\]* type*}*
            *|* *{*LIKE STANDARD TABLE OF *\[*REF TO*\]* dobj*}* *}*
            WITH NON-UNIQUE DEFAULT KEY
            INITIAL SIZE n.


### abapdata_occurs.htm

  

* * *

SAP NetWeaver AS ABAP Release 752, ©Copyright 2017 SAP AG. All rights reserved.

[ABAP - Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP - Reference](javascript:call_link\('abenabap_reference.htm'\)) →  [Obsolete Language Elements](javascript:call_link\('abenabap_obsolete.htm'\)) →  [Obsolete Declarations](javascript:call_link\('abenobsolete_declarations.htm'\)) →  [Internal Tables](javascript:call_link\('abenitab_declare_obsolete.htm'\)) → 

DATA - OCCURS

[Quick Reference](javascript:call_link\('abapdata_occurs_shortref.htm'\))

Obsolete Syntax

DATA itab *{* *{*TYPE *\[*REF TO*\]* type*}*
          *|* *{*LIKE *\[*REF TO*\]* dobj*}* *}* OCCURS n
          [*\[*WITH HEADER LINE*\]*](javascript:call_link\('abapdata_header_line.htm'\)).

Effect

This statement is forbidden in classes. It has exactly the same function as the following [DATA](javascript:call_link\('abapdata_itab.htm'\)) statement for the declaration of a [standard table](javascript:call_link\('abenstandard_table_glosry.htm'\) "Glossary Entry") and is replaced by this:

DATA itab *{* *{*TYPE STANDARD TABLE OF *\[*REF TO*\]* type*}*
          *|* *{*LIKE STANDARD TABLE OF *\[*REF TO*\]* dobj*}* *}*
          WITH NON-UNIQUE DEFAULT KEY
          INITIAL SIZE n
          *\[*WITH HEADER LINE*\]*.

The use of the addition [WITH HEADER LINE](javascript:call_link\('abapdata_header_line.htm'\)) is obsolete


### abaptable_line.htm

  

* * *

SAP NetWeaver AS ABAP Release 752, ©Copyright 2017 SAP AG. All rights reserved.

[ABAP - Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP - Reference](javascript:call_link\('abenabap_reference.htm'\)) →  [Obsolete Language Elements](javascript:call_link\('abenabap_obsolete.htm'\)) →  [Obsolete Declarations](javascript:call_link\('abenobsolete_declarations.htm'\)) →  [Internal Tables](javascript:call_link\('abenitab_declare_obsolete.htm'\)) → 

TYPES, DATA ... - TABLE LINE

Obsolete Syntax

[TYPES](javascript:call_link\('abaptypes_itab.htm'\)) ... [WITH](javascript:call_link\('abaptypes_keydef.htm'\)) ... [KEY](javascript:call_link\('abaptypes_primary_key.htm'\)) TABLE LINE.
[DATA](javascript:call_link\('abapdata_itab.htm'\))  ... [WITH](javascript:call_link\('abapdata_keydef.htm'\)) ... [KEY](javascript:call_link\('abapdata_primary_key.htm'\)) TABLE LINE.
...

Effect

The addition TABLE LINE can also be specified outside of classes in the declaration statements TYPES, DATA, and so on, instead of the pseudo component table\_line in the definition of the primary table key.

Note

ABAP Compiler should consider this addition as an error, retained only for reasons of downward compatibility. Always specify the pseudo component table\_line instead of TABLE LINE.

Bad Example

TYPES itab TYPE SORTED TABLE OF i WITH UNIQUE KEY TABLE LINE.

Good Example

TYPES itab TYPE SORTED TABLE OF i WITH UNIQUE KEY table\_line.


### abenitab_header_line.htm

  

* * *

SAP NetWeaver AS ABAP Release 752, ©Copyright 2017 SAP AG. All rights reserved.

[ABAP - Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP - Reference](javascript:call_link\('abenabap_reference.htm'\)) →  [Obsolete Language Elements](javascript:call_link\('abenabap_obsolete.htm'\)) →  [Obsolete Declarations](javascript:call_link\('abenobsolete_declarations.htm'\)) →  [Internal Tables](javascript:call_link\('abenitab_declare_obsolete.htm'\)) → 

Internal Tables with Header Line

Outside classes, and if it is not a component of a structure or row in another internal table, it is still possible to create an internal table with a header line.

-   [Declaration of Header Lines](#abenitab-header-line-1--------properties-of-header-lines---@ITOC@@ABENITAB_HEADER_LINE_2)

-   [Use](#abenitab-header-line-3---declaration-of-header-lines--header-lines-of-internal-tables-are-created------by-using-the-addition--with-header-line--javascript-call-link---abapdata-header-line-htm-----of-the-statement-data-to-declare-internal-tables-------when-using-the-obsolete-statement-string--data---begin-of-occurs--javascript-call-link---abapdata-begin-of-occurs-htm-----to-declare-structured-standard-tables-------when-using-the-obsolete-statement--ranges--javascript-call-link---abapranges-htm-----to-declare--ranges-tables--javascript-call-link---abenranges-table-glosry-htm-----glossary-entry---------when-declaring--selection-tables--javascript-call-link---abenselection-table-glosry-htm-----glossary-entry---with-the-statement--select-options--javascript-call-link---abapselect-options-htm-----------when-using--table-parameters--javascript-call-link---abentable-parameter-glosry-htm-----glossary-entry---for--function-modules--javascript-call-link---abaptables-parameters-obsolete-htm-----and--subroutines--javascript-call-link---abapform-tables-htm-------note--the-statement--create-data--javascript-call-link---abapcreate-data-htm-----cannot-be-used-to-create-internal-tables-with-header-lines---properties-of-header-lines--a-header-line-is-a-work-area-whose------data-type-is-the-same-as-the-row-type-of-the-internal-table------whose-name-is-the-same-as-the-name-of-the-internal-table---if-a-header-line-exists--therefore--an-abap-program-includes-two-data-objects-with-the-same-name--the-actual-internal-table-and-the-header-line---the-internal-table-and-header-line-are-accessed-as-follows-------many-processing-statements-for-internal-tables-have--obsolete--javascript-call-link---abenitab-short-forms-htm-----short-forms-in-which-the-header-lines-is-used-as-an-implicit-work-area-if-no-explicit-work-area-is-specified-------in-all-other-cases--the-statement-and--operand-position--javascript-call-link---abenoperands-data-objects-htm-----decide-whether-the--table-body--javascript-call-link---abentable-body-glosry-htm-----glossary-entry---or-the-header-line-is-used-when-the-table-name-is-specified--the-header-line-is-the-usual-choice--the-name--and-just-the-name--of-an-internal-table-with-header-line-is-interpreted-as-the-table-body-only-in-the-following-cases-------operand-positions-in-the--processing-statements-for-internal-tables--javascript-call-link---abentable-processing-statements-htm-----in-which-the-internal-table-to-be-processed-is-specified-------operand-positions-in-expressions-in-which-an-internal-table-is-expected--as-after--for-----in--javascript-call-link---abenfor-itab-htm-----in-a--table-iteration--javascript-call-link---abentable-iteration-glosry-htm-----glossary-entry---------operand-positions-in-other-statements-whose-operand-type-is-an-internal-table--such-as-after--split-----into-table--javascript-call-link---abapsplit-htm-------concatenate-lines-of--javascript-call-link---abapconcatenate-htm-------select-----into-table--javascript-call-link---abapinto-clause-htm------and--read-report-----into--javascript-call-link---abapread-report-htm-----------internal-table-specified-in-a--table-expression--javascript-call-link---abentable-expressions-htm----------when-saving-and-reading--data-clusters--javascript-call-link---abendata-cluster-glosry-htm-----glossary-entry---using--export--javascript-call-link---abapexport-data-cluster-htm-----and--import--javascript-call-link---abapimport-data-cluster-htm-----------in-the-statement--free--javascript-call-link---abapfree-dataobject-htm-----------in-the-obsolete-statement--search--javascript-call-link---abapsearch-itab-htm-----------when-a-token-is-specified-dynamically-in--open-sql--javascript-call-link---abenopen-sql-glosry-htm-----glossary-entry----except-when-database-tables-are-specified----to-force-access-to-the-table-body-in-any-operand-position-when-a-header-line-exists--square-brackets-can-be-specified-directly-after-the-name-of-an-internal-table-in-all-operand-positions--for-example--itab-------this-does-not-apply--however--when-specifying-the-internal-table-in-a--table-expression--javascript-call-link---abentable-expression-glosry-htm-----glossary-entry-----notes------when-a-like-reference-is-made-to-an-internal-table-with-header-line--either-the-header-line-itself-can-be-referenced-or------can-be-specified-to-reference-the-table-body--it-is-not-possible--however--to-reference-the-internal-table-including-the-header-line-------a-field-symbol--a-formal-parameter--with-the-exception-of--table-parameters--javascript-call-link---abentable-parameter-glosry-htm-----glossary-entry-----or-a-data-reference-can-only-address-either-the-table-body-or-the-header-line--this-means-that-a-field-symbol--a-formal-parameter--with-the-exception-of--table-parameters--javascript-call-link---abentable-parameter-glosry-htm-----glossary-entry-----or-a-data-reference-can-never-be-ambiguous-------both-the-table-body-and-the-header-line-are-passed-when-a-table-with-header-line-is-passed-to--table-parameters--javascript-call-link---abentable-parameter-glosry-htm-----glossary-entry--------------can-be-specified-for-internal-tables-without-header-line--but-does-not-need-to-be--this-is-because-the-name--without-------of-an-internal-table-without-header-line-is-interpreted-as-the-table-body-in-all-operand-positions-regardless-------in-many-operand-positions-that-expect-internal-tables--the-syntax-check-forces------to-be-specified-after-the-name-of-an-internal-table-with-header-line--------rtts--javascript-call-link---abenrtts-glosry-htm-----glossary-entry---does-not-support-internal-tables-with-header-lines--a-type-description-object-can-describe-either-only-the-header-line-or-the-table-body-------in-very-old-programs--it-may-be-the-case-that-the-obsolete-pseudo-component----sys----javascript-call-link---abensys-table-body-htm-----is-used-to-address-the-header-line--instead-of---------use--the-use-of-header-lines-is-highly-error-prone--due-to-the-repeated-use-of-one-name-for-two-data-objects--if-at-all-possible--header-lines-should-not-be-created--even-outside-of-classes--------the-addition--with-header-line--javascript-call-link---abapdata-header-line-htm-----and-the-statement-string--data---begin-of-occurs--javascript-call-link---abapdata-begin-of-occurs-htm-----should-no-longer-be-used-and-ranges-tables-should-no-longer-be-declared-using--ranges--javascript-call-link---abapranges-htm-----------table-parameters-should-not-be-used-if-at-all-possible-------in-cases-where-a-header-line-absolutely-has-to-be-created--such-as-in-selection-tables-or-in-procedures-that-still-require-table-parameters--generally-only--remote-enabled-function-modules--javascript-call-link---abenremote-enabled-fm-glosry-htm-----glossary-entry------never-work-with-the-header-line-and-use-the-additional-explicitly-work-areas-declared-explicitly-instead---notes------a-work-area-for-replacing-a-header-line-can-be-declared-very-simply-by-using-the-addition-line-of-of-the-statements-types--data--and-so-on-------the-use-of-an-additional-work-area-should-not-be-confused-with-the-explicit-completion-of-the-implicit--short-forms--javascript-call-link---abenitab-short-forms-htm------such-as-loop-at-itab-into-itab--the-latter-case-is-one-of-the-undesired-ways-to-use-a-header-line-------tables-with-header-lines-do-not-offer-any-performance-advantages---example--the-following-example-shows-a-typical-instance-of-handling-internal-tables-with-header-lines--an-internal-table-with-header-line--here-the-table-parameter-of-a-function-module--is-initialized-using--clear--javascript-call-link---abapclear-htm------but-the------is-not-appended-to-the-name--in-this-case--only-the-header-line-is-deleted--which-is-not-usually-noticed-until-runtime---function-work--with--tables---------------------------------------------local-interface------tables----------table-structure--structure-----------------------------------------clear-table--------endfunction---continue--data---header-line--javascript-call-link---abapdata-header-line-htm------data---begin-of-occurs--javascript-call-link---abapdata-begin-of-occurs-htm------ranges--javascript-call-link---abapranges-htm-----------abapdata-header-line-htm-------------sap-netweaver-as-abap-release-752---copyright-2017-sap-ag--all-rights-reserved----abap---keyword-documentation--javascript-call-link---abenabap-htm---------abap---reference--javascript-call-link---abenabap-reference-htm---------obsolete-language-elements--javascript-call-link---abenabap-obsolete-htm---------obsolete-declarations--javascript-call-link---abenobsolete-declarations-htm---------internal-tables--javascript-call-link---abenitab-declare-obsolete-htm---------internal-tables-with-header-line--javascript-call-link---abenitab-header-line-htm---------data---header-line---quick-reference--javascript-call-link---abapdata-htm------obsolete-syntax------with-header-line------effect--this-addition-to-the-statements--data-table-of--javascript-call-link---abapdata-itab-htm-------data-range-of--javascript-call-link---abapdata-ranges-htm------and-the-obsolete-statement--data-occurs--javascript-call-link---abapdata-occurs-htm------which-is-not-allowed-in-classes--declares-a-further-data-object-alongside-the-internal-table--known-as-the--header-line--javascript-call-link---abenheader-line-glosry-htm-----glossary-entry----this-object-has-exactly-the-same-name-as-the-internal-table-and-has-the-row-type-of-the-internal-table-as-its-data-type--a-header-line-cannot-be-declared-for-internal-tables-with-a-table-like-row-type--this-is-possible-for-structured-row-types-with-table-like-components--however---if-you-specify-the-name-of-an-internal-table-itab-in-an-operand-position-of-an-abap-statement--the-statement-determines-whether-the--table-body--javascript-call-link---abentable-body-glosry-htm-----glossary-entry---or-header-line-is-used--as-a-rule--all-table-specific-statements-such-as--sort--javascript-call-link---abapsort-itab-htm-----or--loop--javascript-call-link---abaploop-at-itab-htm-----use-the-internal-table--whereas-all-other-statements-use-the-header-line--exceptions-to-this-rule-are-listed-under--internal-tables-with-header-line--javascript-call-link---abenitab-header-line-htm-------to-address-the-table-body-instead-of-the-header-line-in-statements--you-can-append------to-the-table-name-------itab----------for-internal-tables-without-a-header-line--the-table-body-is-always-used--an-internal-table-with-a-header-line-cannot-be-a-component-of-a-structure-or-a-row-of-another-internal-table---notes------these-statements-for-processing-individual-table-rows-have--obsolete-short-forms--javascript-call-link---abenitab-short-forms-htm-----that-use-the-header-line-as-a-work-area-implicitly--these-short-forms-are-allowed-only-outside-of-abap-objects-----------if-the-name-primary--key-is-explicitly-specified-or-a--secondary-key--javascript-call-link---abapdata-secondary-key-htm-----is-defined-when-the--primary-key--javascript-call-link---abapdata-primary-key-htm-----is-being-defined--the-addition-with-header-line-can-no-longer-be-specified--either-inside-or-outside-of-classes--------abapdata-begin-of-occurs-htm-------------sap-netweaver-as-abap-release-752---copyright-2017-sap-ag--all-rights-reserved----abap---keyword-documentation--javascript-call-link---abenabap-htm---------abap---reference--javascript-call-link---abenabap-reference-htm---------obsolete-language-elements--javascript-call-link---abenabap-obsolete-htm---------obsolete-declarations--javascript-call-link---abenobsolete-declarations-htm---------internal-tables--javascript-call-link---abenitab-declare-obsolete-htm---------internal-tables-with-header-line--javascript-call-link---abenitab-header-line-htm---------data---begin-of-occurs---quick-reference--javascript-call-link---abapdata-begin-of-shortref-htm------obsolete-syntax--data-begin-of-itab-occurs-n--------data-end-of-itab-----valid-between-intlim1-and-intlim2-------addition--------valid-between-intlim1-and-intlim2----abap-one-add1@)

Effect

This variant of the statement list introduced using [DATA BEGIN OF](javascript:call_link\('abapdata_struc.htm'\)) (which is forbidden in classes) declares an internal table itab as a [standard table](javascript:call_link\('abenstandard_table_glosry.htm'\) "Glossary Entry") with a structured row type and a [header line](javascript:call_link\('abenheader_line_glosry.htm'\) "Glossary Entry"). The declarations between the statements DATA BEGIN OF and DATA END OF define the components of the [row type](javascript:call_link\('abenrow_type_glosry.htm'\) "Glossary Entry") of itab, just as in the regular variant of [DATA BEGIN OF](javascript:call_link\('abapdata_struc.htm'\)). The data object n, which has to be specified either directly as a numeric literal or as a numeric constant, determines the initial memory requirement.

Notes

-   The statement list above is the original form of the declarations of internal tables. Internal tables declared in this way have always been tables in the real sense, meaning that the rows are mainly constructed from individual columns.
    
-   The following statement list replaces the above statements (with the exception of the addition VALID BETWEEN); here the role of the header line is taken by the work area wa:
    

DATA BEGIN OF wa.
       ...
DATA END OF wa.
DATA itab LIKE TABLE OF wa.

The last statement is an abbreviated form of the complete [declaration](javascript:call_link\('abapdata_itab.htm'\)) of itab, where the table type and key are supplemented with standard values.

-   The creation of the [header line](javascript:call_link\('abenitab_header_line.htm'\)) cannot be disabled in this variant. Since header lines in internal tables should never be used, however, this way of declaring internal tables should never be encountered again.
    

Addition

... VALID BETWEEN intlim1 AND intlim2

Effect

The VALID BETWEEN addition of the DATA END OF statement is only important if the internal table is to be processed using the obsolete form of the statement [PROVIDE](javascript:call_link\('abapprovide_obsolete.htm'\)). intlim1 and intlim2 expect columns from the internal table of the data type d, i, n, or t. These columns are used implicitly as interval limits in their obsolete form of the statement PROVIDE.


### abapranges.htm

  

* * *

SAP NetWeaver AS ABAP Release 752, ©Copyright 2017 SAP AG. All rights reserved.

[ABAP - Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP - Reference](javascript:call_link\('abenabap_reference.htm'\)) →  [Obsolete Language Elements](javascript:call_link\('abenabap_obsolete.htm'\)) →  [Obsolete Declarations](javascript:call_link\('abenobsolete_declarations.htm'\)) →  [Internal Tables](javascript:call_link\('abenitab_declare_obsolete.htm'\)) →  [Internal Tables with Header Line](javascript:call_link\('abenitab_header_line.htm'\)) → 

RANGES

[Quick Reference](javascript:call_link\('abapranges_shortref.htm'\))

Obsolete Syntax

RANGES rtab FOR dobj *\[*OCCURS n*\]*.

Effect

Obsolete declaration of a [ranges table](javascript:call_link\('abenranges_table_glosry.htm'\) "Glossary Entry"). This statement (not allowed in classes) is a short form of the following statement sequence which is also not allowed in classes:

[DATA: BEGIN OF rtab OCCURS](javascript:call_link\('abapdata_begin_of_occurs.htm'\)) *{*10*|*n*}*,
        sign   TYPE c LENGTH 1,
        option TYPE c LENGTH 2,
        low    LIKE dobj,
        high   LIKE dobj,
      END OF rtab.

Declares an internal table rtab with the structure of a [selection table](javascript:call_link\('abenselection_table_glosry.htm'\) "Glossary Entry") and a [header line](javascript:call_link\('abenheader_line_glosry.htm'\) "Glossary Entry"). Without the addition [OCCURS](javascript:call_link\('abapdata_occurs.htm'\)), the initial memory requirement of the ranges table is set to ten rows. The addition OCCURS can be used to specify a numeric literal or a numeric constant n to determine a different initial memory requirement.

Notes

-   The statement RANGES is replaced by the addition TYPE*|*LIKE RANGE OF of the statements [TYPES](javascript:call_link\('abaptypes_ranges.htm'\)) and [DATA](javascript:call_link\('abapdata_ranges.htm'\)). If used, these declare ranges tables without header lines.
    
-   The sign and option columns of a ranges table declared using RANGES are not related to data types in ABAP Dictionary. For a ranges table defined in ABAP Dictionary, these columns are based on the data elements DDSIGN and DDOPTION.


### abenitab_header_line.htm

  

* * *

SAP NetWeaver AS ABAP Release 752, ©Copyright 2017 SAP AG. All rights reserved.

[ABAP - Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP - Reference](javascript:call_link\('abenabap_reference.htm'\)) →  [Obsolete Language Elements](javascript:call_link\('abenabap_obsolete.htm'\)) →  [Obsolete Declarations](javascript:call_link\('abenobsolete_declarations.htm'\)) →  [Internal Tables](javascript:call_link\('abenitab_declare_obsolete.htm'\)) → 

Internal Tables with Header Line

Outside classes, and if it is not a component of a structure or row in another internal table, it is still possible to create an internal table with a header line.

-   [Declaration of Header Lines](#abenitab-header-line-1--------properties-of-header-lines---@ITOC@@ABENITAB_HEADER_LINE_2)

-   [Use](#@@ITOC@@ABENITAB_HEADER_LINE_3)

Declaration of Header Lines

Header lines of internal tables are created

-   by using the addition [WITH HEADER LINE](javascript:call_link\('abapdata_header_line.htm'\)) of the statement DATA to declare internal tables,

-   when using the obsolete statement string [DATA - BEGIN OF OCCURS](javascript:call_link\('abapdata_begin_of_occurs.htm'\)) to declare structured standard tables,

-   when using the obsolete statement [RANGES](javascript:call_link\('abapranges.htm'\)) to declare [ranges tables](javascript:call_link\('abenranges_table_glosry.htm'\) "Glossary Entry"),

-   when declaring [selection tables](javascript:call_link\('abenselection_table_glosry.htm'\) "Glossary Entry") with the statement [SELECT-OPTIONS](javascript:call_link\('abapselect-options.htm'\)),

-   when using [table parameters](javascript:call_link\('abentable_parameter_glosry.htm'\) "Glossary Entry") for [function modules](javascript:call_link\('abaptables_parameters_obsolete.htm'\)) and [subroutines](javascript:call_link\('abapform_tables.htm'\)).

Note

The statement [CREATE DATA](javascript:call_link\('abapcreate_data.htm'\)) cannot be used to create internal tables with header lines.

Properties of Header Lines

A header line is a work area whose

-   data type is the same as the row type of the internal table

-   whose name is the same as the name of the internal table.

If a header line exists, therefore, an ABAP program includes two data objects with the same name (the actual internal table and the header line). The internal table and header line are accessed as follows:

-   Many processing statements for internal tables have [obsolete](javascript:call_link\('abenitab_short_forms.htm'\)) short forms in which the header lines is used as an implicit work area if no explicit work area is specified.

-   In all other cases, the statement and [operand position](javascript:call_link\('abenoperands_data_objects.htm'\)) decide whether the [table body](javascript:call_link\('abentable_body_glosry.htm'\) "Glossary Entry") or the header line is used when the table name is specified. The header line is the usual choice. The name (and just the name) of an internal table with header line is interpreted as the table body only in the following cases:

-   Operand positions in the [processing statements for internal tables](javascript:call_link\('abentable_processing_statements.htm'\)) in which the internal table to be processed is specified.

-   Operand positions in expressions in which an internal table is expected, as after [FOR ... IN](javascript:call_link\('abenfor_itab.htm'\)) in a [table iteration](javascript:call_link\('abentable_iteration_glosry.htm'\) "Glossary Entry").

-   Operand positions in other statements whose operand type is an internal table, such as after [SPLIT ... INTO TABLE](javascript:call_link\('abapsplit.htm'\)), [CONCATENATE LINES OF](javascript:call_link\('abapconcatenate.htm'\)), [SELECT ... INTO TABLE](javascript:call_link\('abapinto_clause.htm'\)), and [READ REPORT ... INTO](javascript:call_link\('abapread_report.htm'\)).

-   Internal table specified in a [table expression](javascript:call_link\('abentable_expressions.htm'\))

-   When saving and reading [data clusters](javascript:call_link\('abendata_cluster_glosry.htm'\) "Glossary Entry") using [EXPORT](javascript:call_link\('abapexport_data_cluster.htm'\)) and [IMPORT](javascript:call_link\('abapimport_data_cluster.htm'\)).

-   In the statement [FREE](javascript:call_link\('abapfree_dataobject.htm'\)).

-   In the obsolete statement [SEARCH](javascript:call_link\('abapsearch_itab.htm'\)).

-   When a token is specified dynamically in [Open SQL](javascript:call_link\('abenopen_sql_glosry.htm'\) "Glossary Entry") (except when database tables are specified).

To force access to the table body in any operand position when a header line exists, square brackets can be specified directly after the name of an internal table in all operand positions (for example, itab\[\]). This does not apply, however, when specifying the internal table in a [table expression](javascript:call_link\('abentable_expression_glosry.htm'\) "Glossary Entry").

Notes

-   When a LIKE reference is made to an internal table with header line, either the header line itself can be referenced or \[\] can be specified to reference the table body. It is not possible, however, to reference the internal table including the header line.

-   A field symbol, a formal parameter (with the exception of [table parameters](javascript:call_link\('abentable_parameter_glosry.htm'\) "Glossary Entry")), or a data reference can only address either the table body or the header line. This means that a field symbol, a formal parameter (with the exception of [table parameters](javascript:call_link\('abentable_parameter_glosry.htm'\) "Glossary Entry")), or a data reference can never be ambiguous.

-   Both the table body and the header line are passed when a table with header line is passed to [table parameters](javascript:call_link\('abentable_parameter_glosry.htm'\) "Glossary Entry").

-   \[\] can be specified for internal tables without header line, but does not need to be. This is because the name (without \[\]) of an internal table without header line is interpreted as the table body in all operand positions regardless.

-   In many operand positions that expect internal tables, the syntax check forces \[\] to be specified after the name of an internal table with header line.

-   [RTTS](javascript:call_link\('abenrtts_glosry.htm'\) "Glossary Entry") does not support internal tables with header lines. A type description object can describe either only the header line or the table body.

-   In very old programs, it may be the case that the obsolete pseudo component [\*sys\*](javascript:call_link\('abensys_table_body.htm'\)) is used to address the header line (instead of \[\]).

Use

The use of header lines is highly error-prone, due to the repeated use of one name for two data objects. If at all possible, header lines should not be created (even outside of classes).

-   The addition [WITH HEADER LINE](javascript:call_link\('abapdata_header_line.htm'\)) and the statement string [DATA - BEGIN OF OCCURS](javascript:call_link\('abapdata_begin_of_occurs.htm'\)) should no longer be used and ranges tables should no longer be declared using [RANGES](javascript:call_link\('abapranges.htm'\)).

-   Table parameters should not be used if at all possible.

-   In cases where a header line absolutely has to be created (such as in selection tables or in procedures that still require table parameters (generally only [remote-enabled function modules](javascript:call_link\('abenremote_enabled_fm_glosry.htm'\) "Glossary Entry"))), never work with the header line and use the additional explicitly work areas declared explicitly instead.

Notes

-   A work area for replacing a header line can be declared very simply by using the addition LINE OF of the statements TYPES, DATA, and so on.

-   The use of an additional work area should not be confused with the explicit completion of the implicit [short forms](javascript:call_link\('abenitab_short_forms.htm'\)), such as LOOP AT itab INTO itab. The latter case is one of the undesired ways to use a header line.

-   Tables with header lines do not offer any performance advantages.

Example

The following example shows a typical instance of handling internal tables with header lines: An internal table with header line (here the table parameter of a function module) is initialized using [CLEAR](javascript:call_link\('abapclear.htm'\)), but the \[\] is not appended to the name. In this case, only the header line is deleted, which is not usually noticed until runtime.

FUNCTION work\_with\_tables.
\*"---------------------------------
\*"\*"Local Interface
\*"  TABLES
\*"      table STRUCTURE  structure
\*"----------------------------------
  CLEAR table.
  ...
ENDFUNCTION.

Continue
[DATA - HEADER LINE](javascript:call_link\('abapdata_header_line.htm'\))
[DATA - BEGIN OF OCCURS](javascript:call_link\('abapdata_begin_of_occurs.htm'\))
[RANGES](javascript:call_link\('abapranges.htm'\))

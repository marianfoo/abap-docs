# ABAP - Keyword Documentation / ABAP - Programming Language / Processing Internal Data / Internal Tables (itab) / itab - Performance Notes

Included pages: 2



## 🔗 Source References

**Base URL**: [ABAP Keyword Documentation 7.58](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/index.htm)

**Individual Pages in this Bundle**:
- [abenitab_perfo.htm](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenitab_perfo.htm)

**Bundle Contains**: 1 documentation pages
**Version**: ABAP 7.58
**Generated**: 2025-09-01T11:25:28.988Z

---

### abenitab_perfo.htm

> **📖 Official SAP Documentation**: [abenitab_perfo.htm](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenitab_perfo.htm)
> **🔍 Direct Link**: This section contains the complete content from the official SAP ABAP documentation page.


> **📖 Official SAP Documentation**: [abenitab_perfo.htm](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenitab_perfo.htm)
> **🔍 Direct Link**: This section contains the complete content from the official SAP ABAP documentation page.


**📖 Source**: [abenitab_perfo.htm](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenitab_perfo.htm)


  

* * *

AS ABAP Release 758, ©Copyright 2024 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP - Programming Language](javascript:call_link\('abenabap_reference.htm'\)) →  [Processing Internal Data](javascript:call_link\('abenabap_data_working.htm'\)) →  [Internal Tables (itab)](javascript:call_link\('abenitab.htm'\)) → 

 [![](Mail.gif?object=Mail.gif "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback%20on%20ABAP%20Documentation&body=Document:%20itab%20-%20Performance%20Notes%2C%20ABENITAB_PERFO%2C%20758%0D%0A%0D%0AError:%0D%0A%0D%0A%0D%0A%0D%0ASuggestion%20for%20improvement:)

itab - Performance Notes

-   [Table Sharing](#abenitab-perfo-1-------initial-memory-requirement---@ITOC@@ABENITAB_PERFO_2)
-   [Index Administration](#abenitab-perfo-3-------block-processing-of-table-lines---@ITOC@@ABENITAB_PERFO_4)
-   [Selective Data Transport](#abenitab-perfo-5-------using-secondary-keys---@ITOC@@ABENITAB_PERFO_6)
-   [Deleting Table Lines](#abenitab-perfo-7-------free-key-specified-for-sorted-tables-and-hashed-tables---@ITOC@@ABENITAB_PERFO_8)
-   [Sorting](#abenitab-perfo-9---table-sharing-----when-assignments-are-made-between-internal-tables-of-the-same-type-whose-line-type-does-not-contain-any-table-types--only-the-internal-administration-functions-are-passed-to-the--table-body--javascript-call-link---abentable-body-glosry-htm-----glossary-entry---for-performance-reasons---table-sharing--javascript-call-link---abentable-sharing-glosry-htm-----glossary-entry---is-revoked-only-when-write-access-to-one-of-the-tables-involved-is-initiated--the-actual-copy-process-then-takes-place---initial-memory-requirement-----internal-tables-are--dynamic-data-objects--javascript-call-link---abendynamic-data-object-glosry-htm-----glossary-entry---whose-area-in-the-memory-is-extended-block-by-block--the-size-of-the-first-block-in-the-memory-is-called--initial-memory-requirement--javascript-call-link---abeninitial-mem-req-glosry-htm-----glossary-entry---and-can-be-affected-in-the-declaration-of-an-internal-table-using-the-additions--initial-size--javascript-call-link---abaptypes-itab-htm-----and-the-obsolete--occurs--javascript-call-link---abapdata-occurs-htm-------it-is-usually-up-to-the-system-to-determine-the-size-of-the-first-block--initial-size-is-not-used-or-specified-with-the-value-0--in-this-case--a-suitable-block-size-is-chosen-the-first-time-lines-are-added-to-an-internal-table---specifying-a-concrete-value-greater-than-0-after-initial-size-is-only-practical-if-it-is-known-in-advance-how-many-entries-are-to-be-made-in-the-table--and-the-first-block-is-therefore-to-be-created-with-the-most-suitable-dimensions--this-can-be-particularly-important-for-internal-tables-that-are-components-of-other-internal-tables--and-which-only-contain-a-few-lines--no-more-than-around-5----to-avoid-excessive-memory-demands--the-system-ignores-values-that-produce-memory-demands-greater-than-the-constant-block-size---index-administration-----in-an--index-table--javascript-call-link---abenindex-table-glosry-htm-----glossary-entry----the-logical-order-of-the-table-entries-is-not-generally-consistent-with-the-physical-order-of-the-entries-in-the-main-memory--in-this-case--the-logical-order-is-no-longer-administrated-by-a-physical-index--but-by-a-logical-index--the-same-basically-applies-to-the--secondary-table-indexes--javascript-call-link---abensecondary-table-index-glosry-htm-----glossary-entry---used-to-manage--secondary--javascript-call-link---abensecondary-table-key-glosry-htm-----glossary-entry----sorted-keys--javascript-call-link---abensorted-key-glosry-htm-----glossary-entry-----use-of-the-logical-index-produces-additional-memory-requirements--and-index-maintenance-places-a-high-demand-on-resources--time-and-memory--when-inserting-or-deleting-table-lines--the-resource-requirements-increase-proportionally-with-the-number-of-remaining-lines-after-the-insertion-or-deletion-position--for-very-large-internal-tables--this-can-result-in-considerable-demands-on-performance-at-runtime---the-logical-index-is-only-created-when-it-is-needed--that-is--when-a-line-is-inserted-in-front-of-another-line--if-the-order-of-the-table-lines-is-changed--or-a-line-other-than-the-last-line-is-deleted--a-logical-index-is-not-required-if-an-internal-table-is-filled-using-only--append--javascript-call-link---abapappend-htm------and-if-only-its-last-line-or-lines-is-are-deleted-using--delete--javascript-call-link---abapdelete-itab-htm-------hint--in-contrast-to-filling-a-table-with--insert--javascript-call-link---abapinsert-itab-htm------appending-lines-with--append--javascript-call-link---abapappend-htm-----does-not-require-any-resources-for-index-maintenance--it-is-therefore-preferable-to-use-append-instead-of-insert-to-create-a--standard-table--javascript-call-link---abenstandard-table-glosry-htm-----glossary-entry----this-is-possible-if-the-order-of-the-entries-is-not-important--or-if-entries-can-be-appended-in-the-correct-order---block-processing-of-table-lines-----if-entire-line-areas-of-a-table-can-be-processed-at-once--this-should-not-be-done-line-by-line--but-using-block-operations--block-operations-are-possible-using-the-from-and-to-additions-of-the-statements--insert--javascript-call-link---abapinsert-itab-htm-------append--javascript-call-link---abapappend-htm-----and--delete--javascript-call-link---abapdelete-itab-htm------block-operations-are-also-more-efficient-than-single-record-operations-when-reading-from-or-modifying-database-tables-with--abap-sql--javascript-call-link---abenabap-sql-glosry-htm-----glossary-entry---statements-with-the-additions-from---appending---to-table---selective-data-transport-----if--when-reading-table-lines-using--read-table--javascript-call-link---abapread-table-htm-----or--loop-at--javascript-call-link---abaploop-at-itab-htm------a-work-area-is-used-or-table-lines-can-be-changed-using--modify--javascript-call-link---abapmodify-itab-htm-----instead-of-direct-access--the-transporting-addition-can-be-used-to-prevent-unnecessary-assignments-of-table-components-to-the-work-area--this-can-lead-to-a-noticeable-improvement-in-performance--particularly-if-table-like-components-are-excluded-from-processing---using-secondary-keys-----the--use-of-secondary-table-keys--javascript-call-link---abenitab-key-secondary-usage-htm-----should-be-planned-and-executed-carefully-and-sparingly--the-time-gained-when-accessing-individual-lines-should-not-be-lost-again-by-the-increased-memory-and-time-requirements-for-managing-the-secondary-keys--secondary-keys-are-generally-recommended-for-internal-tables-that-are-filled-once-and-rarely-changed-during-program-execution---example--the-program-demo--secondary--keys-demonstrates-how-a-secondary-table-key-is-specified-and-the-resulting-performance-gain---deleting-table-lines-----when-lines-are-deleted-from-an-internal-table--administration-costs-are-incurred-for-all-table-keys-and-table-indexes--the-primary-key-and-all-unique-secondary-keys-are-updated-directly--but-non-unique-secondary-keys-are-updated-only-if-the-line-to-be-deleted-is-included-in-the-updated-part-of-an-associated-index---lazy-update--javascript-call-link---abenlazy-update-glosry-htm-----glossary-entry------it-should-be-noted-that--particularly-for-standard-tables--the-mean-runtime-of-the-statement--delete--javascript-call-link---abapdelete-itab-htm-----always-depends-linearly-on-the-number-of-table-lines--even-when-secondary-keys-are-specified-using--with-table-key--javascript-call-link---abapdelete-itab-key-htm-----or--using-key--javascript-call-link---abapdelete-itab-key-htm------this-is-because-a-linear-search-is-required-to-update-the-primary-index--even-though-the-line-to-be-deleted-can-itself-be-found-quickly---deleting-lines-in-internal-tables-using--delete--javascript-call-link---abapdelete-itab-htm-----does-not-usually-release-any-memory-in-the-internal-table--statements-such-as--clear--javascript-call-link---abapclear-htm-----or--free--javascript-call-link---abapfree-dataobject-htm-----must-be-used-to-release-memory-in-internal-tables---free-key-specified-for-sorted-tables-and-hashed-tables-----when-using-the--read--javascript-call-link---abapread-table-htm-----statement-with-a-specified-free-key-of-the-form--with-key------javascript-call-link---abapread-table-free-htm------the-search-is-optimized-in-all-cases-where-this-is-possible--that-is-------in--sorted-tables--javascript-call-link---abensorted-table-glosry-htm-----glossary-entry----if-any-initial-section-of-the--table-key--javascript-call-link---abentable-key-glosry-htm-----glossary-entry---or-the-complete-table-key-is-covered-by-the-specified-key------in--hashed-tables--javascript-call-link---abenhashed-table-glosry-htm-----glossary-entry----if-the-complete-table-key-is-covered---if-part-of-a-free-key-meets-these-conditions--this-partial-key-is-first-used-to-search-for-an-entry--in-sorted-tables--this-is-done-using-a-binary-search-with-a-logarithmic-consumption-of-resources--and-in-hashed-tables-using-a-hash-algorithm--that-is--with-constant-resource-consumption--if-an-entry-is-found--the-system-checks-whether-the-rest-of-the-key-conditions-are-also-met--this-means-that-over-specific-keys-in-particular-are-optimized---hint--see-also--optimization-of-the-where-condition--javascript-call-link---abenitab-where-optimization-htm-------sorting-----for-textual-sorting-of-an-internal-table-in-accordance-with-the-current--text-environment--javascript-call-link---abentext-environment-glosry-htm-----glossary-entry----it-can-be-more-efficient-to-use-the-statement--convert-text-into-sortable-code--javascript-call-link---abapconvert-text-htm-----instead-of--sort-as-text--javascript-call-link---abapsort-itab-htm-----in-the-following-cases-------if-an-internal-table-is-sorted-by-locale-and-then-searched-binarily-using-the-statement-read-table-or-using-a--table-expression--javascript-call-link---abentable-expressions-htm----------an-internal-table-must-be-sorted-more-than-once------indexes-for-database-tables-should-be-structured-in-accordance-with-a-locale---continue--itab---optimizing-the-where-condition--javascript-call-link---abenitab-where-optimization-htm-----------abenitab-where-optimization-htm-------------as-abap-release-758---copyright-2024-sap-se--all-rights-reserved----abap---keyword-documentation--javascript-call-link---abenabap-htm---------abap---programming-language--javascript-call-link---abenabap-reference-htm---------processing-internal-data--javascript-call-link---abenabap-data-working-htm---------internal-tables--itab---javascript-call-link---abenitab-htm---------itab---performance-notes--javascript-call-link---abenitab-perfo-htm---------------mail-gif-object-mail-gif--feedback-mail-for-displayed-topic---mail-feedback--mailto-f1-helpsap.com?subject=Feedback%20on%20ABAP%20Documentation&body=Document:%20itab%20-%20Optimizing%20the%20WHERE%20Condition%2C%20ABENITAB_WHERE_OPTIMIZATION%2C%20758%0D%0A%0D%0AError:%0D%0A%0D%0A%0D%0A%0D%0ASuggestion%20for%20improve
ment:)

itab - Optimizing the WHERE Condition

Using the statements [LOOP AT](javascript:call_link\('abaploop_at_itab.htm'\)), [DELETE](javascript:call_link\('abapdelete_itab.htm'\)), and [MODIFY](javascript:call_link\('abapmodify_itab.htm'\)) a WHERE condition can be specified to select specific lines of the internal table. While the search across a [standard table](javascript:call_link\('abenstandard_table_glosry.htm'\) "Glossary Entry") is always linear and cannot be optimized when using the [primary table key](javascript:call_link\('abenprimary_table_key_glosry.htm'\) "Glossary Entry"), the compiler tries to optimize the search when the statement is processed by using a [sorted key](javascript:call_link\('abensorted_key_glosry.htm'\) "Glossary Entry") or a [hash key](javascript:call_link\('abenhash_key_glosry.htm'\) "Glossary Entry"). This is the case, when

-   accessing a [sorted table](javascript:call_link\('abensorted_table_glosry.htm'\) "Glossary Entry") using its primary key,
-   accessing a [hashed table](javascript:call_link\('abenhashed_table_glosry.htm'\) "Glossary Entry") using its primary key,
-   accessing a table of any table type using a [secondary table key](javascript:call_link\('abensecondary_table_key_glosry.htm'\) "Glossary Entry") specified by USING KEY.

For the optimization, the compiler tries to transform the [relational expressions](javascript:call_link\('abenrelational_expression_glosry.htm'\) "Glossary Entry") of the given WHERE condition into an equivalent WHERE condition that starts with comparisons between key fields and values combined by AND. These key/value pairs are then used as a key specification for an optimized key access (binary search or hash algorithm as in the statement [READ TABLE](javascript:call_link\('abapread_table.htm'\)) or a [table expression](javascript:call_link\('abentable_expressions.htm'\))), to find one or more lines. The found line or lines are then further checked using the remaining relational expressions from the WHERE condition that could not be extracted as key/value pairs.

Prerequisites for the optimization are therefore:

-   The relational expressions of the WHERE condition can be transformed to sufficient key/value pairs.
-   The corresponding key access returns the same results as the evaluation of respective part of the logical expression would. This is guaranteed only for compatible data types, since in the case of incompatible data types:
    -   The content of the specified data objects is converted to the data type of the columns before the evaluation in the case of key accesses.
    -   The [comparison rules](javascript:call_link\('abenlogexp_rules.htm'\)) for incompatible data types apply when evaluating a [comparison expression](javascript:call_link\('abencomparison_expression_glosry.htm'\) "Glossary Entry"). Here, all the data types involved play a part in determining which operand is converted into which comparison type.

If there are no or insufficient relational expressions to meet both of these prerequisites, no optimization is possible and the behavior is as follows:

-   If a sorted table or a hashed table is accessed using the primary table key, all lines of the internal table are checked as in a standard table.
-   If the table is read using a secondary table key, that is, if said key is specified after USING KEY, a syntax error or syntax check warning, or an exception is raised. Access using a secondary table key must always be executed in an optimized way.

The following sections describe when an access can be optimized.

-   [Prerequisites for the Optimization of Hash Keys](#abenitab-where-optimization-1-------prerequisites-for-the-optimization-of-sorted-keys---@ITOC@@ABENITAB_WHERE_OPTIMIZATION_2)
-   [Prerequisites for the Operands](#abenitab-where-optimization-3---hints------by-specifying-a-key-with-using-key--it-can-be-checked--whether-an-optimization-is-possible-for-a-where-condition--the-long-texts-of-the-syntax-errors-and-warnings-provide-detailed-information-for-dedicated-situations------if-the-lines-selected-using-where-are-modified-or-deleted-using--modify--javascript-call-link---abapmodify-itab-htm-----or--delete--javascript-call-link---abapdelete-itab-htm-----and-not-just-read-using--loop-at--javascript-call-link---abaploop-at-itab-htm------further-update-costs-are-incurred-in-addition-to-the-search-for-the-lines--when-deleting-lines-from-standard-tables--it-should-be-noted-that-searches-using-a-secondary-key-optimize-the-selection-of-lines-to-be-deleted--but-not-the-update-required-for-the-primary-key--which-is-usually-performed-using-a-linear-search---prerequisites-for-the-optimization-of-hash-keys-----in-the-case-of-a--hash-key--javascript-call-link---abenhash-key-glosry-htm-----glossary-entry---access--it-must-be-possible-to-transform-the-where-condition-fully-or-partly-to-a-set-of-comparisons-on-equality-combined-by-and-that-cover-all-components-of-the-key--the-operands-must-meet-the-prerequisites-described-below---the-operands-of-these-relational-expressions-are-then-used-as-the-key-value-pairs-for-the-key-access--the-remainder-of-the-logical-expression-can-contain-any-number-of-relational-expressions-combined-using-and--key-components-may-be-used-in-the-relational-expressions-not-used-for-the-key-access-but-not-for-comparisons-on-equality---comparisons-specified-by-the-tabular-comparison-operator--in-range--tab--javascript-call-link---abenlogexp-select-option-htm-----are-ignored-by-the-optimization--they-are-never-part-of-the-key-access-but-are-always-applied-to-the-lines-found-by-the-key-access---example--in-the-following-example-------the-first-where-condition-can-be-optimized--it-is-already-written-in-an-optimized-form--where-the-three-key-fields-are-compared-for-equality-and-combined-by-and--a-comparison-for-a-further-column-is-also-appended-by-and------the-second-where-condition-can-be-optimized--the-compiler-can-transform-it-to-the-first-where-condition-by-removing-the-double-negation-with-not-and-by-replacing-is-initial-with-a-comparison-for-equality------the-third-where-condition-can-be-optimized--the-compiler-can-transform-the-comparisons-combined-by-or-into-comparisons-combined-by-and-using-de-morgan-s-laws--also-the-double-negation-with-not-for-is-initial-is-identified-and-removed------the-fourth-where-condition-cannot-be-optimized-because-a-comparison-for-a-further-column-is-appended-by-or------the-fifth-where-condition-cannot-be-optimized-because-there-is-a-duplicate-comparison-for-equality-for-a-key-field---types----begin-of-line------a-type-i------b-type-i------c-type-i------d-type-i----end-of-line--data-itab-type-standard-table-of-line----------------with-unique-hashed-key-key-components-a-b-c--loop-at-itab-using-key-key--------------assigning-field-symbol--fs1----------------where-a---3-and-b---3-and-c---0-and-d---1--------endloop--loop-at-itab-using-key-key--------------assigning-field-symbol--fs2----------------where-d---1-and--------------------not---not---a---3-and-b---3-----and--------------------c-is-initial--------endloop--loop-at-itab-using-key-key--------------assigning-field-symbol--fs3----------------where-not---not-a---3-or-not-b---3---and--------------------d---1-and--------------------not-c-is-not-initial--------endloop----loop-at-itab-using-key-key--syntax-error----------------assigning-field-symbol--fs4------------------where-a---3-and-b---3-and-c---0-or-d---1------------endloop----loop-at-itab-using-key-key--syntax-error----------------assigning-field-symbol--fs5------------------where-a---3-and-b---3-and-c---0-and-a---1------------endloop---prerequisites-for-the-optimization-of-sorted-keys-----in-the-case-of-a--sorted-key--javascript-call-link---abensorted-key-glosry-htm-----glossary-entry---access--it-must-be-possible-to-transform-the-where-condition-fully-or-a-partly-to-a-set-of-comparisons-with-any--binary-comparison-operators--javascript-call-link---abenlogexp-any-operand-htm-----or-with--between--javascript-call-link---abenlogexp-between-htm-----combined-by-and-that-cover-an-initial-section-of-the-key-consisting-of-at-least-one-component--the-operands-must-meet-the-prerequisites-described-below---the-operands-of-these-relational-expressions-are-then-used-as-the-key-value-pairs-for-the-key-access--the-remainder-of-the-logical-expression-can-contain-any-number-of-relational-expressions-combined-using-and--key-components-may-be-used-in-the-relational-expressions-not-used-for-the-key-access-but-not-for-comparisons-on-equality--nevertheless--the-duplicate-use-of-key-fields-in-comparisons-leads-to-a-syntax-warning---the-access-to-the-internal-table-is-partially-sequential--for-a-forward-loop--the-starting-point-for-processing-is-determined-by-a-binary-search-with-the-extracted-key-value-pairs-for-relations--------------and-between--first-operand--that-cover-the-table-key-completely-or-partially--from-the-starting-point-on--the-table-is-only-processed-as-long-as-subconditions-for-pairs-with-relations------------and-between--second-operand--remain-fulfilled--for-a-backward-loop--see--step--abaploop-at-itab-cond-htm--abap-addition-33@)), the starting point is determined by pairs with relations \=, <=, <, and BETWEEN (second operand) and the processing is stopped when subconditions for pairs with \=, \>=, \>, and BETWEEN (first operand) are not fulfilled any more.

Comparisons specified by a tabular comparison operator [IN range\_tab](javascript:call_link\('abenlogexp_select_option.htm'\)) appended with AND are ignored by the optimization. They are never part of the key access but always applied to the lines found by the key access.

Example

In the following example:

-   The first WHERE condition can be optimized. It is already written in an optimized form, where the three key fields are compared with different operators combined by AND. A comparison for a further column is also appended by AND.
-   The second WHERE condition can be optimized. It is already written in an optimized form, where the first two key fields are compared.
-   The third WHERE condition can be optimized. The first two key fields are extracted for the key access and the condition for the third key field is evaluated together with the additional condition on the resulting lines.
-   The fourth WHERE condition can be optimized. The compiler can use De Morgan's Laws to transform the condition to comparisons combined by AND.
-   The fifth WHERE condition can be optimized because it uses BETWEEN for the first key field.
-   The sixth WHERE condition cannot be optimized because the additional condition is combined by OR.
-   The seventh WHERE condition cannot be optimized because a key field is used two times with comparisons on equality.
-   The eighth WHERE condition can be optimized but produces a syntax warning, suppressed by a pragma here, because a field is used twice.

TYPES:
  BEGIN OF line,
    a TYPE i,
    b TYPE i,
    c TYPE i,
    d TYPE i,
  END OF line.
DATA itab TYPE STANDARD TABLE OF line
               WITH UNIQUE SORTED KEY key COMPONENTS a b c.
LOOP AT itab USING KEY key
             ASSIGNING FIELD-SYMBOL(<fs1>)
             WHERE a = 3 AND b >= 3 AND c < 0 AND d > 1.
  ...
ENDLOOP.
LOOP AT itab USING KEY key
             ASSIGNING FIELD-SYMBOL(<fs2>)
             WHERE a = 3 AND b < 3 AND d > 1.
  ...
ENDLOOP.
LOOP AT itab USING KEY key
             ASSIGNING FIELD-SYMBOL(<fs3>)
             WHERE a = 3 AND b = 3 AND NOT c = 1 AND d > 1.
  ...
ENDLOOP.
LOOP AT itab USING KEY key
             ASSIGNING FIELD-SYMBOL(<fs4>)
             WHERE NOT ( NOT a = 3 OR NOT b = 3 ).
  ...
ENDLOOP.
LOOP AT itab USING KEY key
             ASSIGNING FIELD-SYMBOL(<fs5>)
             WHERE a BETWEEN 1 AND 3.
  ...
ENDLOOP.
\*LOOP AT itab USING KEY key "Syntax error
\*             ASSIGNING FIELD-SYMBOL(<fs6>)
\*             WHERE a = 3 AND b = 3 OR d > 1.
\*  ...
\*ENDLOOP.
\*LOOP AT itab USING KEY key "Syntax error
\*             ASSIGNING FIELD-SYMBOL(<fs7>)
\*             WHERE a = 3 AND b = 3 AND a = 1.
\*  ...
\*ENDLOOP.
LOOP AT itab USING KEY key
             ASSIGNING FIELD-SYMBOL(<fs8>)
             WHERE a = 3 AND b = 3 AND a > 1 ##ITAB\_DUP\_IN\_WHERE\[A\].
  ...
ENDLOOP.

Example

In this example, the partially sequential access to the internal table is as follows:

-   The first loop is a forward loop.
    -   The starting point is determined by key/value pairs of relations a =0, b >= 0, c > 2.
    -   The table is processed as long as subconditions for the pairs a = 0, b < 5 are fulfilled.
-   The second loop is a backward loop.
    -   The starting point is determined by the pairs a <= 1, b < 5.
    -   The table is processed as long as subconditions for the pairs a >= -1, b >= 0, c > 2 are fulfilled.
-   The third loop is a forward loop and the fourth loop is a backward loop. Since for both loops there is no relation for key field a:
    
    -   No starting point can be determined.
    -   No subconditions can be determined.
    
    An optimization is not possible
    

TYPES:
  BEGIN OF line,
    a TYPE i,
    b TYPE i,
    c TYPE i,
    d TYPE i,
  END OF line.
DATA itab TYPE STANDARD TABLE OF line
               WITH UNIQUE SORTED KEY key COMPONENTS a b c.
LOOP AT itab USING KEY key
             ASSIGNING FIELD-SYMBOL(<fs1>)
             WHERE a = 0 AND b >= 0 AND b < 5 AND c > 2.
  ...
ENDLOOP.
LOOP AT itab USING KEY key
             ASSIGNING FIELD-SYMBOL(<fs2>)
             STEP -1
             WHERE a BETWEEN -1 AND 1 AND b >= 0 AND b < 5 AND c > 2.
  ...
ENDLOOP.
\*LOOP AT itab USING KEY key "Syntax error
\*             ASSIGNING FIELD-SYMBOL(<fs3>)
\*             WHERE b >= 0 AND b < 5 AND c > 2.
\*  ...
\*ENDLOOP.
\*LOOP AT itab USING KEY key "Syntax error
\*             ASSIGNING FIELD-SYMBOL(<fs4>)
\*             STEP -1
\*             WHERE b >= 0 AND b < 5 AND c > 2.
\*  ...
\*ENDLOOP.

Prerequisites for the Operands   

The part of the logical expression that can be mapped to a key access must select the same lines as a statement [READ TABLE](javascript:call_link\('abapread_table.htm'\)) or a corresponding [table expression](javascript:call_link\('abentable_expressions.htm'\)) that specifies the corresponding components as keys.

-   In the WHERE condition, the [comparison rules](javascript:call_link\('abenlogexp_rules.htm'\)) for incompatible data types apply when comparing incompatible data objects, where it depends on the data types involved which operand is converted to which comparison type.
-   If the additions [WITH TABLE KEY](javascript:call_link\('abapread_table_key.htm'\)) and [WITH KEY](javascript:call_link\('abapread_table_free.htm'\)) of the statement READ or [KEY](javascript:call_link\('abentable_exp_itab_line.htm'\)) in a table expression are used, however, the content of the specified data objects is always converted to the data type of the columns before the comparison.

If this leads to different results, an optimization is not possible. Because of the complexity of the comparison rules, especially for [elementary data types](javascript:call_link\('abenlogexp_rules_operands.htm'\)), it is not useful to set up a detailed set of rules when the comparison type exactly matches the data type of the left operand. Generally speaking,

-   only fully compatible operands are optimizable,
-   in some cases, elementary operands with different data types can be optimized, if the value ranges or lengths are suitable. For example, a comparison of a column with the type of a floating point number with an operand of type integer or of a column of c with a similar operand, if its length is less than the length of the column.

For this reason, it is advisable to use only pairs of [compatible](javascript:call_link\('abencompatible_glosry.htm'\) "Glossary Entry") operands in the WHERE condition. This guarantees that the differences in behavior of the WHERE condition and the specified key do not affect the result.

Example

The following example is similar to the example in the section WHERE log\_exp in [LOOP AT itab](javascript:call_link\('abaploop_at_itab_cond.htm'\)).

-   There, the access is done via the primary table key. No optimization takes place, but there is no warning from the syntax check.
-   Here, the access is done via a secondary table key, resulting in a warning from the syntax check and a possible exception during program execution. Whether the exception is raised depends on the number of lines in the internal table.

DATA text\_short TYPE c LENGTH 2.
DATA text\_long  TYPE c LENGTH 4.
DATA itab LIKE TABLE OF text\_short
          WITH UNIQUE HASHED KEY key COMPONENTS table\_line.
itab = VALUE #( ( 'AA' )
                ( 'BB' )
                ( 'CC' )
                ( 'DD' )
                ( 'EE' )
                ( 'FF' )
                ( 'GG' )
                ( 'HH' )
                ( 'II' )
                ( 'JJ' )
                ( 'KK' )
                ( 'LL' )
                ( 'MM' ) ).
text\_short = 'AA'.
text\_long  = 'AAXX'.
LOOP AT itab INTO text\_short USING KEY key
             WHERE table\_line = text\_long.
ENDLOOP.
cl\_demo\_output=>write( |LOOP: { sy-subrc }| ).
"Statement
READ TABLE itab INTO text\_short WITH TABLE KEY key
                                COMPONENTS table\_line = text\_long.
cl\_demo\_output=>write( |READ: { sy-subrc }| ).
"Expression
TRY.
    text\_short = itab\[ KEY key COMPONENTS table\_line = text\_long \].
  CATCH cx\_sy\_itab\_line\_not\_found.
    ...
ENDTRY.
cl\_demo\_output=>display( |Expression: { text\_short }| ).

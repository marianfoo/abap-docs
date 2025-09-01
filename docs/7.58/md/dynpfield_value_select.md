  

* * *

AS ABAP Release 758, ©Copyright 2024 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenabap.htm) →  [ABAP - Programming Language](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenabap_reference.htm) →  [Obsolete Language Elements](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenabap_obsolete.htm) →  [Obsolete User Dialogs](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abengui_obsolete.htm) →  [dynpro - Obsolete Statements in Dynpro Flow Logic](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abendynpro_obsolet.htm) → 

 [![](Mail.gif?object=Mail.gif "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback%20on%20ABAP%20Documentation&body=Document:%20dynpro%20-%20FIELD%20VALUES%2C%20FIELD%20SELECT%2C%20DYNPFIELD_VALUE_SELECT%2C%20758%0D%0A%0D%0AError:%0D%0A%0D%0A%0D%0A%0D%0ASuggestion%20for%20improvement:
)

dynpro - FIELD VALUES, FIELD SELECT

Obsolete Syntax

Variants:

[1\. FIELD f VALUES (*\[**\[*NOT*\]* val1*\]*, *\[**\[*NOT*\]* val2*\]*, ...](#!ABAP_VARIANT_1@1@)
                  *\[**\[*NOT*\]* BETWEEN vali AND valj*\]*, ...).
[2\. FIELD f SELECT \*](#!ABAP_VARIANT_2@2@)
            FROM dbtab
            WHERE col1 = f1 AND col2 = f2 ...
            *\[*INTO wa*\]*
            WHENEVER *\[*NOT*\]* FOUND
               SEND *{*ERRORMESSAGE*|*WARNING*}* *\[*num *\[*WITH p1 ... p4*\]**\]*.

Effect

These variants of the statement [FIELD](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/dynpfield.htm) can be used in the event block at PAI in the dynpro flow logic. They compare the content of the dynpro field f either with entries from a value list or with the results of a database access.

These types of input checks in the dynpro flow logic are executed after the automatic input checks and before the user-defined input checks in the ABAP program. The specified value list or the result set from the database accesses override the automatic input helps in the ABAP Dictionary and are themselves overridden by the events POH and POV. The additions VALUES and SELECT do not modify the effect of the statement FIELDS on the data transport from the dynpro to the ABAP program.

Hint

These variants are supported only for reasons of compatibility and should be replaced by checks in the ABAP program.

Variant 1   

FIELD f VALUES (*\[**\[*NOT*\]* val1*\]*, *\[**\[*NOT*\]* val2*\]*, ...
                *\[**\[*NOT*\]* BETWEEN vali AND valj*\]*, ...).

Effect

A value list is specified by entries in parentheses and separated by commas after the addition VALUES.

The content of the dynpro field f can be compared with single values val1,val2 ... and with value ranges *\[*vali,valj*\]*. The result of each of the comparisons can be negated using the NOT operator. The comparison fields val must be enclosed in inverted commas and specified in uppercase letters. The content must be part of the value ranges of the data types CHAR or NUMC in the ABAP Dictionary.

If a comparison is not true, an error message appears in the status bar of the current GUI window and the associated input field is made ready for input again.

Example

Checks the input field for an airline.

PROCESS AFTER INPUT.
  FIELD carrier
        VALUES ('AA', NOT 'BA', BETWEEN 'QF' AND 'UA').

Variant 2   

FIELD f SELECT \*
          FROM dbtab
          WHERE col1 = f1 AND col2 = f2 ...
          *\[*INTO wa*\]*
          WHENEVER *\[*NOT*\]* FOUND
             SEND *{*ERRORMESSAGE*|*WARNING*}* *\[*num *\[*WITH p1 ... p4*\]**\]*.

Effect

When the statement FIELD is executed, the addition SELECT searches for a row of the database table dbtab whose primary key fields col1 col2 ... match the content of the dynpro fields f1 f2 .... The database table dbtab must be defined in the ABAP Dictionary. In the WHERE condition, all primary key fields of the database table that are specified in AND comparisons must be specified with an equal sign (\=).

Depending on whether the addition NOT is specified or not, an error or warning message is sent if no entries or only one entry was found in the database table. In both cases, the input field for dynpro field f is made ready for input again. The message class of the message to be sent must be two characters long and is taken from the first two places of the value specified after the addition MESSAGE-ID of the program-initiating statement of the associated ABAP program. If a message class is not specified there, a standard message is sent. The message number can be specified as a numeric literal num. If the message contains placeholders, they can be filled with up to four values p1 to p4 as in the ABAP statement MESSAGE with the addition WITH. The placeholders can be specified either as text literals or as dynpro fields.

If a row is found, its content can be assigned to a table work area wa whose structure must match the row type of dbtab. A table area like this is declared in the dynpro by adopting dynpro fields from the ABAP Dictionary.

Hints

-   Without the addition INTO, the addition SELECT is similar to a subquery in ABAP SQL. If the addition INTO is used, the SELECT syntax above can be used as a standalone statement in the dynpro flow logic, that is, without the FIELD statement. However, the use of a dynpro statement SELECT is also obsolete and must be replaced by the corresponding ABAP SQL statement in the ABAP program.
-   If the addition SELECT is used for the statement FIELD of the dynpro flow logic, [table buffering](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abentable_buffering_glosry.htm "Glossary Entry") is applied, if activated.
-   For the automatic input checks of dynpros using [check tables](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abencheck_table_glosry.htm "Glossary Entry"), corresponding internal FIELD statements are generated with the addition SELECT. For this reason, [table buffering](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abentable_buffering_glosry.htm "Glossary Entry") is also applied, if activated, when check tables are accessed.

Example

Checks whether a row with the same primary key exists in the database table spfli for the dynpro fields carrier and connect. The associated ABAP program must contain an appropriate MESSAGE-ID addition in its program-initiating statement.

PROCESS AFTER INPUT.
  FIELD connect
    SELECT \*
           FROM spfli
           WHERE carrid = carrier AND connid = connect
           WHENEVER NOT FOUND SEND ERRORMESSAGE 107
             WITH carrier connect.

Executable Examples

-   [Dynpros, Obsolete Input Check Using SELECT](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abendynpro_check_flow_abexa.htm)
-   [Dynpros, Obsolete Input Help Using SELECT](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abendynpro_f4_help_dyn_abexa.htm)

Continue
![Example](exa.gif "Example") [dynpro - Obsolete Input Check Using SELECT](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abendynpro_check_flow_abexa.htm)
![Example](exa.gif "Example") [dynpro - Obsolete Input Help Using SELECT](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abendynpro_f4_help_dyn_abexa.htm)
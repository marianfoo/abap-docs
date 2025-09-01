  

* * *

AS ABAP Release 758, ©Copyright 2024 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP - Programming Language](javascript:call_link\('abenabap_reference.htm'\)) →  [Program Maintenance](javascript:call_link\('abenprogram_editing.htm'\)) →  [Testing and Checking Programs](javascript:call_link\('abenabap_tests.htm'\)) →  [ABAP Unit](javascript:call_link\('abenabap_unit.htm'\)) →  [Test Seams](javascript:call_link\('abentest_seams.htm'\)) → 

 [![](Mail.gif?object=Mail.gif "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback%20on%20ABAP%20Documentation&body=Document:%20TEST-SEAM%2C%20ABAPTEST-SEAM%2C%20758%0D%0A%0D%0AError:%0D%0A%0D%0A%0D%0A%0D%0ASuggestion%20for%20improvement:)

TEST-SEAM

[Short Reference](javascript:call_link\('abaptest-seam_shortref.htm'\))

Syntax

TEST-SEAM seam.
  *\[*statement\_block*\]*
END-TEST-SEAM.

Effect

The statement TEST-SEAM introduces a [test seam](javascript:call_link\('abentest_seam_glosry.htm'\) "Glossary Entry") called seam, which is closed by END-TEST-SEAM. A [test class](javascript:call_link\('abentest_class_glosry.htm'\) "Glossary Entry") of the current program can use the statement [TEST-INJECTION](javascript:call_link\('abaptest-injection.htm'\)) to replace the statement block statement\_block with an [injection](javascript:call_link\('abeninjection_glosry.htm'\) "Glossary Entry") defined there. If no injection is performed for the test seam, the original code is executed.

Test seams have the following properties:

-   Multiple test seams can be defined in a single [compilation unit](javascript:call_link\('abencompilation_unit_glosry.htm'\) "Glossary Entry"), but each must have a unique name.
-   The general [naming conventions](javascript:call_link\('abennaming_conventions.htm'\)) apply to the name seam.
-   Test seams cannot be nested, which means that a test seam cannot contain further test seams.
-   A test seam cannot extend beyond the limits of a [statement block](javascript:call_link\('abenstatement_block_glosry.htm'\) "Glossary Entry") but can contain closed [control structures](javascript:call_link\('abencontrol_structure_glosry.htm'\) "Glossary Entry").
-   A test seam can include data declarations. These declarations are not replaced when an injection is performed and remain visible in their context.
-   Test seams can be defined in the [global declaration part](javascript:call_link\('abenglobal_declaration_sect_glosry.htm'\) "Glossary Entry") of a program but not in the [declaration part](javascript:call_link\('abendeclaration_part_glosry.htm'\) "Glossary Entry") of a class.
-   A test seam can be empty, that is, it does not contain any statements. An injection is inserted instead.
-   Test seams cannot be defined in test classes.

Hints

-   The [injections](javascript:call_link\('abeninjection_glosry.htm'\) "Glossary Entry") for a test seam must be defined in the same [compilation unit](javascript:call_link\('abencompilation_unit_glosry.htm'\) "Glossary Entry").
-   [Injections](javascript:call_link\('abeninjection_glosry.htm'\) "Glossary Entry") can only be created in test classes that are defined in a [test include](javascript:call_link\('abentest_include_glosry.htm'\) "Glossary Entry") of the current program. Test includes are currently only possible in [class pools](javascript:call_link\('abenclass_pool_glosry.htm'\) "Glossary Entry") and [function pools](javascript:call_link\('abenfunction_pool_glosry.htm'\) "Glossary Entry"). This means that test seams are only feasible in class pools and function pools.

Example

Here, the class CL\_DEMO\_TEST\_SEAMS is an example of production code. The method CHANGE\_PRICE multiplies the price of a flight in the database table SFLIGHT by a factor and, if successful, returns the modified price. If a database access fails, a specific invalid value is returned instead of the price.

Test seams are defined for both database accesses. This makes it possible to run a unit test without accessing actual data. See the example for [TEST-INJECTION](javascript:call_link\('abaptest-injection.htm'\)).

METHOD change\_price.
  DATA wa TYPE sflight.
  TEST-SEAM selection.
    SELECT SINGLE \*
           FROM sflight
           WHERE carrid = @carrid AND
                 connid = @connid AND
                 fldate = @fldate
           INTO @wa.
    subrc = sy-subrc.
  END-TEST-SEAM.
  IF subrc <> 0.
    new\_price = -1.
    RETURN.
  ENDIF.
  wa-price = wa-price \* factor / 100.
  TEST-SEAM modification.
    MODIFY sflight FROM @wa.
    subrc = sy-subrc.
  END-TEST-SEAM.
  IF subrc = 0.
    new\_price = wa-price.
  ELSE.
    new\_price = -2.
  ENDIF.
ENDMETHOD.

Continue
[END-TEST-SEAM](javascript:call_link\('abapend-test-seam.htm'\))
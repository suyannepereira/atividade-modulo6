using System;
using Microsoft.EntityFrameworkCore.Metadata;
using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace ageTravel_api.Migrations
{
    public partial class segundoBD : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.RenameColumn(
                name: "telefone",
                table: "Clientes",
                newName: "Telefone");

            migrationBuilder.RenameColumn(
                name: "senha",
                table: "Clientes",
                newName: "Senha");

            migrationBuilder.RenameColumn(
                name: "nome",
                table: "Clientes",
                newName: "Nome");

            migrationBuilder.RenameColumn(
                name: "email",
                table: "Clientes",
                newName: "Email");

            migrationBuilder.CreateTable(
                name: "Destinos",
                columns: table => new
                {
                    Id = table.Column<int>(type: "int", nullable: false)
                        .Annotation("MySql:ValueGenerationStrategy", MySqlValueGenerationStrategy.IdentityColumn),
                    Nome = table.Column<string>(type: "longtext", nullable: true)
                        .Annotation("MySql:CharSet", "utf8mb4"),
                    Preco = table.Column<double>(type: "double", nullable: false),
                    Data = table.Column<DateTime>(type: "datetime(6)", nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Destinos", x => x.Id);
                })
                .Annotation("MySql:CharSet", "utf8mb4");

            migrationBuilder.CreateTable(
                name: "Compras",
                columns: table => new
                {
                    Id = table.Column<int>(type: "int", nullable: false)
                        .Annotation("MySql:ValueGenerationStrategy", MySqlValueGenerationStrategy.IdentityColumn),
                    Data = table.Column<DateTime>(type: "datetime(6)", nullable: false),
                    Total = table.Column<double>(type: "double", nullable: false),
                    ClienteId = table.Column<int>(type: "int", nullable: false),
                    ClientesId = table.Column<int>(type: "int", nullable: true),
                    DestinoId = table.Column<int>(type: "int", nullable: false),
                    DestinosId = table.Column<int>(type: "int", nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Compras", x => x.Id);
                    table.ForeignKey(
                        name: "FK_Compras_Clientes_ClientesId",
                        column: x => x.ClientesId,
                        principalTable: "Clientes",
                        principalColumn: "Id");
                    table.ForeignKey(
                        name: "FK_Compras_Destinos_DestinosId",
                        column: x => x.DestinosId,
                        principalTable: "Destinos",
                        principalColumn: "Id");
                })
                .Annotation("MySql:CharSet", "utf8mb4");

            migrationBuilder.CreateIndex(
                name: "IX_Compras_ClientesId",
                table: "Compras",
                column: "ClientesId");

            migrationBuilder.CreateIndex(
                name: "IX_Compras_DestinosId",
                table: "Compras",
                column: "DestinosId");
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropTable(
                name: "Compras");

            migrationBuilder.DropTable(
                name: "Destinos");

            migrationBuilder.RenameColumn(
                name: "Telefone",
                table: "Clientes",
                newName: "telefone");

            migrationBuilder.RenameColumn(
                name: "Senha",
                table: "Clientes",
                newName: "senha");

            migrationBuilder.RenameColumn(
                name: "Nome",
                table: "Clientes",
                newName: "nome");

            migrationBuilder.RenameColumn(
                name: "Email",
                table: "Clientes",
                newName: "email");
        }
    }
}
